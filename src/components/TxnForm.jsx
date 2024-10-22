// renders the form and adds new item to list


import {React,useContext,useState} from 'react'
import { GlobalContext } from '../context/globalState'

const TxnForm = () => {
  const [details, setDetails] = useState("0")
  const [amount, setAmount] = useState("0")
  const {addTransaction}= useContext(GlobalContext)

  function handleTextChange(e){
    setDetails(e.target.value)
  }

  function handleAmountChange(e){
    setAmount(e.target.value)
  }

  function addToList(e){
    e.preventDefault();
    const newTranscation = {
      id: Math.floor(Math.random()*100000),
      text:details,
      amount:+amount
    }
    addTransaction(newTranscation)
  }

  return (
    <div>
        <h1>Add New Transaction</h1>
        <form >
          <label>Details</label>
          <input type='text'onChange={handleTextChange} value={details}/>
          <br></br>
          <label>Amount</label>
          <input type='number' onChange={handleAmountChange} value={amount} placeholder='Add amount'/>
          <br></br>
          <button type="submit" onClick={addToList}>Add</button>  
        </form>
    </div>
  )
}

export default TxnForm