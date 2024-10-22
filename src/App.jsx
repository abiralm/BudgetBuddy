import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import { TxnList } from './components/TxnList'
import TxnForm from './components/TxnForm'
import { GlobalProvider } from './context/globalState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
      </div>
      <IncomeExpenses/>
      <TxnList/>
      <TxnForm/>
    </GlobalProvider>
  )
}

export default App
