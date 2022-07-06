import React from 'react';
import BasicRating from '../BasicRating/BasicRating';
import './DestinationCard.scss';
import SelectIcon from '../../asset/select.png';
import SelectedIcon from '../../asset/select1.png';
function DestinationCard(
  {
    destinationPhoto,
    placeRating,
    placeNumberOfRatings,
    isSelected,
    togglePlaceSelection,
    id,
    placeName,
  },
  props
) {
  return (
    <div class="destination__container">
      <div class="square">
        <img src={destinationPhoto} class="mask" />
        <div class="h1">{placeName}</div>
        <div className="destination__rating">
          <BasicRating value={placeRating} number={placeNumberOfRatings} />
        </div>
        {isSelected ? (
          <button
            className="button__remove button"
            onClick={togglePlaceSelection}
            id={id}
          >
            Remove Activity
          </button>
        ) : (
          <button
            className="button__add button"
            id={id}
            onClick={togglePlaceSelection}
          >
            Add Activity
          </button>
        )}
      </div>
    </div>
  );
}

export default DestinationCard;
