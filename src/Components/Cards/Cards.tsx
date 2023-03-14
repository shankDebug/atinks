import React from 'react';
import {FaPen} from 'react-icons/fa';

const Cards =(props:any)=> {
        return (
            <div style={{width: '400px', height: '180px', border: '1px solid #dadada', borderRadius: '5px', margin: '15px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px'}}>
                   <div> {props.name}</div>
                   <div style={{cursor: 'pointer'}} onClick={props.onClick}>
                   {<FaPen/>}
                   </div>
                </div>
            </div>
        );
}

export default Cards;