import React, { useState } from 'react'
import PillList from "../fields/PillList";

import {Chip} from "@mui/material";
import Stack from "@mui/material/Stack";
import {useFormTypes} from "../../store/FormTypeContext";

export default function EditForm() {

    const [enteredType, setEnteredType] = useState<string>('');
    const [ message, setMessage ] = useState<string>('');

    const { formTypes, addItem } = useFormTypes();

    const addSelectedTypes = () => {
        setMessage(`Added ${enteredType} into the collected types...`);
        addItem(enteredType);
        setEnteredType('')

        setTimeout(() => {
            setMessage('');
        }, 2000);
    }

    const handleSubmit = () => {

        console.log('#DEBUG .. then you can add the array into the collected form information. Form types: ', formTypes)
        /**
         * NOTE:
         * I stopped here, since the 'service' part was not asked for. However it should look something like this below, and
         * the entire object is passed as JSON parameters to a POST request
         */
        // formService.updateForm({
        // subName: '... put the value here ',
        // province: '... put the value from the form field here',
        // formTypes: formTypes
        // })
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
                <PillList />
            </div>
            <button type='button' onClick={handleSubmit}>Submit form</button>
        </form>
    )
}