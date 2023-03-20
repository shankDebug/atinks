import React from 'react';
import {FaPen} from 'react-icons/fa';

const Cards =(props:any)=> {
    console.log(props?.data?.length);
    
        return (
            <div style={{width: '400px', height: '180px', border: '1px solid #dadada', borderRadius: '5px', margin: '15px', overflow: 'hidden'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px'}}>
                   <div> {props.name}</div>
                   <div style={{cursor: 'pointer'}} onClick={props.onClick}>
                   {<FaPen/>}
                   </div>
                </div>
                <div>
                    <div style={{width: '25px', height: '25px', backgroundColor: '#fff2f2', marginLeft: '23rem', color: 'red', borderRadius: '1rem'}}>+{props?.data?.length ? props?.data?.length : 0}</div>
                    {props?.data?.map((val:any)=>{
                        return(
                            <div style={{margin: '15px'}}>
                                <div style={{ fontWeight : 'bold'}}>
                                    {val.teamName}
                                </div>
                                <div>
                                    {val.email}
                                </div>
                                <div>
                                    {val.phone}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
}

export default Cards;