import React from 'react';
import logo from './logo.svg';
import './App.css';
import axiosInstance from './utils/axios';
import Home from './Pages/Home';
import Header from './Components/Header';
import {Routes,Route} from 'react-router-dom'
import Cart from './Pages/Cart';
import Blog from './Pages/Blog';
import Signup from './Pages/Signup';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element = { <Cart />} />
        <Route path='/blog' element = { <Blog />} />
        <Route path='/signup' element = { <Signup />} />        
      </Routes>     
    </div>
  );
}

export default App;
