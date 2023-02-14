import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Item from '../component/Item';

export default function Cart({myCart, user}) {


    const getCart = async () => {
        const res = await fetch('http://127.0.0.1:5000/api/mycart');
        const data = await res.json();
        // console.log(data)
        setCart({ cart: data.items });
    };

    
    useEffect = () => {
        getCart();
    }


    const showCart = () => {
        if (cart.length > 0) {
            return cart.map(i => <div className='col-3' key={i.id} to={`/shop/${i.id}`} ><Item itemInfo={i} /></div>)
        }
    };

    return (

        <div>
            <h1>Your Cart</h1>
            {showCart()}
        </div>
    )
}
