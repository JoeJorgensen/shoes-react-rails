import React, { useEffect, useState } from "react";
import axios from 'axios'

// createContext HERE this doing a lot for
// create Context/Provider, get and set out data
export const DataContext = React.createContext();

const DataProvider = (props) => {
  const [shoes, setShoes] = useState([]);
  useEffect(()=>{
    console.log('dataProvider mounted')
    getShoes()
  }, [])

  const getShoes = async()=>{
    try {
       let res = await axios.get('http://localhost:3001/api/shoes')
       console.log(res)
       setShoes(res.data)
      }catch(err){
        console.log(err)
        console.log(err.response)
        alert('error getting shoes')
      }
   
  }

  // create an object that will be 'global state'
  const shoeProviderThing = {
    getShoes,
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
