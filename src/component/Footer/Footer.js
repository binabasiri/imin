import React from 'react';
import InstagramIcon from '../../asset/Instagram.png';
import TwitterIcon from '../../asset/twitter.png';
import FacebookIcon from '../../asset/facebook.png';
import CopyRight from '../../asset/copyRight.png';
import './Footer.scss';
function Footer() {
  return (
    <div className="footer">
      <footer className="footer__body">
        <div className=" item">
          <h3 className="footer__sub-header">Services</h3>
          <ul className="footer__ul">
            <li>
              <a href="#">Web design</a>
            </li>
            <li>
              <a href="#">Development</a>
            </li>
            <li>
              <a href="#">Hosting</a>
            </li>
          </ul>
        </div>
        <div className=" item">
          <h3 className="footer__sub-header">About</h3>
          <ul className="footer__ul">
            <li>
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Legacy</a>
            </li>
          </ul>
        </div>
        <div className=" item">
          <h3 className="footer__sub-header">Careers</h3>
          <ul className="footer__ul">
            <li>
              <a href="#">Job openings</a>
            </li>
            <li>
              <a href="#">Employee success</a>
            </li>
            <li>
              <a href="#">Benefits</a>
            </li>
          </ul>
        </div>
        <div className="item social">
          <a href="#" className="footer__icon">
            <img src={FacebookIcon}></img>
          </a>
          <a href="#" className="footer__icon ">
            <img src={TwitterIcon}></img>
          </a>

          <a
            href="https://www.instagram.com/bina_basiri/"
            className="footer__icon "
          >
            <img src={InstagramIcon}></img>
          </a>
          <p className="footer__copyright">Im in © 2022</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
