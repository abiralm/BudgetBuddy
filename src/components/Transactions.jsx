//passes the transaction list and has delete functionality


import {React,useContext} from 'react'
import { GlobalContext } from '../context/globalState'

import '../App.css'

const Transactions = ({transaction}) => {
  const sign = transaction.amount>0 ? "+" : "-"
  const {deleteTransaction} = useContext(GlobalContext)

  
  return (
    <li className={transaction.amount>0 ?"signPos":"signNeg"}>
        {transaction.text} 
        <span>{sign}{Math.abs(transaction.amount)}
          <button onClick={()=>deleteTransaction(transaction.id)} className='delete'>X</button>
        </span>      
    </li>
  )
}

export default Transactions