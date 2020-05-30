import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DatePicker from 'react-datepicker';
import './Donate.css'
import 'react-datepicker/dist/react-datepicker.css'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  }
}));

const Donate = () => {
    const classes = useStyles();
    const [foodType, setFoodType] = useState('');
    const [expireDate, setExpiredDate] = useState(null);

    const handleChange = (event) => {
        setFoodType(event.target.value);
    };

    return (
        <div className='donate-container'>
            <h1>Formulario de Donación</h1>

            <FormControl className={classes.formControl} noValidate autoComplete="off">
                <InputLabel id="demo-simple-select-label">Tipo de Alimento</InputLabel>
                <Select
                    className="select"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={foodType}
                    onChange={handleChange}>
                    <MenuItem value={'Despensa'}>Despensa</MenuItem>
                    <MenuItem value={'Frutas'}>Frutas</MenuItem>
                    <MenuItem value={'Verduras'}>Verduras</MenuItem>
                    <MenuItem value={'Carnes'}>Carnes</MenuItem>
                </Select>
                <input className="select" type="file"/>

                <DatePicker
                    selected={expireDate}
                    onChange={date => setExpiredDate(date)}
                    dateFormat="dd/MM/yyyy"
                />
            </FormControl>
        </div>
    )
}

export default Donate
