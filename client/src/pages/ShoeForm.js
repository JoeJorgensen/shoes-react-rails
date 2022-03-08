import React, { useEffect } from 'react'

const ShoeForm = (props)=>{
    useEffect(()=>{
        console.log('ShowForm mounted')
      }, [])
    return (
        <div className='border'>
            <h1>Shoe Form</h1>
        </div>
    )
}

export default ShoeForm