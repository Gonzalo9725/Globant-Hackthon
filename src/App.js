import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Components/Widgets/NavBar'
// import Welcome from './Components/Welcome'
import CharityForm from './Components/CharityForm'



function App() {
  return (
    <>
      <NavBar />
      <CharityForm />

    </>
  );
}

export default App;
