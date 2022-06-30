function TripCard({ destination, startDate, endDate, lastEditDate }) {
  let now = new Date().getTime();
  // console.log(now);
  const changeHandle = (event) => {
    console.log(new Date(event.target.trip.value).getTime());
  };
  return (
    <div className="card">
      <h1 className="card__destination">{destination}</h1>
      <p>{now - startDate}</p>
      <p>{now - endDate}</p>
      <p>{now - lastEditDate}</p>
      <form onSubmit={changeHandle}>
        <input
          type="date"
          id="start"
          name="trip"
          value="2018-07-22"
          min="2018-01-01"
          max="2025-12-31"
        ></input>
      </form>
    </div>
  );
}

export default TripCard;
