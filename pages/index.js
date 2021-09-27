import useSWR from 'swr';
import Map from '../components/map';
import { get } from '../misc/fetcher';

export default function Home() {
  const { data, error } = useSWR('/stations', get);

  return (
    <div className="bg-gray-800">
      <Map stations={data} />
    </div>
  );
}
