import { SettingsBrightnessSharp } from '@mui/icons-material';
import axios from 'axios';
import { useState, useEffect } from 'react';
import dummyTrips from '../../dummyTrips';
import TripCard from '../../component/TripCard/TripCard';
import './MyTrips.scss';
function MyTrips() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/trips').then((response) => {
      const newTrips = response.data;
      setTrips([...newTrips]);
    });
  }, []);

  if (trips.length) {
    return (
      <div className="my-trips">
        <div className="card-holder">
          {trips.map((trip) => {
            return (
              <TripCard
                cityImage={trip.photo_reference}
                destination={trip.destination}
                start={trip.start}
                end={trip.end}
                lastEditDate={trip.updated_at}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <>loading ...</>;
  }
}

export default MyTrips;

{
  /* <div>{trips.map((trip) => {})}</div> */
}
