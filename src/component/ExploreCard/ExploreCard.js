import './ExploreCard.scss';
function ExploreCard({
  destination,
  start,
  end,
  lastEditDate,
  cityImage,
  selectedRestaurants,
  selectedTouristAttractions,
}) {
  let now = new Date().getTime();

  const dateFormatter = (epochTime) => {
    // epochTime.getDate();
    const stringDate = new Date(epochTime);
    const day = stringDate.getDate();
    const month = stringDate.getMonth() + 1;
    const year = stringDate.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const changeHandle = (event) => {};
  return (
    <div className="card">
      <div className="card__header">
        <img
          src={`http://localhost:8080/photo/${cityImage}`}
          alt="card__image"
          className="card__image"
        />
      </div>
      <div className="card__body">
        <h4>Destination: {destination}</h4>
        <h4>Restaurants</h4>
        {selectedRestaurants?.map((restaurant) => {
          return (
            <span className="activity__list" key={restaurant.restaurant_name}>
              {restaurant.restaurant_name}
            </span>
          );
        })}
        <h4>Tourist attractions</h4>
        {selectedTouristAttractions?.map((place) => {
          return (
            <span className="activity__list" key={place.place_name}>
              {place.place_name}
            </span>
          );
        })}
        <div className="date__container">
          <span className="trip__date">From: {start}</span>
          <span className="trip__date">To: {end}</span>
        </div>
      </div>
      <div className="card__footer">
        <div className="user">
          <div className="user__info">
            <small>Last Edit: {dateFormatter(lastEditDate)}</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreCard;
