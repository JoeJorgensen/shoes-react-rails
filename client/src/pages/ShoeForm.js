import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { DataContext } from '../providers/DataProvider'
import Shoe from './Shoe';


const ShoeForm = (props)=>{
   
    const navigate = useNavigate();
    const {addShoe, updateShoe} = useContext(DataContext);
    const {state} = useLocation();
    const [brand, setBrand]= useState(state && state.brand);
    const [style, setStyle]= useState(state && state.style);
    const [price, setPrice]= useState(state && state.price);
   
    useEffect(()=>{
        console.log('ShowForm mounted')
      }, [])

      const handleSubmit = (e)=>{
          console.log('handleSubmit called')
          e.preventDefault();

          if(state && state.id){
              console.log('update')
              updateShoe({brand, style, price, id: state.id}, navigate('/shoes'));
            }else{

                addShoe({brand, style, price}, navigate);
            }
      }
    return (
        <div
         className='border'
         style={{ textAlign: 'center'}}>
            <h1>Shoe Form</h1>
            <form onSubmit={handleSubmit}>
            <h4> 
             <p>Brand</p>
            <input value={brand} onChange={(e)=> setBrand(e.target.value)}/>
            <p>Style</p>
            <input value={style} onChange={(e)=> setStyle(e.target.value)}/>
            <p>Price</p>
            <input type='number' value={price} onChange={(e)=> setPrice(e.target.value)}/>
            </h4>
            <button className='border' 
            style=
            {{textAlign:'center', 
            color: 'black',
            backgroundColor:'transparent',
            fontSize: 20,
            }}>{state && state.id ? 'Edit' : 'Add'}</button>
            
            </form>
            {/* <p>{JSON.stringify(state)}</p> */}
        </div>
    )
}

export default ShoeForm