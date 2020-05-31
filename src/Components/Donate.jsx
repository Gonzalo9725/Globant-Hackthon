import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {InputLabel, Select, FormControl, MenuItem, Grid} from "@material-ui/core";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import TextField from '@material-ui/core/TextField';
import Button from './Widgets/Button'
import "date-fns";
import "./Donate.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
}));

const Donate = () => {

  const classes = useStyles();
  const [foodType, setFoodType] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date("2020-05-30T21:11:54"));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleChange = (event) => {
    setFoodType(event.target.value);
  };

  return (
    <div className="donate-container">
      <h1>Formulario de Donación</h1>

      <FormControl
        className={classes.formControl}
        noValidate
        autoComplete="off">

        <TextField className="select" id="standard-basic" label="¿Qué vas a donar?" />

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
        <Select
          className="select"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={foodType}
          onChange={handleChange}
        >
          <MenuItem value={"Despensa"}>Despensa</MenuItem>
          <MenuItem value={"Frutas y Vegetales"}>Frutas y Vegetales</MenuItem>
          <MenuItem value={"Frescos y Lácteos"}>Frescos y Lácteos</MenuItem>
          <MenuItem value={"Carnes"}>Carnes</MenuItem>
          <MenuItem value={"Otros"}>Otros</MenuItem>
        </Select>
        <TextField className="select" id="standard-basic" label="Teléfono" />
        <div className="form-marginTop">
            <Button disabled={false} title="Enviar"/>
        </div>
      </FormControl>
    </div>
  );
};

export default Donate;