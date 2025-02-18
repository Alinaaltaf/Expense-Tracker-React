import React, {useState, useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState';
export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onsubmit = e => {
    e.preventDefault();

    if((+amount)=== 0){
      alert("Please enter correct value")
      return false;
    }

    const newTransaction = { 
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onsubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) =>setText(e.target.value)} 
          placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label     >
          <input type="number" value={amount} onChange={(e) =>setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
        </form>

        <label htmlFor="text">Alina</label>
        </>
        
  )
  
}
