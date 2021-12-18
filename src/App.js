import React from 'react';
import image from '../src/images/office.jpg';
import classes from './App.module.css';
import Number from './components/Number';

export default function App() {
    return (
        <>
        <h1 className={classes.title}>DATA ANALYSIS FIRM</h1>
        <div className={classes.app}>
            <div className={classes.left}>
            <h1>Get insights that help your business grow.</h1>
           <p className={classes.para}>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
           <div className={classes.number}>
           <Number count="10k+" type="COMPANY"/>
            <Number count="314"type="TEMPLATES"/>
            <Number count="12M+"type="QUERIES"/>

           </div>
            
            </div>
            <div className={classes.right}>
                <img className={classes.img}src={image}alt="anything"/>

            </div>
          
        </div>
        </>
    )
}
