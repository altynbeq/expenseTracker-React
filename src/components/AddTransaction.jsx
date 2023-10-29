import React, {useState, useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

// main component for adding transactions
export const AddTransaction = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    const { newTransaction } = useContext(GlobalContext);
    const { transactions } = useContext(GlobalContext);
    
    // function for handling adding
    const onAdd = (e) => {
        e.preventDefault();
        // collect new transaction details
        const newTransaction_data = {
            id: transactions.length > 0 ? transactions[transactions.length - 1].id + 1 : 1,
            text,
            amount: +amount,
        }
        // pass details for updating
        newTransaction(newTransaction_data);
    }
    return(
        <div>
            <h3>Add new transaction</h3>
            <form id="form" onSubmit={onAdd}>
                <div className="form-control">
                <label for="text">Transaction type</label>
                <input type="text" value={text} 
                    onChange={(e) => setText(e.target.value)} id="text" placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label for="amount"
                    >Amount <br />
                    (negative - expense, positive - income)</label
                >
                <input type="number" value={amount} 
                    onChange={(e) => setAmount(e.target.value)} id="amount" placeholder="Enter amount..." />
                </div>
                <button className="btn" >Add transaction</button>
            </form>
        </div>
    )
}