import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../providers/DataProvider'



const ShoeShow = (props)=>{
    useEffect(()=>{

    getShoe()
    },[])


    const params = useParams()
    const {shoes} = useContext(DataContext)
    const [shoe, setShoe]= useState({})

    const getShoe = async()=>{

        try{
        let res = await axios.get(`/api/shoes/${params.id}`)
        setShoe(res.data)
        // renderShoe()
        console.log(res)
        }catch(err){
            alert('error showing shoe')
        }

        const renderShoe = ()=>{
            return (
                <>
                <h3>{shoe}</h3>
                </>
            )
        }

        //  let shoe = shoes.find(s=> s.id === parseInt(params.id)) 

    }
   
        // setShoe(findShoe)
        // console.log('rendered')
        // const {id, brand, style, price} = props;
    return (
        <div className='border'>
            <h1>Show Shoe </h1>
            {/* <p >Brand:</p> */}
            <p className='border' >{JSON.stringify(shoe)}</p>
            <p>{}</p>
            {/* {renderShoe()} */}
            {/* <p>{shoes.price}</p> */}
           {/* <code>{JSON.stringify(shoe)}</code> */}
           {/* <p>Brand: {params.brand}</p>  */}
            {/* <p>{params.id}</p> */}
        </div>
    )
}

export default ShoeShow