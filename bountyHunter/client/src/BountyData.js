import React from "react"
import { useEffect, useContext } from "react/cjs/react.development"
import {BountyContext} from "./Context"

export default function BountyData(){
    const {getData, bounties} = useContext(BountyContext)
    useEffect(() => {
        // console.log("UseEffect is running!", BountyContext)
        getData()

// eslint-disable-next-line 
}, [])


const displayBounties = bounties.map(bounty => {
    return(
        <div>
            <h1>{bounty.firstName} {bounty.lastName} </h1>
            <p>{bounty.living ? "Is Living": "Is Not Living"}</p>
            <h3>{bounty.bountyAmount}</h3>
            <h2>{bounty.type}</h2>
            //delete button goes here with onclick 
        </div>
    )
})
    return(
        <div>
            {displayBounties}
        </div>
    )


}