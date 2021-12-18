import React from 'react';
import classes from './Number.module.css'

export default function Number({count,type}) {
    return (
        <div className={classes.number}>
            <div className={classes.number_elm}>
                <h1>{count}</h1>
                <p>{type}</p>
            </div>
            
        </div>
    )
}
