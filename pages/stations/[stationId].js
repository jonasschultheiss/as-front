import { useRouter } from 'next/dist/client/router';
import useSWR from 'swr';
import Button from '../../components/button';
import StationForm from '../../components/stationForm';
import { deleter, get, patch } from '../../misc/fetcher';

export default function StationView() {
  const router = useRouter();
  const { stationId } = router.query;

  const { data, error } = useSWR(`/stations/${stationId}`, get, {
    revalidateOnFocus: false,
  });
  if (error) return <p className="font-semibold text-red-500">An error has occurred.</p>;
  if (!data) return <p>Loading...</p>;

  const { id, name, address, city, latitude, longitude, prices, products } = data;

  const handleDelete = async () => {
    deleter(`/stations/${id}`).finally(() => router.push('/'));
  };

  const findMatchingPrices = (prices) => {
    let found = [];

    // crying rn
    // bad run time complexity (n^2 or smth) and not how you should solve things
    // i don't really get your data structure and i'm not sure, if i should change it or adapt
    // i went with the later
    prices.forEach((newPrice) => {
      data.prices?.forEach((oldPrice) => {
        if (oldPrice.currency === newPrice.currency && oldPrice.product_id === newPrice.product_id) {
          found.push({
            oldPrice: oldPrice.price,
            newPrice: newPrice.price,
          });
        }
      });
    });

    return found;
  };

  const handleSubmit = async (values) => {
    const updatedValues = { name: values.name, prices: findMatchingPrices(values.prices) };
    await patch(`/stations/${stationId}`, JSON.stringify(updatedValues));
  };

  return (
    <div className="bg-gray-200 rounded p-2">
      <div className="flex w-full justify-between items-start">
        <h3 className="text-xl font-semibold mb-6">View station {`"${name}"`}</h3>
        <Button text="Delete station" onClick={() => handleDelete()} />
      </div>
      <StationForm initialData={data} stationId={id} onSubmit={handleSubmit} />
    </div>
  );
}
