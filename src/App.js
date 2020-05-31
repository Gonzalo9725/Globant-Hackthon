import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import NavBar from './Components/Widgets/NavBar'
import Welcome from './Components/Welcome'
import LogIn from './Components/LogIn';
import FoodAvailable from './Components/FoodAvailable';



function App() {
  return (
    <>
    <Router>
        <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path='/login' component={LogIn} />
            <Route path='/Donaciones' component={FoodAvailable} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
