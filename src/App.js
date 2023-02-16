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
  const [user, setUser] = useState({})

  const logMeIn = (user) => {
    setUser(user)
  };
  const logMeOut = () => {
    setUser({})
  };

  // const addToCart = () => {
  //   setMyCart(myCart + {item.id})
  // };

  const getCart = async (user) => {
    if (user.apitoken) {
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.apitoken}`
        }
      }

      const res = await fetch('http://127.0.0.1:5000/api/mycart', options);
      const data = await res.json();
      console.log(data)
      setMyCart(data);
    }else{
      setMyCart([])
    }
  };

  useEffect(() => {
    getCart(user)
  }, [user])

  


  return (
    <div>
      <BrowserRouter>
        <Nav user={user} logMeOut={logMeOut} />
        <Routes>
          <Route path='/' element={<Shop  user={user} />} />
          <Route path='/cart' element={<Cart myCart={myCart} user={user} getCart={getCart} setMyCart={setMyCart} />} />
          <Route path='/login' element={<Login logMeIn={logMeIn} />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/shop/:itemID' element={<Item user={user}/>} />
          <Route path='/shop/singleitem/:itemId' element={<SingleItem />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

