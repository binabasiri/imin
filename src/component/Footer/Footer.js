import React from 'react';
import InstagramIcon from '../../asset/Instagram.png';
import TwitterIcon from '../../asset/twitter.png';
import FacebookIcon from '../../asset/facebook.png';

import './Footer.scss';
function Footer() {
  return (
    <div className="footer">
      <footer className="footer__body">
        <div className=" item">
          <h3 className="footer__sub-header">Services</h3>
          <ul className="footer__ul">
            <li>
              <a href="https://www.expedia.ca/">Travel conslting</a>
            </li>
            <li>
              <a href="https://www.expedia.ca/">Flight Booking</a>
            </li>
            <li>
              <a href="https://www.expedia.ca/">Hotel Booking</a>
            </li>
          </ul>
        </div>
        <div className=" item">
          <h3 className="footer__sub-header">About</h3>
          <ul className="footer__ul">
            <li>
              <a href="https://www.linkedin.com/in/bina-basiri/">Company</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/bina-basiri/">Team</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/bina-basiri/">
                Partnerships
              </a>
            </li>
          </ul>
        </div>
        <div className=" item">
          <h3 className="footer__sub-header">Careers</h3>
          <ul className="footer__ul">
            <li>
              <a href="https://www.linkedin.com/in/bina-basiri/">
                Job openings
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/bina-basiri/">
                Employee success
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/bina-basiri/">Benefits</a>
            </li>
          </ul>
        </div>
        <div className="item social">
          <a href="www.facebook.com" className="footer__icon">
            <img src={FacebookIcon} alt="facebook" />
          </a>
          <a href="www.twitter.com" className="footer__icon ">
            <img src={TwitterIcon} alt="twitter" />
          </a>

          <a
            href="https://www.instagram.com/bina_basiri/"
            className="footer__icon "
          >
            <img alt="instagram" src={InstagramIcon} />
          </a>
          <p className="footer__copyright">Im in © 2022</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
