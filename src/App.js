import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import SideBar from './component/SideBar/SideBar';
import MyTrips from './pages/MyTrips/MyTrips';
import NewTrip from './pages/NewTrip/NewTrip';
import TripSubmit from './pages/TripSubmit/TripSubmit.js';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        {/* <Route path="/signin" component={SignIn}></Route> */}
        {/* <Route path="/signup" component={SignUp}></Route> */}
        <Route path="/sidebar" component={SideBar}></Route>
        <Route path="/mytrips" component={MyTrips}></Route>
        <Route path="/newtrip" exact component={NewTrip}></Route>
        <Route path="/newtrip/:placeId" component={NewTrip}></Route>
        <Route path="/tripsubmit" component={TripSubmit}></Route>
        <Route path="/sidebar" component={SideBar}></Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
