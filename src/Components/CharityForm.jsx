import React, { useState } from 'react'
import './CharityForm.css'
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField"
import NavBar from './Widgets/NavBar'
import firebase from "firebase/app";
import "firebase/firestore";



const CharityForm = () => {
    const [data, setData] = useState({
        Name: '',
        RUT: '',
        Representative: '',
        RepID: '',
        Address: '',
        File: ''
    });
    const handleInputChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }
    const handleFileChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.files[0]
        })
    }
    const sendData = (event) => {
        event.preventDefault();
        console.log(data)

        // Adding collection in firebase                 
        firebase.firestore().collection("ONG").add({
            name: data.Name,
            RUT: data.RUT,
            Representative: data.Representative,
            RepID: data.RepID,
            Address: data.Address,

        })
    }
    return (
        <div>
            <NavBar />
            <div className="CharityForm-Container">
                <h3>FORMULARIO DE POSTULACIÓN</h3>
                <form className="CharityForm-form" onSubmit={sendData}>
                    <TextField className="CharityForm-text"
                        label="Institución"
                        name="Name"
                        value={data.Name}
                        onChange={handleInputChange}
                        required id="standard-required"
                    />
                    <TextField className="CharityForm-text"
                        label="RUT"
                        name="RUT"
                        value={data.RUT}
                        onChange={handleInputChange}
                        required id="standard-required"
                    />
                    <TextField className="CharityForm-text"
                        label="Nombre de representante de institución"
                        name="Representative"
                        value={data.Representative}
                        onChange={handleInputChange}
                        required id="standard-required"
                    />
                    <TextField className="CharityForm-text"
                        label="Run del representante"
                        name="RepID"
                        value={data.RepID}
                        onChange={handleInputChange}
                        required id="standard-required"
                    />
                    <TextField className="CharityForm-text"
                        label="Dirección de Institución"
                        name="Address"
                        value={data.Address}
                        onChange={handleInputChange}
                        required id="standard-required"
                    />
                    <input className="CharityForm-InputFile" type="file" onChange={handleFileChange}></input>
                    <p className="CharityForm-FileInputP">Adjuntar documentación que valide la institución que desea ser beneficiada</p>
                    <Button variant="contained" color="primary" disableElevation className="CharityForm-button" type="submit">
                        Enviar
                </Button>
                </form>
            </div>
        </div>
    )
}

export default CharityForm
