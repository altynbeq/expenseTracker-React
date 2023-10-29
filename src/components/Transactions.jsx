import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transactions = () => {
    const { transactions } = useContext(GlobalContext);

    let income = 0;
    let expense = 0;
    
    transactions.forEach( transaction => {
        transaction.amount > 0 ? income += transaction.amount : expense += transaction.amount;
    })
    return(
        <>
            <div className="inc-exp-container">
                <div>
                <h4>Income</h4>
                <p id="money-plus" class="money plus">+${income}</p>
                </div>
                <div>
                <h4>Expense</h4>
                <p id="money-minus" class="money minus">-${Math.abs(expense)}</p>
                </div>
            </div>
        </>
    )
}