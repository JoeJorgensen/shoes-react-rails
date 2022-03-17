import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../providers/DataProvider';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';
import Badge from 'react-bootstrap/esm/Badge';
import CardGroup from 'react-bootstrap/esm/CardGroup'

const Shoe = (props)=>{
const {deleteShoe}= useContext(DataContext);
const navigate = useNavigate();
const {id, brand, style, price} = props;
    return (
        
        <div >
            <CardGroup>
            <Card>
            {/* <h1>Shoe</h1> */}
            <h3>
            <Badge>{brand}</Badge>
            <br/>
            <br/>

            <Badge>{style}</Badge>
            <br/>
            <br/>

            <Badge>${price}</Badge>
            <br/>
            <br/>

            </h3>
            <div className='border'
            style={{ textAlign: 'center',display: 'flex', justifyContent: 'space-around'}}>

            <Button className='border' onClick={()=> navigate(`/shoes/${id}/edit`,{
                state: {id, brand, style, price}
                })}
                >Edit
                </Button>
            <Button className='border' onClick={()=>deleteShoe(id)}>Delete</Button>
            <Button className='border' onClick={()=> navigate(`/shoes/${id}`, {state: props})}>Show</Button>
            
            </div>
            </Card>
            </CardGroup>
        </div>
    )
}

export default Shoe