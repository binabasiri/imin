import './TripCard.scss';
import Activity from '../../asset/activity.jpeg';
function TripCard({ destination, start, end, lastEditDate, cityImage }) {
  let now = new Date().getTime();
  // console.log(now);
  const dateFormatter = (epochTime) => {
    // epochTime.getDate();
    const stringDate = new Date(epochTime);
    const day = stringDate.getDate();
    const month = stringDate.getMonth() + 1;
    const year = stringDate.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const changeHandle = (event) => {
    // console.log(new Date(event.target.trip.value).getTime());
  };
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
        <span>From: {end}</span>
        <span>To: {start}</span>
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

export default TripCard;
