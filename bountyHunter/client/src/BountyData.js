import axios from "axios"
import React from "react"
import { useEffect,useState, useContext } from "react/cjs/react.development"
import {BountyContext} from "./Context"
import AddBountyForm from "./AddBountyForm"

export default function BountyData(){
    const[editToggle, setEditToggle] = useState(false)
    const {getData, bounties, handleDelete, handleEdit} = useContext(BountyContext)
    useEffect(() => {
        // console.log("UseEffect is running!", BountyContext)
        getData()

// eslint-disable-next-line 
}, [])



const displayBounties = bounties.map(bounty => {
    console.log(bounty)
    return(
        <div>
            {!editToggle ?
            <>
                <h1>{bounty.firstName} {bounty.lastName} </h1>
                <p>{bounty.living ? "Is Living": "Is Not Living"}</p>
                <h3>{bounty.bountyAmount}</h3>
                <h2>{bounty.type}</h2>          
                <button onClick={() =>handleDelete(bounty._id)}> Delete Bounty!</button>
        
            <AddBountyForm 
                firstName = {bounty.firstName}
                lastName = {bounty.lastName}
                living = {bounty.living}
                type = {bounty.type}
                buttonText = "Submit Edit"
                handleEdit={handleEdit}
            />
        <button 
                //if edit = true, show form . If false, then keep code
                //()=>handleEdit(bounty._id)}>Edit Bounty!
                onClick = {()=> setEditToggle(prevToggle =>!prevToggle)}>
                    Edit
            </button >
            </>

            
        :
            
            <>
            
            <AddBountyForm 
                firstName = {bounty.firstName}
                lastName = {bounty.lastName}
                living = {bounty.living}
                type = {bounty.type}
                buttonText = "Submit Edit"
                handleEdit={handleEdit}
                editToggle={editToggle}

            />
            <button onClick = {()=> setEditToggle(prevToggle =>!prevToggle)}>
                Cancel
            </button>

            </>
            }
            
        </div>
    )
})
    return(
        <div>
            {displayBounties}
        </div>
    )


}