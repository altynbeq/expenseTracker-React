import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    const { deleteTransaction } = useContext(GlobalContext);

    return(
        <>
        <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map( transaction => {
                    return (<li className={transaction.amount > 0 ? "plus" : "minus"}>
                    {transaction.type ? transaction.type : "unknown"} <span>{transaction.amount}$</span><button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
                    </li>)
                })}
            </ul>
        </>
    )
}