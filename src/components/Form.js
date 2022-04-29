import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createCharacter } from '../redux/actions'

export default function Form() {
    const [ formulario, setFormulario ] = useState({name: "", status: "", location: "", image: ""})

    const { name, status, location, image } = formulario

    const dispatch = useDispatch()

    function handleSubmit(e){
        e.preventDefault()
        dispatch(createCharacter(formulario))
        setFormulario({name: "", status: "", location: ""})
    }

    function handleChange(e){
        e.preventDefault()
        setFormulario({...formulario, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <form onSubmit={ e => handleSubmit(e)}>
                <label>Name: </label>
                <input type="text" value={name} name="name" onChange={ e => handleChange(e)}/>
                <label>Status: </label>
                <input type="text" value={status} name="status" onChange={e => handleChange(e)}/>
                <label>Location: </label>
                <input type="text" value={location} name="location" onChange={e => handleChange(e)}/>
                <label>Image url: </label>
                <input type="text" value={image} name="image" onChange={ e => handleChange(e)}/>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}