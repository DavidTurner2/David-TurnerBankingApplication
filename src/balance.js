import { UserContext  } from './context.js'
import React from 'react';
import { Card } from 'react-bootstrap';
function Balance(){
  const ctx = React.useContext(UserContext);


  return (<div>{ctx.currentuser === 0 ? <Card>
    <Card.Header as="h5">Log in or Create an account to see your balance</Card.Header>
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
        <a href="#/login/">Log in</a> Or <a href="#/createaccount/">Create an account</a>
      </Card.Text>
    </Card.Body>
  </Card> :  
    <h1>Account Balance ${ctx.users[ctx.currentuser].balance}</h1>}</div>
  )
}
export default Balance