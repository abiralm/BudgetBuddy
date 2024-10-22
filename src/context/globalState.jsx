// handles the global context


import React,{createContext,useReducer} from "react";


//initial state
const initialState = {
    transactions:[
    ]
}

//reducer fn
function reducer(state,action){
    switch(action.type){
        case "DELETE":
            return {
                ...state,
                transactions:state.transactions.filter(transaction=>transaction.id!=action.payload)
            }
        case "ADD":
            return {
                ...state,
                transactions:[...state.transactions,action.payload]
            }
        default:
            return state
    }
}

function handleClick(){
    dispatch({type:"default"})
}

// global context
export const GlobalContext = createContext(initialState)

//provider component
export const GlobalProvider = ({children})=>{
    const[state,dispatch]= useReducer(reducer,initialState);

    //actions
    function deleteTransaction(id){
        dispatch({
            type:"DELETE",
            payload:id
        })
    }

    function addTransaction(transaction){
        dispatch({
            type:"ADD",
            payload:transaction
        })
    }

    return(
        <GlobalContext.Provider value={{transactions:state.transactions,deleteTransaction,addTransaction}}>
            {children}
            {console.log(state.transactions)}
        </GlobalContext.Provider>
    )
}