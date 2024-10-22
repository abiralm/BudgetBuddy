// renders the overall balance


import {React,useContext} from 'react'
import { GlobalContext } from '../context/globalState'

const Balance = () => {
  const {transactions} = useContext(GlobalContext)
  const amount = transactions.map(transaction=>transaction.amount).reduce((acc,sum)=>(acc+sum),0)
  
  return (
    <>
        <div>Balance</div>
        <div className="balance">Rs. {amount}</div>
    </>
    
  )
}

export default Balance