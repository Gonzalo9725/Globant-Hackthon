import React, { useState } from "react";
import './SignUp.css'
import { useHistory } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import logo from "../img/logo-white.png";
import Button from "./Widgets/Button";
import google from "../img/google.png";
import Switch from "@material-ui/core/Switch";
import { firebase, auth } from '../firebase-config'

// objeto de configuracion de estilos de material ui
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      width: "29ch",
      margin: "3px",
    },
    "& label.Mui-focused": {
      color: "#469D8B",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#469D8B",
    },
  },
}));



const SignUp = () => {
  const classes = useStyles();
  const history = useHistory();

  // función del aceptar terminos y condiciones
const [state, setState] = React.useState({
  checkedA: false,
  checkedB: true,
});

const handleChangeSwitch = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
};


// Manejan el estado de las funciones para crear una cuenta nueva
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [name, setName] = useState("");
const [error, setError] = useState(null);


// función para crear cuenta
const signIn = async (e) => {
  e.preventDefault();

  if (!email.trim()) {
    setError("Ingrese Email*");
    return;
  }
  if (!password.trim()) {
    setError("Ingrese password*");
    return;
  }
  if (!password.length < 6) {
    setError("Pasword debe tener 6 caracteres o más*");
    return;
  }
  setError(null);
  register();
};

const register = (async () => { console.log('entro click')
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    console.log(res.user);
    alert("Se ha creado correctamente tu cuenta!");
    history.push("/login");
  } catch (error) {
    if (error.code === "auth/invalid-email") {
      setError("Email no válido");
    }
    if (error.code === "auth/email-already-in-use") {
      setError("Email ya esta registrado");
    }
  }
});

const signUpGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  auth.signInWithPopup(provider)
  .then(() => {
      history.push('/home')
  })
  .catch((error) => {
      console.log(error)
  })
}

  return (
    <>
      <div className="navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="container-login">
        <h1>Registrarse</h1>
        <p>
          Ingresa la Informacón requerida a continuación para completar tu
          registro
        </p>
        <form onSubmit={signIn} className={classes.root} noValidate autoComplete="off">
          {error && <div style={{ color: "darkred" }}>{error}</div>}
          <TextField 
          id="standard-basic" 
          label="Nombre" 
          type='name'
          onChange={(e) => setName(e.target.value)}
          value={name}/>
          <TextField 
          id="standard-basic" 
          label="Apellido" />
          <TextField 
          id="standard-basic" 
          label="Email"
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email} />
          <TextField
          id="standard-basic" 
          label="Contraseña"
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
           />
        </form>
        <div className="container-login-end">
          <div className="container-conditions">
            <Switch
              checked={state.checkedA}
              onChange={handleChangeSwitch}
              color="default"
              name="checkedA"
              inputProps={{ "aria-label": "default checkbox" }}
            />
            <p>
              Al ingresar o registrarte, estás aceptando los Términos y
              Condiciones de ShareFoord
            </p>
          </div>

          {(state.checkedA && <Button disabled={false} onClick={() => register()} title="Ingresar" />) || (
            <Button type='submit'  disabled={true} title="Ingresar" />
          )}

          <div className="container-btn-google">
            <button className="btn-google" onClick={signUpGoogle}>
              <img className="google" src={google} alt="google"/>
              Ingresa con Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;