import React, { useEffect } from 'react'



const Shoes = (props)=>{
    useEffect(()=>{
    console.log('Shoes mounted')
  }, [])   
    return (
        <div className='border'>
            <h1>Shoes</h1>
        </div>
    )
}

export default Shoes