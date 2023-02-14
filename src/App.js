import React, { Component, useState, useEffect } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Item from './component/Item';
import Nav from './component/Nav';
import Cart from './view/Cart';
import Login from './view/Login';
import Shop from './view/Shop';
import Signup from './view/Signup';
import SingleItem from './view/SingleItem';


export default function App() {
  const [myCart, setMyCart] = useState([]);
  const [user, setUser] = useState([])

  const logMeIn = (user) => {
    setUser(user)
  };
  const logMeOut = () => {
    setUser({})
  };

  // const addToCart = () => {
  //   setMyCart(myCart + {item.id})
  // };


  return (
    <div>
      <BrowserRouter>
        <Nav user={user} logMeOut={logMeOut} />
        <Routes>
          <Route path='/shop' element={<Shop a />} />
          <Route path='/cart' element={<Cart myCart={myCart} user={user} />} />
          <Route path='/login' element={<Login logMeIn={logMeIn} />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/shop/:itemID' element={<Item />} />
          <Route path='/shop/singleitem/:itemID' element={<SingleItem />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

