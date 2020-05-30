import React, { useState } from 'react'
import './CharityForm.css'
import useInputState from "./useinputState"
import TextField from "@material-ui/core/TextField"

const CharityForm = () => {
    const [data, setData] = useState({
        Name = '',
        RUT = ''
    });
    return (
        <div>
            <Form className="">
                <TextField
                    placeHolder="Ingrese Nombre"
                    name="Name"
                    onChange="handleInputChange"
                />
                <TextField
                    placeHolder="Ingrese RUT"
                    name="RUT"
                    onChange="handleInputChange"
                />
                <button>Enviar</button> />
            </Form>
        </div>
    )
}

export default CharityForm
