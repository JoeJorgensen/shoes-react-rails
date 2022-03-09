import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../providers/DataProvider'


const Shoe = (props)=>{
const {deleteShoe}= useContext(DataContext);
const navigate = useNavigate();
const {id, brand, style, price} = props;
    return (
        <div className='border'>
            {/* <h1>Shoe</h1> */}
            <h3>
            <p>{brand}</p>
            <p>{style}</p>
            <p>${price}</p>
            </h3>
            <div className='border'
            style={{ textAlign: 'center',display: 'flex', justifyContent: 'space-around'}}>

            <p className='border' onClick={()=> navigate(`/shoes/${id}/edit`,{
                state: {id, brand, style, price}
                })}
                >Edit
                </p>
            <p className='border' onClick={()=>deleteShoe(id)}>Delete</p>
            <p className='border' onClick={()=> navigate(`/shoes/${id}`, {state: props})}>Show</p>
            
            </div>
        </div>
    )
}

export default Shoe