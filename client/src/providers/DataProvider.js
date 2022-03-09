import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

// createContext HERE this doing a lot for
// create Context/Provider, get and set out data
export const DataContext = React.createContext();

const DataProvider = (props) => {
  // const navigate = useNavigate();
  const [shoes, setShoes] = useState([]);
  useEffect(()=>{
    console.log('dataProvider mounted')
    getShoes()
  }, [])

  const getShoes = async()=>{
    try {
       let res = await axios.get('/api/shoes')
       console.log(res)
       setShoes(res.data)
      }catch(err){
        console.log(err)
        console.log(err.response)
        alert('error getting shoes')
      console.log(err.response)
      }
  }
  const addShoe = async (shoe, navigate)=>{
    try{
      let res = await axios.post('/api/shoes',shoe)
      setShoes([res.data, ...shoes])
      navigate('/shoes')
    }catch(err){
       alert('error adding shoe')
      }
  }

  const updateShoe = async (shoe, navigate)=>{
    try {
    let res = await axios.put(`/api/shoes/${shoe.id}`, shoe)

    let updatedShoes = shoes.map((s)=> s.id === res.data.id ? res.data : s )
    setShoes(updatedShoes)
    console.log(res)
    }catch(err){
      alert('error updating shoes')
      console.log(err.response)
    }
  }

  const deleteShoe = async(id)=>{
    try{
    let res = await axios.delete(`/api/shoes/${id}`)
    let deletedShoe = shoes.filter(s=> s.id !== id )
    setShoes(deletedShoe)
    }catch(err){
      alert('error deleting shoe');
      console.log(err.response);
    }
  }
  // create an object that will be 'global state'
  const shoeProviderThing = {
    shoes,
    getShoes,
    addShoe,
    updateShoe,
    deleteShoe,
    setShoes,
};
  // return the provider which will wrap my all app
  return (
    <DataContext.Provider value={shoeProviderThing}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
