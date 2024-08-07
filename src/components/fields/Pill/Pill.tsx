import React from 'react';

import {PillProps} from "../../../interfaces";

export default function Pill({ label, onDelete }: PillProps) {
    return (
        <div className='pill'>
            <span>{ label }</span>
            <button type='button' onClick={() => { onDelete(label) }}>X</button>
        </div>
    )
}