import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../providers/DataProvider'



const ShoeShow = (props)=>{
    useEffect(()=>{
        findShoe()
    },[])


    const params = useParams()
    const {shoes} = useContext(DataContext)
    const [shoe, setShoe]= useState(null)

    const findShoe =()=>{
         let shoe = shoes.find(s=> s.id === parseInt(params.id)) 

    setShoe(shoe)
}
   
        // setShoe(findShoe)
        console.log('rendered')
    
    return (
        <div className='border'>
            <h1>Show Shoe </h1>
           <code>{JSON.stringify(shoe)}</code>
           {/* <p>Brand: {params.brand}</p>  */}
            {/* <p>{params.id}</p> */}
        </div>
    )
}

export default ShoeShow