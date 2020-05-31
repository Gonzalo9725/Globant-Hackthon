import React from 'react'
import './LogIn.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import logo from '../img/logo-white.png'
import Button from './Widgets/Button'
import google from '../img/google.png'
import Switch from '@material-ui/core/Switch';



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        width: '29ch',
        margin: '3px'
  
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

    const [state, setState] = React.useState({
    checkedA: false,
    checkedB: true,
    });

    const handleChangeSwitch = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };

    const classes = useStyles();

    return (
      <>
        <div className='navbar-logo'>
          <img src={logo} alt="logo"/>
        </div>
        <div className='container-login'>
        <h1>Registrarse</h1>
        <p>Ingresa la Informacón requerida a continuación para completar tu registro</p>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Nombre" />
            <TextField id="standard-basic" label="Apellido" />
            <TextField id="standard-basic" label="Email" />
            <TextField id="standard-basic" label="Contraseña" />
        </form>
        <div className='container-login-end'>
        <div className='container-conditions'>
        <Switch
        checked={state.checkedA}
        onChange={handleChangeSwitch}
        color="default"
        name="checkedA"
        inputProps={{ 'aria-label': 'default checkbox' }}
      /> 
        <p>Al ingresar o registrarte, estás aceptando los Términos y Condiciones de ShareFoord</p>
        </div>  

        {(state.checkedA 
          && <Button disabled={false} title="Ingresar"/>) 
          || <Button disabled={true} title="Ingresar"/>}

        <div className='container-btn-google'>
        <button className='btn-google'><img className='google'src={google} alt="google"/>Ingresa con Google</button>
        </div>
        </div>
        </div>
      </>  
    )
}

export default LogIn
