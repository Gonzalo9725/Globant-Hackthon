import React, { useState } from 'react'
import './CharityForm.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import TextField from "@material-ui/core/TextField"

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
}));

const CharityForm = () => {
    const classes = useStyles();
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
        //----------------------- FIREBASE---------------------------
        // // Saving files in firebase storage
        // const storageRef = firebase.storage().ref();
        // const uploadTask = storageRef.child(`Files/${data.RepID.name}`).put(data.RepID);
        // uploadTask.on('state_changed',
        //     () => {
        //     }, (error) => {
        //         console.log('error')
        //     }, () => {
        //         uploadTask.snapshot.ref.getDownloadURL()
        //             .then((downloadURL) => {
        // // Adding collection in firebase                 
        // firebase.firestore().collection("ONG").add({
        //     name: data.Name,
        //     RUT: data.RUT,
        //     Representative: data.Representative,
        //     RepID: downloadURL,
        //     Constitution: data.Constitution
        // }).catch(() => {
        //     console.error('Error adding document: ', error);
        // });
        //-------------------------------------------------------

    }
    return (
        <div className="CharityForm-Container">
            <h1>FORMULARIO DE POSTULACIÓN</h1>
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
                <div className={classes.root}>
                    <input
                        accept="image/*"
                        className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                    />
                    <label htmlFor="contained-button-file">
                        Imagen
                    </label>
                    <input required id="standard-required" accept="image/*" className={classes.input} id="icon-button-file" type="file" onChange={handleFileChange} name="File" />
                    <label htmlFor="icon-button-file">
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera />
                        </IconButton>
                    </label>
                </div>
                <Button variant="contained" color="primary" disableElevation className="CharityForm-button" type="submit">
                    Enviar
                </Button>
            </form>
        </div>
    )
}

export default CharityForm
