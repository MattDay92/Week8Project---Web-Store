import React, {Component, useState, useEffect} from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Item from './component/Item';
import Nav from './component/Nav';
import Cart from './view/Cart';
import Login from './view/Login';
import Shop from './view/Shop';
import Signup from './view/Signup';


export default function App() {
  const [myCart, setMyCart] = useState([]);


  return (
    <div>
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart myCart={myCart} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/shop/:itemID' element={<Item />} />
      </Routes>

      </BrowserRouter>
    </div>
  )
}
