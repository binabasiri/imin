import React from 'react';
import './Home.scss';

import BahamasPic from '../../asset/bahamas.webp';
import RomePic from '../../asset/rome.jpeg';
import Activity from '../../asset/activity.jpeg';

function Main() {
  return (
    <div className="main">
      <div className="card">
        <div className="card__header">
          <img src={BahamasPic} alt="card__image" className="card__image" />
        </div>
        <div className="card__body">
          <span className="tag tag-blue">Weather Forecast</span>
          <h4>Check the weather before you leave</h4>
          <p className="card__paragraph">
            Make sure you checking the weather forecast before you make your
            trip. Searching your destination is now giving you the 5 day weather
            forecast.
          </p>
        </div>
        <div className="card__footer">
          <div className="user">
            <div className="user__info">
              <small>Updated yesterday</small>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card__header">
          <img src={RomePic} alt="card__image" className="card__image" />
        </div>
        <div className="card__body">
          <span className="tag tag-brown">Hot Places</span>
          <h4>Fiding hot places in your target destination</h4>
          <p className="card__paragraph">
            Fiding top tourist attractions is now as easy as typing your
            destination. Go to new trip search your destination and we will
            provide you with top restaurants and tourist attractions.
          </p>
        </div>
        <div className="card__footer">
          <div className="user">
            <div className="user__info">
              <small>Updated 5 day ago</small>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card__header">
          <img
            src={Activity}
            alt="card__image"
            className="card__image"
            width="600"
          />
        </div>
        <div className="card__body">
          <span className="tag tag-red">Activities</span>
          <h4>"Time is gold" specially when you're traveling</h4>
          <p className="card__paragraph">
            Adding a list of activities to your travel ticket would help you to
            manage your time better in your.
          </p>
        </div>
        <div className="card__footer">
          <div className="user">
            <div className="user__info">
              <small>Updated 2 day ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
