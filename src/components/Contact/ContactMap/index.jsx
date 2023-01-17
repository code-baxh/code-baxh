import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import ContactInfoData from '../../../data/contact.json';

const center = {
  lat: ContactInfoData.map.lat,
  lng: ContactInfoData.map.lng
};

const ContactMap = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBUuulrvCnOXdFjcdwH5195PLMyqqg9GEs">
      <GoogleMap mapContainerStyle={{ width: '100%', height: '60vh' }} center={center} zoom={12}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  )
}

export default ContactMap
