import * as React from 'react'
import { UserContext } from './context.js'
import { Card } from 'react-bootstrap'
 
function AllData(){
  const ctx = React.useContext(UserContext);
  console.log(JSON.stringify(ctx));
  return (

    <div>  
      <h5>All Data in Store</h5>
    
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Header>name</Card.Header>
        {ctx.users.map((item, i) =>{ return(
        <Card.Text key={i}>
          {item.name}
        </Card.Text>)})}
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Header>email</Card.Header>
        {ctx.users.map((item, i) =>{ return(
        <Card.Text key={i}>
          {item.email !== 0 && item.email}
        </Card.Text>)})}
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Header>password</Card.Header>
        {ctx.users.map((item, i) =>{ return(
        <Card.Text key={i}>
          {item.password}
        </Card.Text>)})}
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Header>balance</Card.Header>
        {ctx.users.map((item, i) =>{ return(
        <Card.Text key={i}>
          {item.balance}
        </Card.Text>)})}
      </Card.Body>
    </Card>
    
    </div>
  );
}
export default AllData;