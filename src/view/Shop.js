import React, { Component, useState, useEffect } from 'react'
import Item from '../component/Item';

export default function Shop (user){
  const [items, setItems] = useState([])

  const getItems = async () => {
    const res = await fetch('http://127.0.0.1:5000/api/shop');
    const data = await res.json();
    console.log(data)
    setItems(data.items);
  };

  useEffect(() => {
    getItems();
  }, [])


  const showItems = () => {
    if (items.length > 0) {
      return items.map(i => <div className='col-3' key={i.id} to={`/shop/${i.id}`} ><Item itemInfo={i} user={user} /></div>)
      }
  };


    return (
      <div className='container'>
        <h1 className="text-center my-3">Welcome to the Bike Shop!</h1>
        <h4 className="text-center my-3">Pedal Towards Savings Today!</h4>
        {console.log(items, 'rendered')}
        <div className='row'>
        {showItems()}
        </div>       
      </div>
    )
  }

