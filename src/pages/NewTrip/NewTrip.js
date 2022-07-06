import React from 'react';

import axios from 'axios';
import { useState, useEffect, createContext } from 'react';
import { Link } from 'react-router-dom';
import './NewTrip.scss';
import BasicRating from '../../component/BasicRating/BasicRating';

import DestinationCard from '../../component/DestinationCard/DestinationCard';

function NewTrip(props) {
  const [input, setInput] = useState('');
  const [prediction, setPrediction] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');
  const [cityInformation, setCityInformation] = useState({});
  const [selectedRestaurants, setSelectedRestaurant] = useState({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [props.match.params.placeId]);

  useEffect(() => {
    setSelectedCity(props.match.params.placeId);
    if (props.match.params.placeId) {
      axios
        .get(`http://localhost:8080/city/${props.match.params.placeId}`)
        .then((response) => {
          setCityInformation({ ...response.data });
        });
    } else if (!props.match.params.placeId) {
      setCityInformation({});
    }
  }, [props.match.params.placeId]);
  const onBlur = () => {
    setTimeout(() => setIsSearching(false), 200);
  };
  const onFocus = () => {
    setIsSearching(true);
  };

  const findWidestPhoto = (cityInformation) => {
    cityInformation.cityImages.sort(
      (firstImage, secondImage) => secondImage.width - firstImage.width
    );

    return cityInformation.cityImages[0];
  };

  const onChange = (event) => {
    setInput(event.target.value);
    if (event.target.value) {
      axios
        .get(`http://localhost:8080/search/${event.target.value}`)
        .then((suggestions) => {
          setPrediction(suggestions.data);
        });
    } else {
      setPrediction([]);
    }
  };

  const toggleRestaurantSelection = (event) => {
    let newCityInformation = { ...cityInformation };
    let newSelectedRestaurantId = event.target.id;
    if (cityInformation) {
      newCityInformation.restaurants[newSelectedRestaurantId].isSelected =
        !newCityInformation.restaurants[newSelectedRestaurantId].isSelected;
      setCityInformation({ ...newCityInformation });
      console.log(newCityInformation);
    }
  };

  const toggleTouristAttractionSelection = (event) => {
    let newCityInformation = { ...cityInformation };
    let newSelectedTouristAttractionId = event.target.id;
    if (cityInformation) {
      newCityInformation.touristAttractions[
        newSelectedTouristAttractionId
      ].isSelected =
        !newCityInformation.touristAttractions[newSelectedTouristAttractionId]
          .isSelected;
      setCityInformation({ ...newCityInformation });
    }
  };

  return (
    <div className="search">
      {!props.match.params.placeId ? (
        <div className="search__container" onBlur={onBlur}>
          <h1 className="search__title">Search</h1>
          <div className="search__inner">
            <input
              className="search__input"
              type="text"
              value={input}
              onChange={onChange}
              onFocus={onFocus}
            />
          </div>
          {isSearching && (
            <div className="search__dropdown">
              {/* <div> */}
              {prediction &&
                prediction.map((city) => (
                  <Link
                    to={(location) => ({
                      pathname: `/newtrip/${city.placeId}`,
                    })}
                    className="search__dropdown-row"
                    key={city.name}
                  >
                    <div>{city.description}</div>
                  </Link>
                ))}
            </div>
          )}
        </div>
      ) : (
        <h1 className="destination__title">{cityInformation.cityName}</h1>
      )}
      {cityInformation.cityImages && (
        <div className="card__container">
          <div className="image__card">
            <img
              className="search__hero"
              src={`http://localhost:8080/photo/${
                findWidestPhoto(cityInformation).photo_reference
              }`}
            />
          </div>
        </div>
      )}
      {cityInformation.cityImages && (
        <div className="new-trip__places">
          <h1 className="new-trip__place-title">
            Places you must see in {cityInformation.cityName}
          </h1>
          <div className="card__container">
            {cityInformation.cityImages &&
              cityInformation.touristAttractions.map((place) => {
                return (
                  <DestinationCard
                    key={place.id}
                    destinationPhoto={`http://localhost:8080/photo/${place.image.photoReference}`}
                    placeNumberOfRatings={place.rating.numberOfRatings}
                    placeRating={place.rating.rating}
                    isSelected={place.isSelected}
                    placeName={place.name}
                    togglePlaceSelection={(id) =>
                      toggleTouristAttractionSelection(id)
                    }
                    id={place.id}
                  />
                );
              })}
          </div>
          <h1 className="new-trip__place-title">
            Top restaurants in {cityInformation.cityName}
          </h1>
          <div className="card__container">
            {cityInformation.cityImages &&
              cityInformation.restaurants.map((restaurant) => {
                return (
                  <DestinationCard
                    key={restaurant.id}
                    destinationPhoto={`http://localhost:8080/photo/${restaurant.image.photoReference}`}
                    placeNumberOfRatings={restaurant.rating.numberOfRatings}
                    placeRating={restaurant.rating.rating}
                    isSelected={restaurant.isSelected}
                    placeName={restaurant.name}
                    // info={restaurant}
                    togglePlaceSelection={(id) => toggleRestaurantSelection(id)}
                    id={restaurant.id}
                  />
                );
              })}
          </div>
          <div className="button__wrapper">
            <Link
              to={{ pathname: '/tripsubmit', state: { ...cityInformation } }}
              className="button__add button"
            >
              Add to my trips
            </Link>
            <Link to="/newtrip" className="button__remove button">
              Choose another destination
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
export default NewTrip;
