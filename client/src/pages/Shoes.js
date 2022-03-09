import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import  { DataContext} from '../providers/DataProvider'
import Shoe from './Shoe'


const Shoes = (props)=>{
    let navigate = useNavigate();
  let {shoes} = useContext(DataContext)
    useEffect(()=>{
    console.log('Shoes mounted')
  }, [])   

  const renderShoes = ()=>{
      return shoes.map((s)=>{
          return <Shoe key={s.id} {...s}/>
      })
  }
    return (
        <div 
       
        style={{ textAlign: 'center'}}>
            <h1>Shoes</h1>
            <button className='border' 
            style=
            {{textAlign:'center', 
            color: 'black',
            backgroundColor:'transparent',
            fontSize: 20,
            }}
            onClick={()=>navigate('/shoes/new')}>Add Shoe</button>

            <div className='border'>
                <code>{renderShoes()}</code>
            </div>
            {/* <div className='border'> */}
            {/* <code>{JSON.stringify(shoes)}</code> */}
            {/* </div> */}
        </div>
    )
}

export default Shoes