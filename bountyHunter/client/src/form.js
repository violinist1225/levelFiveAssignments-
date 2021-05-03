import React from 'react'
import { useEffect, useContext } from "react/cjs/react.development"
import {BountyContext} from "./Context"


export default function Form(){
    const initInputs = {
        firstName: "", lastName: "", bountyAmount: "", living: ""
    }
    const [inputs, setInputs] = useState("")

    function handleChange(e){
        const{name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs, [name]: value
        }))
    }
    
    function handleSumbit(e){
        e.preventDefault()
        setInputs(initInputs)


    }

    // function handleDelete(){

    // }


    // function handleEdit(){

    // }

const {getData} = useContext(BountyContext)
    
    
    return(
<form>
        <input type="text"
         name="firstName" 
         value={inputs.firstName} 
         onChange={handleChange}
         placeholder="First Name" />

        <input type="text" 
        name="lastName"
        value={inputs.lastName}
        onChange = {handleChange}
        placeholder="Last Name" />

        <input type="text"
         name="bountyAmount" 
         value={inputs.bountyAmount} 
         onChange = {handleChange}
         placeholder="Bounty Amount" />

          <input type="text"
         name="living" 
         value={inputs.living} 
         onChange = {handleChange}
         placeholder="Is Living?" />

         <button>Add Movie</button>

</form>


    )}