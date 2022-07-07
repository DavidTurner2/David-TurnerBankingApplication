import React, { useState } from 'react';
import { UserContext  } from './context.js'
import { Card } from 'react-bootstrap';

const ATMDeposit = ({status, handleSubmit, onChange, isDeposit, validTransaction, isValid }) => {
    const choice = ['Deposit', 'Withdraw'];
    const [input, setInput] = useState("");
    const ctx = React.useContext(UserContext);
    isValid = (!(validTransaction));
      
  
    return (

<Card>
  <Card.Header><h3>{choice[Number(!isDeposit)]}</h3></Card.Header>
  <Card.Body>
  <label className="label huge">
      <form onSubmit={(e) =>{ if(isNaN(input)){
        alert("not a number");
        e.preventDefault();
        return
      }
      else if (input < 0){
        alert("negative number");
        e.preventDefault();
        return
      }
      else if (isDeposit === false && input > ctx.users[ctx.currentuser].balance){
        alert("transaction failed (insufficent funds)");
        e.preventDefault();
        return
      }

        setInput(""); handleSubmit(e)}}> 
  
      <input id="number-input" type="number" width="200" onChange={(e) =>{onChange(e);
      setInput(e.target.value);}} value={input}
      ></input>
      <input type="submit" width="200" value={isDeposit ? "Deposit" : "Withdraw"} id="submit-input" disabled={isValid}></input> 
       </form> 
      </label>

    <Card.Text>
      {status}
    </Card.Text>
  </Card.Body>







     </Card>
    );
  };
  
  
  
  
  
  
  
  const ATM = ({yummy}) => {
    const ctx = React.useContext(UserContext);
  
    const [deposit, setDeposit] = React.useState(0);
   // const [totalState, setTotalState] = React.useState(0);
    const [isDeposit, setIsDeposit] = React.useState(yummy);
    const [validTransaction, setValidTransaction] = React.useState(false);
    
    let status = `Account Balance $ ${ctx.users[ctx.currentuser].balance} `;
    const handleChange = (event) => {
      setDeposit(Number(event.target.value));
      setValidTransaction(false);
     // if(event.target.value <= 0 ) return;
      setValidTransaction(isDeposit === false  && event.target.value === ""/* > ctx.users[ctx.currentuser].balance */  ? false : true)
     
    };
    const handleSubmit = (event) => {
      let newTotal = isDeposit ? ctx.users[ctx.currentuser].balance + deposit : ctx.users[ctx.currentuser].balance - deposit;
      // setTotalState(newTotal);
      ctx.users[ctx.currentuser].balance = newTotal;
      setValidTransaction(false);
      event.preventDefault();
  
    };
    
  
    return (  <div>{ctx.currentuser === 0 ? <Card>
      <Card.Header as="h5">You need to be logged in to do that</Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          <a href="#/login/">Log in</a> Or <a href="#/createaccount/">Create an account</a>
        </Card.Text>
      </Card.Body>
    </Card> :  
        <ATMDeposit status = {status} handleSubmit={handleSubmit} onChange={handleChange} isDeposit={isDeposit} isValid validTransaction={validTransaction}></ATMDeposit>}</div>
    );
  };
  
  export default ATM