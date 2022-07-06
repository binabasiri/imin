import React from 'react';
import InstagramIcon from '../../asset/Instagram.png';
import TwitterIcon from '../../asset/twitter.png';
import FacebookIcon from '../../asset/facebook.png';
import CopyRight from '../../asset/copyRight.png';
import './Footer.scss';
function Footer() {
  return (
    <div className="footer">
      <div className="footer-clean">
        <footer>
          <div className="container">
            <div className=" item">
              <h3>Services</h3>
              <ul>
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
              <h3>About</h3>
              <ul>
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
              <h3>Careers</h3>
              <ul>
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
              <a href="#">
                <img src={FacebookIcon} className="icon"></img>
              </a>
              <a href="#">
                <img src={TwitterIcon} className="icon "></img>
              </a>

              <a href="#">
                <img src={InstagramIcon} className="icon "></img>
              </a>
              <p className="copyright">Im in © 2022</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
