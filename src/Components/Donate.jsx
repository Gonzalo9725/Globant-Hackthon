import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Select, FormControl, MenuItem, Grid, InputLabel } from "@material-ui/core";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import TextField from '@material-ui/core/TextField';
import Button from './Widgets/Button'
import "date-fns";
import "./Donate.css";
import {db} from '../firebase-config';

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


  const handleRut = (event) => {
    setRut(event.target.value);
  };
  
  const handleChange = (event) => {
    setFoodType(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
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
    })
    .then((docRef) => {
      console.log(docRef);
    })
    .catch((error) => {
      console.log('Error ', error);
    });
  };

  return (
    <div className="donate-container">
      <h1>¿Qué deseas donar?</h1>

      <FormControl
        className={classes.formControl}
        noValidate
        autoComplete="off">

        <TextField 
          className="select" 
          id="rut" 
          label="R.U.T"
          onChange={handleRut} />
        <br/><br/>
        <label>Categoría</label>
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

        <MuiPickersUtilsProvider utils={DateFnsUtils} >
        <label className="form-marginTop">Fecha de Vencimiento</label>
          <Grid container justify="space-around" className="select">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{"aria-label": "change date",}}
            />
          </Grid>
        </MuiPickersUtilsProvider>

        <TextField 
          className="select" 
          id="name" 
          label="Nombre"
          onChange={handleName} />

        <TextField onChange={handlePhone} className="select" id="phone" label="Teléfono" />

        <TextField onChange={handleCantidad} className="select" id="cantidad" label="¿Cuantos kg vas a donar?" />
        <span>Kg.</span>

        <TextField 
          className="select" 
          id="donation" 
          label="¿Qué vas a donar?"
          onChange={handleFood} />

        <div className="form-marginTop">
            <Button disabled={false} title="Enviar" onClick={sendDonation}/>
        </div>
      </FormControl>
    </div>
  );
};

export default Donate;