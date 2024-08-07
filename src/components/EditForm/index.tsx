import React, { useState } from 'react'
import PillList from "../fields/PillList";

import {Chip} from "@mui/material";
import Stack from "@mui/material/Stack";

export default function EditForm() {

    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [enteredType, setEnteredType] = useState<string>('');
    const [ message, setMessage ] = useState<string>('');

    const addSelectedTypes = () => {

        setSelectedTypes([...selectedTypes, enteredType]);
        setMessage(`Added ${enteredType} into the collected types...`);
        setEnteredType('')

        setTimeout(() => {
            setMessage('');
        }, 2000);
    }

    const handleSubmit = () => {
        console.log('#DEBUG ... the types to submit: ', selectedTypes)
    }

    const handleDelete = (typeToRemove: string) => {
        console.log('#DEBUG ... removing a type: ', typeToRemove);
        setSelectedTypes(selectedTypes.filter(type => type !== typeToRemove))
    }

    return(
        <form className='edit-form'>
            <h3>Edit Form</h3>
            <div>
                <span>{message}</span>
            </div>
            <div className='form-field'>
                <span>This for field is a simulation of what could be the sources for types</span>
                <input type='text' value={enteredType} name='enteredType' onChange={(event) => {setEnteredType(event.target.value)}} />
                <button type='button' className='edit-form-button' onClick={addSelectedTypes}>add type</button>
            </div>
            <div className='form-field'>
                <PillList collection={selectedTypes} handleDelete={handleDelete} />
            </div>
            <button type='button' onClick={handleSubmit}>Submit form</button>
        </form>
    )
}