import axios from 'axios';
import { useState, useEffect } from 'react';
import ExploreCard from '../../component/ExploreCard/ExploreCard';
import './Explore.scss';

function Explore() {
  const [trips, setTrips] = useState([]);
  const [isAdded, setIsAdded] = useState({});
  const [userData, setUserData] = useState({});
  const token = sessionStorage.getItem('authToken');
  useEffect(() => {
    if (token) {
      axios
        .get('http://localhost:8080/explore', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          const newTrips = response.data;
          setTrips([...newTrips]);
        });
    } else {
      axios.get('http://localhost:8080/explore').then((response) => {
        const newTrips = response.data;
        setTrips([...newTrips]);
      });
    }
  }, []);

  const addTrip = (event) => {
    let id = event.target.id;
    let newIsAdded = { ...isAdded };
    newIsAdded[id] = !isAdded.id;
    setIsAdded({ ...newIsAdded });
    let newUserData = trips.filter((trip) => trip.id == id);
    setUserData({ ...newUserData });
    axios.post('http://localhost:8080/trips', userData).then((response) => {});
  };

  if (trips.length) {
    return (
      <div className="my-trips">
        <div className="card-holder">
          {trips.map((trip) => {
            return (
              <ExploreCard
                key={trip.id}
                cityImage={trip.photo_reference}
                destination={trip.destination}
                start={trip.start}
                end={trip.end}
                lastEditDate={trip.updated_at}
                selectedRestaurants={trip.selectedRestaurants}
                selectedTouristAttractions={trip.selectedTouristAttractions}
                submitTheTrip={addTrip}
                isOut={false}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <div className="my-trips--loading">loading ...</div>;
  }
}

export default Explore;

{
  /* <div>{trips.map((trip) => {})}</div> */
}
