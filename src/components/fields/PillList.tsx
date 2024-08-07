import React from 'react';
import Pill from './Pill/Pill'
import { useFormTypes } from "../../store/FormTypeContext";


export default function PillList() {
    const { formTypes } = useFormTypes();

    return (
        <div className="pill-list-container">
            { formTypes.map((type: string) => <Pill label={type} />)}
        </div>
    )
}