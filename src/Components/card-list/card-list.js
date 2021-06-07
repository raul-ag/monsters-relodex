import React from 'react';
import {Card} from '../card/card-component.js';
import './card-list.css';


export const CardiList = (props) => { 
    return <div className = 'card-list'>
    {   
        props.monsters.map(monsters => (
        <Card key = {monsters.id} monsters={monsters}/>
        ))} 
    </div>;
    
};