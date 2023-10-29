import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer"

// initial state
const initialState = {
    transactions : [
        {id:1, type: "flowers", amount: -50},
        {id:2, type: "salary", amount: 2000},
        {id:3, type: "stock", amount: 1000},
        {id:4, type: "rent", amount: -600},
    ]
}

// create context
export const GlobalContext = createContext(initialState);

// provider conponent

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    function deleteTransaction(id){
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id,
        })
    }

    function newTransaction(transaction){
        dispatch({
            type: "NEW_TRANSACTION",
            payload: transaction,
        })
    }
    return(
        <GlobalContext.Provider value={ {transactions: state.transactions, deleteTransaction, newTransaction} }>
            {children}
        </GlobalContext.Provider>)
}