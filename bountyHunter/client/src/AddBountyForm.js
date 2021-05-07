import React, {useContext, useState} from 'react'
import {BountyContext} from "./Context"


export default function AddBountyForm(props){
    const initInputs = {
        firstName: props.firstName || "", lastName: props.lastName || "", bountyAmount: props.bountyAmount || "", living: props.living || "", _id: props._id
    }
    const [inputs, setInputs] = useState(initInputs)
    const {addBounty, handleEdit} = useContext(BountyContext)

    function handleChange(e){
        const{name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs, [name]: value
        }))
    }
    


    // function handleEdit(){

    // }
    function handleSubmit(e){
       //props.editToggle?props.handleEdit(props._id): addBounty(inputs) //props.submit(inputs)?? refactor
       if(props.buttonText==="Submit Edit"){
           handleEdit(inputs._id, inputs)
       }else{
           addBounty(inputs)
            setInputs(initInputs)
           
       }
    }
    
    
    return(
<form onSubmit = {handleSubmit}>
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

         <button>  {props.buttonText}</button>

</form>


    )}