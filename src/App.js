import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import MyTrips from './pages/MyTrips/MyTrips';
import NewTrip from './pages/NewTrip/NewTrip';
import TripSubmit from './pages/TripSubmit/TripSubmit.js';
import Explore from './pages/Explore/Explore';
import SignUp from './pages/SiginUp/SignUp';
import './App.scss';

document.title = "I'm in";
const token = sessionStorage.getItem('authToken');
function App() {
  const [user, setUser] = useState({
    isFetching: true,
  });
  const logOut = () => {
    sessionStorage.removeItem('authToken');
    setUser({
      isFetching: true,
    });
  };
  useEffect(() => {
    const fetchUser = async () => {
      setUser((prev) => ({ ...prev, isFetching: true }));
      try {
        const { data } = await axios.get('http://localhost:8080/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser({ ...data });
      } catch (error) {
        console.error(error);
      } finally {
        setUser((prev) => ({ ...prev, isFetching: false }));
      }
    };
    if (token) fetchUser();
  }, []);
  return (
    <BrowserRouter>
      <Header
        user={user}
        //  logInClick={logInClick}
        logOut={logOut}
      />

      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/home" exact render={() => <Home />} />
        <Route path="/mytrips" render={() => <MyTrips user={user} />} />
        <Route
          path="/newtrip"
          exact
          render={(props) => <NewTrip user={user} match={props.match} />}
        />
        <Route
          path="/newtrip/:placeId"
          render={(props) => <NewTrip user={user} match={props.match} />}
        ></Route>
        <Route
          path="/tripsubmit"
          render={(props) => <TripSubmit props={props} user={user} />}
        ></Route>
        <Route path="/explore" render={() => <Explore user={user} />}></Route>
        <Route
          path="/signup"
          render={() => <SignUp setUser={setUser} user={user} />}
        ></Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
