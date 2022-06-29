import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__log-container">
          <img alt="Logo Icon" className="header__log" src="" />
          <Link to="/" className="header__trip-link">
            my trips
          </Link>
          <Link to="/" className="header__username-link">
            username
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
