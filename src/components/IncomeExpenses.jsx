// renders the negative and postive balance

import {React,useContext} from 'react'
import { GlobalContext } from '../context/globalState'

const IncomeExpenses = () => {
  const {transactions} = useContext(GlobalContext)
  const positiveVals =transactions.map(transaction=>transaction.amount).filter(value=>value>0).reduce((acc, postiveTotal) => acc + postiveTotal, 0);
  const negativeVals =transactions.map(transaction=>transaction.amount).filter(value=>value<0).reduce((acc, postiveTotal) => acc + postiveTotal, 0);

  return (
    <div>
        <div>
            <h3>Income</h3>
            <p className="plus" id="plus">+ Rs.{positiveVals}</p>
        </div>
        <div>
            <h3>Expenses</h3>
            <p className="minus" id="minus">- Rs.{Math.abs(negativeVals)}</p>
        </div>
    </div>
  )
}

export default IncomeExpenses