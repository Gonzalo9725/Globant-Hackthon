import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Select, FormControl, MenuItem } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Button from './Widgets/Button'
import "./Donate.css";
import {db, auth} from '../firebase-config';
import { useHistory } from 'react-router-dom'
import Navbar from './Widgets/NavBar' 

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
}));

const Donate = () => {

  const classes = useStyles();
  const [rut, setRut] = useState("");
  const [foodType, setFoodType] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date("2020-05-30T21:11:54"));
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [food, setFood] = useState("");
  const [firebaseUser, setFirebaseUser] = useState(false)

  const history = useHistory();
  
  const handleRut = (event) => {
    setRut(event.target.value);
  };
  
  const handleChange = (event) => {
    setFoodType(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handlePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleCantidad = (event) => {
    setCantidad(event.target.value);
  };

  const handleFood = (event) => {
    setFood(event.target.value);
  };


  

  const sendDonation = () =>{

    db.collection('food').add({
      Rut: rut,
      category: foodType,
      expiration: selectedDate,
      name: name,
      phone: phone,
      quantity: cantidad,
      title: food,
      time: new Date(),
      userID: firebaseUser,
    })
    .then((docRef) => {
      console.log(docRef);
      alert('Hemos recibido tu donación exitosamente');
      history.push("/home")
    })
    .catch((error) => {
      console.log('Error ', error);
    });
  };

  React.useEffect(() => {
    console.log('1. Entrando al UseEffect')
    const fetchUser = () => {  // Consigue el currentUser
      auth.onAuthStateChanged(user => {
          if(user){
            console.log('2. Entrando al IF del UseEffect')
              setFirebaseUser({ // La guarda en un estado
                displayName : user.displayName, 
                email: user.email,
                uid: user.uid,
                emailVerified: user.emailVerified,
                photoURL: user.photoURL})
          }else{
              setFirebaseUser({})
          }
      })
    }
    fetchUser()
  }, [])

  return (
    <>
    <Navbar/>
    <div className="donate-container">
      <h1>¿Qué deseas donar?</h1>

      <FormControl
        className={classes.formControl}
        noValidate
        autoComplete="off">

        <TextField id="name" label="Nombre" onChange={handleName} />

        <TextField 
          className="select" 
          id="rut" 
          label="R.U.T"
          onChange={handleRut} />

        <TextField onChange={handlePhone} id="phone" label="Teléfono" />
        <br/>

        <TextField id="donation" label="¿Qué vas a donar?"onChange={handleFood} />

        <TextField onChange={handleCantidad} id="cantidad" label="Cantidad que vas a donar:" />

        <label className="expired-label">Fecha de Vencimiento</label>
        <input type="date" className="date" onChange={handleDateChange} min="2020-05-01"/>

        <label className="expired-label">Categoría</label>
        <Select
          className="select"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={foodType}
          onChange={handleChange}>
          <MenuItem value={"Despensa"}>Despensa</MenuItem>
          <MenuItem value={"Frutas y Vegetales"}>Frutas y Vegetales</MenuItem>
          <MenuItem value={"Frescos y Lácteos"}>Frescos y Lácteos</MenuItem>
          <MenuItem value={"Carnes"}>Carnes</MenuItem>
          <MenuItem value={"Otros"}>Otros</MenuItem>
        </Select>


        <div className="button-form">
            <Button disabled={false} title="Enviar" onClick={sendDonation} color="#469D8B"/>
        </div>
      </FormControl>
    </div>
    </>
  );
};

export default Donate;