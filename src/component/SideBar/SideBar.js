import axios from 'axios';
import { useState } from 'react';
import './SideBar.scss';

function SideBar() {
  const [startDate, setStartDate] = useState();
  const [activities, setActivities] = useState([]);
  const [currentId, setCurrentId] = useState(0);
  const changeHandle = (event) => {
    setStartDate(event.target.value);
  };
  const addActivity = () => {
    setActivities([...activities, []]);
    setCurrentId((currentId) => currentId + 1);
  };
  const removeActivity = () => {
    let newActivities = [...activities];
    newActivities.pop();
    setActivities(newActivities);
    setCurrentId((currentId) => currentId - 1);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    let payload = {
      destination: event.target.destination.value,
      activities: activities,
    };
    axios.post('http://localhost:8080/trips', payload);
  };

  return (
    <section className="side-bar">
      <form className="side-bar__form" onSubmit={onSubmit}>
        <label className="side-bar__label">destination:</label>
        <input
          type="text"
          id="end"
          name="destination"
          className="side-bar__input"
        ></input>
        <label className="side-bar__label">from:</label>
        <input
          className="side-bar__date"
          onChange={changeHandle}
          type="date"
          id="start"
          name="start"
          value={startDate}
          min="2022-01-01"
          max="2023-12-31"
        ></input>
        <label className="side-bar__label">To:</label>

        <input
          className="side-bar__date"
          type="date"
          id="end"
          name="end"
          min={startDate}
          max="2023-12-31"
        ></input>

        <div className="button__container">
          <button
            className="button__add button"
            type="button"
            onClick={addActivity}
          >
            Add Activity
          </button>
          <button
            className="button__remove button"
            type="button"
            onClick={removeActivity}
          >
            Remove Activity
          </button>
        </div>
        {activities.map((activity) => {
          return (
            <div className="side-bar__activity-container">
              <h2 className="side-bar__header">activity</h2>

              <label className="side-bar__label">title: </label>
              <input
                type="text"
                id="end"
                name="destination"
                className="side-bar__input"
              ></input>
              <label className="side-bar__label">title: </label>
              <textarea
                className="side-bar__activity"
                type="text"
                id={`${currentId}`}
                name={activity.name}
              ></textarea>
              <label className="side-bar__label">day:</label>
              <input
                className="side-bar__date"
                type="date"
                id="start"
                name="start"
                min="2022-01-01"
                max="2023-12-31"
              ></input>
            </div>
          );
        })}

        <button className="button button__submit" type="submit">
          submit
        </button>
      </form>
    </section>
  );
}

export default SideBar;
