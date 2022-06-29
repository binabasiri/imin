import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './component/Header/Header';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
    </BrowserRouter>
  );
}

export default App;
