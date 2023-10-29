import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

// main component for current balance display
export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    let totalAmount = 0;
    
    // count total of money left from all transactions
    transactions.forEach(transaction => {
        totalAmount += transaction.amount;
    });
    return(
        <>
            <h2 style={{display: "flex", justifyContent: "center"}}>Your balance is: ${totalAmount.toFixed(2)}</h2>
        </>
    )
}