import React from 'react'
import './LogIn.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import logo from '../img/logo-white.png'



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      "& label.Mui-focused": {
        color: "#469D8B",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "#469D8B",
      },
    },
  }));

const LogIn = () => {

    const classes = useStyles();

    return (
      <>
        <div className='navbar-logo'>
          <img src={logo} alt="logo"/>
        </div>
        <div className='container-login'>
        <h1>Registrarse</h1>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Nombre" />
            <TextField id="standard-basic" label="Email" />
            <TextField id="standard-basic" label="Contraseña" />
        </form>
        </div>
      </>  
    )
}

export default LogIn
