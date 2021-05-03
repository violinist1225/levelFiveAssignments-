import React, {useState} from "react"
import axios from "axios"
const BountyContext = React.createContext()



export default function BountyProvider(props) {
  const [bounties, setBounties] = useState([])
  
  function getData(){
    axios.get('/bounties')
    .then(res => setBounties(res.data))
    .catch(err => console.log(err))
  } 

  // function delete(){

  // }

  // function postFunction(){


  // }


  // function editFunction(){


  // }
  return (
    <BountyContext.Provider value={{getData, bounties }}>
    {props.children}
    </BountyContext.Provider>
)}

export {BountyProvider, BountyContext}
   
    
   
