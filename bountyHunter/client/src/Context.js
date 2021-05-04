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

  function addBounty(newBounty){
    axios.post("/bounties", newBounty)
    .then(res =>
    setBounties(prevBounties => 
    [...prevBounties, res.data]
    ))
    .catch(err => console.log(err))
}


function handleDelete(bountyId){
  axios.delete(`bounties/${bountyId}`)
  // .then(res => console.log(res))
  .then(res => setBounties(prevBounties => {
    const updatedArray = prevBounties.filter(aBounty => aBounty._id !== bountyId)
      return updatedArray
  }) )
  .catch (err => console.log(err))
}

  


  function handleEdit(bountyId){
    axios.put(`bounties/${bountyId}`)
  .then(res => setBounties(prevBounties => {
     const filteredBounty = prevBounties.find(aBounty => aBounty._id === bountyId
      )
      const indexFinder = prevBounties.indexOf(filteredBounty)
      prevBounties[indexFinder] = res.data

      return prevBounties
    
  }) )
  .catch (err => console.log(err))
  }



  return (
    <BountyContext.Provider value={{getData, addBounty, handleDelete, bounties, handleEdit }}>
    {props.children}
    </BountyContext.Provider>
)


  }


export {BountyProvider, BountyContext}
   
    
   
