// renders the list


import {React,useContext} from 'react'
import { GlobalContext } from '../context/globalState'
import Transactions from './Transactions'

export const TxnList = () => {
  const {transactions} = useContext(GlobalContext)
  return (
    <div>
      <h2>History</h2>
      <ul>
        {transactions.map(transaction=>(
          <Transactions key={transaction.id} transaction={transaction}/>
        ))}
        
      </ul>
    </div>
  )
}
