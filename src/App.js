import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './component/Header/Header';
import MyTrips from './pages/MyTrips/MyTrips';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact></Route>
        <Route path="/mytrips" component={MyTrips}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
