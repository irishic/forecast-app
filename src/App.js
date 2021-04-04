import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { Header } from './components/header';
import { Forecast } from './pages/forecast';

function App() {
  const forecast = useSelector(state => state.forecast);

  return (
    <Router>
      <Header />
      <div className='container'>
        <Switch>
          <Route path='/forecast/:cityName'>
            {!forecast.data && !forecast.currentSearch ? <Redirect to='/forecast' /> : <Forecast />}
          </Route>
          <Route exact path='/forecast'>
            <Forecast />
          </Route>
          <Route exact path='/'>
            <Redirect to='/forecast' />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
