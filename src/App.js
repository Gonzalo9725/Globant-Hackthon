import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome from './Components/Welcome'
import LogIn from './Components/LogIn';
import Home from './Components/Home'
import SignUp from './Components/SignUp'
import FoodAvailable from './Components/FoodAvailable';
import CharityForm from './Components/CharityForm';
import Donate from './Components/Donate';
<<<<<<< HEAD
import MyDonations from './Components/MyDonations'
=======
import MyDonations from './Components/MyDonations';
>>>>>>> 131cf1411e9aa29f66017cf8f7e730db549b8494





function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route exact path='/Donar' component={Donate} />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={LogIn} />
          <Route path='/home' component={Home} />
          <Route path='/Donaciones' component={FoodAvailable} />
          <Route path='/MisDonaciones' component={MyDonations} />
          <Route path='/CharityForm' component={CharityForm} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
