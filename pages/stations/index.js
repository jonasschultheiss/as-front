import StationForm from '../../components/stationForm';
import { deleter, post } from '../../misc/fetcher';

export default function CreateStationView() {
  const handleDelete = async () => {
    deleter(`/stations/${id}`).finally(() => router.push('/'));
  };

  const handleSubmit = async (values) => {
    await post(`/stations/`, JSON.stringify(values));
  };

  return (
    <div className="bg-gray-200 rounded p-2">
      <h3 className="text-xl font-semibold mb-6">Create a new station</h3>

      <StationForm
        onSubmit={handleSubmit}
        initialData={{
          name: '',
          address: '',
          city: '',
          latitude: 47.367348257,
          longitude: 8.4942242729,
          prices: [
            {
              price: '1.99',
              currency: '',
              product_id: '',
            },
          ],
          products: [
            {
              product_id: '',
              points: [
                {
                  status: 'available',
                },
              ],
            },
          ],
        }}
      />
    </div>
  );
}
