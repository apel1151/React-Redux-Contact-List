import './App.css';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import { Routes , Route } from 'react-router';
import Home from './components/Home';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';



const  App = () => {
  return (
    <div className="App">
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route exact path = "/" element={<Home/>} >
              
        </Route>
        <Route path = "/add" element= {<AddContact/>} >
              
        </Route>
        <Route path = "/edit/:id" element = {<EditContact/>}>
              
        </Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
