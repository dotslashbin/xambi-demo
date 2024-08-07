import React from 'react';

import {PillProps} from "../../../interfaces";

import { useFormTypes } from "../../../store/FormTypeContext";

export default function Pill({ label }: PillProps) {
    const { removeItem } = useFormTypes();
    return (
        <div className='pill'>
            <span>{ label }</span>
            <button type='button' onClick={() => { removeItem(label) }}>X</button>
        </div>
    )
}