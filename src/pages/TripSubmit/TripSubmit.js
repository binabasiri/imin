import axios from 'axios';
import React from 'react';
import './TripSubmit.scss';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function TripSubmit(props) {
  const history = useHistory();
  const cityInformation = { ...props.location.state };
  const findWidestPhoto = (cityInformation) => {
    cityInformation.cityImages.sort(
      (firstImage, secondImage) => secondImage.width - firstImage.width
    );
    return cityInformation.cityImages[0];
  };
  const selectedRestaurants = cityInformation.restaurants.filter(
    (restaurant) => restaurant.isSelected
  );
  // console.log(cityInformation);
  const selectedTouristAttractions = cityInformation.touristAttractions.filter(
    (touristAttractions) => touristAttractions.isSelected
  );

  const submitTheTrip = () => {
    axios.post('http://localhost:8080/trips', userData).then((response) => {
      history.push('/mytrips');
    });
  };

  const cancelTheTrip = () => {
    history.push('/newtrip');
  };

  const [userData, setUserData] = useState({});

  const onStartDateChange = (event) => {
    const newUserData = { ...userData };
    // const name = event.target.name;
    newUserData.start = event.target.value;
    console.log(event.target.value);
    setUserData({ ...newUserData });
  };
  const onEndDateChange = (event) => {
    const newUserData = { ...userData };
    newUserData.end = event.target.value;
    setUserData({ ...newUserData });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    const newUserData = { ...userData };
    newUserData.selectedTouristAttractions = [...selectedTouristAttractions];
    newUserData.selectedRestaurants = [...selectedRestaurants];
    newUserData.destination = props.location.state.cityName;
    const cityPhoto = findWidestPhoto(cityInformation);
    newUserData.cityPhoto = cityPhoto;
    setUserData({ ...newUserData });
  }, []);

  return (
    <div className="submit-trip">
      <div className="submit-trip__wrapper">
        <h1>{cityInformation.cityName}</h1>
        <label className="side-bar__label">from:</label>
        <input
          onChange={onStartDateChange}
          className="side-bar__date"
          type="date"
          id="start"
          name="start"
          min="2022-01-01"
          max="2023-12-31"
        ></input>
        <label className="side-bar__label">To:</label>

        <input
          onChange={onEndDateChange}
          className="side-bar__date"
          type="date"
          id="end"
          name="end"
          min="2022-01-01"
          max="2023-12-31"
        ></input>

        <div className="submit-trip__restaurants">
          <h2>selected restaurants</h2>
          {selectedRestaurants &&
            selectedRestaurants.map((selectedRestaurants) => {
              return <h3>{selectedRestaurants.name}</h3>;
            })}
        </div>
        <div className="submit-trip__tourist-attractions">
          <h2>selected places</h2>
          {selectedTouristAttractions &&
            selectedTouristAttractions.map((selectedTouristAttractions) => {
              return <h3>{selectedTouristAttractions.name}</h3>;
            })}
        </div>
        <div className="button__wrapper">
          <button onClick={submitTheTrip} className="button__add button">
            Add to my trips
          </button>
          <button onClick={cancelTheTrip} className="button__remove button">
            Choose another destination
          </button>
        </div>
      </div>
    </div>
  );
}

export default TripSubmit;
