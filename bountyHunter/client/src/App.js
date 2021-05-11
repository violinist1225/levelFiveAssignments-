import React from 'react'
import BountyData from './BountyData'
import AddBountyForm from './AddBountyForm'

export default function App(){
    return(
        <div className="app">
            <AddBountyForm
            buttonText = "Add Bounty"
            />
            <BountyData  />
        </div>
    )
}