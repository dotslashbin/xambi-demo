import React from 'react';
import Pill from './Pill/Pill'
import {PillListProps} from "../../interfaces";



export default function PillList({ collection, handleDelete }: PillListProps) {
    return (
        <div className="pill-list-container">
            { collection.map((type: string) => <Pill label={type} onDelete={handleDelete} />)}
        </div>
    )
}