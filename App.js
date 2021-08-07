import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import About from './Component/About'
import Contact from './Component/Contact'
import Home from './Component/Home'
import Login from './Component/Login'

import {
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  
  return (
    <div className="App">
     <nav>
       <Link to ="/home page">HOME </Link>
       <Link to ="/about">ABOUT</Link>
       <Link to ="/contact">CONTACT</Link>
       <Link to ="/login">LOGIN</Link>
       </nav> 
      
       
       <Switch>
         <Route path ="/about">
           <About />
         </Route>

         <Route path ="/contact">
           <Contact />
         </Route>

         <Route path ="/Login">
           <Login />
         </Route>

         <Route path ="/">
           <Home />
         </Route>
       </Switch>

    </div>
  );
}

export default App;
