import { Link, useHistory } from 'react-router-dom';
import './Header.scss';
import logo from '../../asset/logo.png';
// import brand from '../../asset/brand.png';
function Header({ user, logOut }) {
  const history = useHistory();
  const logInClick = () => {
    history.push('/signup');
  };
  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/" className="header__logo-container">
          <img alt="Logo " className="header__logo" src={logo} />
          {/* <img alt="brand" className="Logo brand" src={brand} /> */}
        </Link>
        <div className="header__tabs">
          <Link to="/" className="header__link">
            <div className="header__tab">home</div>
          </Link>
          <Link to="/newtrip" className="header__link">
            <div className="header__tab">new trip</div>
          </Link>
          <Link to="/mytrips" className="header__link">
            <div className="header__tab">my trips</div>
          </Link>
          <Link to="/explore" className="header__link">
            <div className="header__tab">explore</div>
          </Link>
          {user.id != undefined ? (
            <div className="header__log-container">
              <div className="header__user-name">{user?.user_name}</div>

              <div onClick={logOut} className="header__log">
                log Out
              </div>
            </div>
          ) : (
            <span onClick={logInClick} className="header__link">
              <div className="header__log">log In</div>
            </span>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
