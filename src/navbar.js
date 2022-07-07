import {OverlayTrigger, Navbar, Container, Nav } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';
import { UserContext } from './context.js'
import React from 'react';

function NavBar(){
  const ctx = React.useContext(UserContext); 

  const location = useLocation();

  return(

<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#" style={location.pathname === "/" ? {color: 'red'} : {color: 'black'}}>BadBank</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">   
      <OverlayTrigger placement="bottom" overlay={<div style={{
            position: 'absolute',
            backgroundColor: 'rgba(255, 100, 100, 0.85)',
            padding: '2px 10px',
            color: 'white',
            borderRadius: 3,            
          }}>CREATE AN ACCOUNT!</div>}><Nav.Link href="#/createaccount/" style={location.pathname === "/createaccount/" ? {color: 'red'} : {color: 'black'}}>Create Account</Nav.Link></OverlayTrigger>


<OverlayTrigger placement="bottom" overlay={<div style={{
            position: 'absolute',
            backgroundColor: 'rgba(123, 23, 255, 0.85)',
            padding: '2px 10px',
            color: 'white',
            borderRadius: 3,            
          }}>LOGIN TO YOUR ACCOUNT!</div>}><Nav.Link href="#/login/" style={location.pathname === "/login/" ? {color: 'red'} : {color: 'black'}}>Login</Nav.Link></OverlayTrigger>

<OverlayTrigger placement="bottom" overlay={<div style={{
            position: 'absolute',
            backgroundColor: 'rgba(65, 100, 69, 0.85)',
            padding: '2px 10px',
            color: 'white',
            borderRadius: 3,            
          }}>DEPOSIT MONEY INTO YOUR ACCOUNT!</div>}><Nav.Link href="#/deposit/" style={location.pathname === "/deposit/" ? {color: 'red'} : {color: 'black'}}>Deposit</Nav.Link></OverlayTrigger>

<OverlayTrigger placement="bottom" overlay={<div style={{
            position: 'absolute',
            backgroundColor: 'rgba(200, 200, 50, 0.85)',
            padding: '2px 10px',
            color: 'white',
            borderRadius: 3,            
          }}>WITHDRAW YOUR MONEY!</div>}><Nav.Link href="#/withdraw/" style={location.pathname === "/withdraw/" ? {color: 'red'} : {color: 'black'}}>Withdraw</Nav.Link></OverlayTrigger>

<OverlayTrigger placement="bottom" overlay={<div style={{
            position: 'absolute',
            backgroundColor: 'rgba(0, 1, 0, 0.85)',
            padding: '2px 10px',
            color: 'white',
            borderRadius: 3,            
          }}>CHECK YOUR BALANCE!</div>}><Nav.Link href="#/balance/" style={location.pathname === "/balance/" ? {color: 'red'} : {color: 'black'}}>Balance</Nav.Link></OverlayTrigger>
          <OverlayTrigger placement="bottom" overlay={<div style={{
            position: 'absolute',
            backgroundColor: 'rgba(123, 23, 255, 0.85)',
            padding: '2px 10px',
            color: 'white',
            borderRadius: 3,            
          }}>See all data stored</div>}><Nav.Link href="#/alldata/" style={location.pathname === "/alldata/" ? {color: 'red'} : {color: 'black'}}>alldata</Nav.Link></OverlayTrigger>
        
          <Navbar.Text>
          {ctx.currentuser !== 0 &&  <div>              Signed in as: <a href="#/login/">{ctx.users[ctx.currentuser].name}</a></div>}
      </Navbar.Text>
         
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default NavBar