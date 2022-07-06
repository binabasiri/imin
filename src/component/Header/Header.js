import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../asset/logo.svg';

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/" className="header__logo-container">
          <img alt="Logo Icon" className="header__logo" src={logo} />
        </Link>
        <div className="header__tabs">
          <Link to="/newtrip" className="header__link">
            <div className="header__tab">new trip</div>
          </Link>
          <Link to="/mytrips" className="header__link">
            <div className="header__tab">my trips</div>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
