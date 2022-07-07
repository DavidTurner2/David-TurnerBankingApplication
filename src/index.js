import React from 'react';

import { createRoot } from 'react-dom/client';




import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import { HashRouter, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import { UserContext  } from './context.js'
import Home from './home'
import Login from './login'
import Deposit from './deposit'
import Withdraw from './withdraw'
import Balance from './balance'
import AllData from './alldata'
import CreateAccount from './createaccount'
import NavBar from './navbar'



function Spa() {
  return (
    <HashRouter>
      <UserContext.Provider value={{users:[{name:'',email:0,password:'',}, {name:'abel',email:'abel@mit.edu',password:'secret',balance:100}], currentuser:0}}>
      <NavBar/>

        <div className="container" style={{padding: "20px"}}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/balance" element={<Balance />} />
          <Route path="/alldata" element={<AllData />} />
          </Routes>
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
  <Spa/>
  </React.StrictMode>
);
