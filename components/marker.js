import { Marker } from '@react-google-maps/api';
import { useRouter } from 'next/dist/client/router';

export default function CustomMarker({ id, name, latitude, longitude }) {
  const router = useRouter();
  const handleClicked = () => {
    router.push(`/stations/${id}`);
  };

  return <Marker clickable title={name} position={{ lat: latitude, lng: longitude }} onClick={handleClicked} />;
}
