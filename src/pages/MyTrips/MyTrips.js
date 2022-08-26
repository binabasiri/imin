import { SettingsBrightnessSharp } from '@mui/icons-material';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import TripCard from '../../component/TripCard/TripCard';
import './MyTrips.scss';
function MyTrips({ user }) {
  const history = useHistory();
  const [trips, setTrips] = useState([]);
  const token = sessionStorage.getItem('authToken');

  useEffect(() => {
    if (!user || !user.id) history.push('/signup');
  }, [user, history]);

  const deleteTripHandle = (event) => {
    axios
      .delete(`http://localhost:8080/trips/${event.target.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        const newTrips = trips.filter((trip) => trip.id !== event.target.id);
        setTrips([...newTrips]);
      });
  };

  useEffect(() => {
    if (token) {
      axios
        .get('http://localhost:8080/trips', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          const newTrips = response.data;
          setTrips([...newTrips]);
        });
    }
  }, []);

  if (trips.length) {
    return (
      <div className="my-trips">
        <div className="card-holder">
          {trips.map((trip) => {
            return (
              <TripCard
                key={trip.id}
                cityImage={trip.photo_reference}
                destination={trip.destination}
                start={trip.start}
                end={trip.end}
                lastEditDate={trip.updated_at}
                selectedRestaurants={trip.selectedRestaurants}
                selectedTouristAttractions={trip.selectedTouristAttractions}
                isOut={true}
                deleteTripHandle={deleteTripHandle}
                id={trip.id}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="my-trips">
        <span className="my-trips__no-trip">No trip to show...</span>
      </div>
    );
  }
}

export default MyTrips;

{
  /* <div>{trips.map((trip) => {})}</div> */
}
