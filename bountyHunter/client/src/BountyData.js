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
}, [editToggle])

const displayBounties = bounties.map(bounty => {
    console.log(bounty)
    return(
        <>
            
                <div className="card">
                    <h1 className="title-one">{bounty.firstName} {bounty.lastName} </h1>
                    <p className="para">{bounty.living ? "Is Living": "Is Not Living"}</p>
                    <h3 className="title-two">{bounty.bountyAmount}</h3>
                    <h2>{bounty.type}</h2> 
                </div>         
                <button className={!editToggle?"delete-button":"hidden"} onClick={() =>handleDelete(bounty._id)}> Delete Bounty!</button>
                <button className={!editToggle?"edit-button":"hidden"}
                
                onClick = {()=> setEditToggle(prevToggle =>!prevToggle)}>
                    Edit
            </button >

            <div className={editToggle?"form":"hidden"} >
            <AddBountyForm 
                firstName = {bounty.firstName}
                lastName = {bounty.lastName}
                living = {bounty.living}
                type = {bounty.type}
                buttonText = "Submit Edit"
                handleEdit={handleEdit}
                _id={bounty._id}

            />
            
            <button onClick = {()=> setEditToggle(prevToggle =>!prevToggle)}>
                Cancel
            </button>
        </div>    
        </>
    )
})
    return(
        <>
            {displayBounties}
        </>
    )


}