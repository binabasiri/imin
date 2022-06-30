import { SettingsBrightnessSharp } from '@mui/icons-material';
import axios from 'axios';
import { useState, useEffect } from 'react';
import dummyTrips from '../../dummyTrips';
import TripCard from '../../component/TripCard/TripCard';
function MyTrips() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    // axios.get('http://localhost:8080/trips');
    setTrips([...dummyTrips]);
  }, []);

  if (trips.length) {
    return (
      <>
        {trips.map((trip) => {
          return (
            <div>
              <TripCard
                destination={trip.destination}
                startDate={trip.date_from}
                endDate={trip.date_to}
                lastEditDate={trip.updated_at}
              />
            </div>
          );
        })}
      </>
    );
  } else {
    return <>loading ...</>;
  }
}

export default MyTrips;

{
  /* <div>{trips.map((trip) => {})}</div> */
}
