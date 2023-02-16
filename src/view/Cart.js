import React, { useState, useEffect } from 'react'
import Item from '../component/Item';

export default function Cart({ myCart, user, getCart }) {

    const getUniqueCart = (myCart) => {
        if (user.apitoken) {
            const uniqueCart = [];
            const ids = new Set();

            for (let item of myCart.my_cart) {
                if (!ids.has(item.id)) {
                    uniqueCart.push(item)
                    ids.add(item.id)
                }
            }
            return uniqueCart
        } else {
            return [];
        }
    };

    useEffect(() => {
        getCart(user)
    }, [user])

    const getQuantity = (searchItem, myCart) => {
        let count = 0;
        for (let item of myCart) {
            if (item.id === searchItem.id) {
                count++
            }
        }
        return count
    };

    const removeFromCartAPI = async (item) => {
        const url = 'http://127.0.0.1:5000/api/cart/delete'
        const options = {
            method: 'POST',
            body: JSON.stringify({ 'itemId': item.id }),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.apitoken}`
            }
        }
        console.log(url, options)

        const res = await fetch(url, options);
        const data = await res.json();
        console.log(data)
        getCart(user)
        // if (data.status ==='ok'){
        //     setMessages([data.message])
        // }
        // }
    }

    const handleClick = (item) => {
        removeFromCartAPI(item);
    };

    const removeAllFromCartAPI = async () => {
        const url = 'http://127.0.0.1:5000/api/cart/deleteall'
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.apitoken}`
            }
        }

        const res = await fetch(url, options);
        const data = await res.json();
        console.log(data)
        getCart(user)
        // if (data.status ==='ok'){
        //     setMessages([data.message])
        // }
        // }
    }




    return myCart.total === 0? <h1 className='text-center my-5'>Your cart is empty</h1>:
        <>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'></th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Quantity</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Subtotal</th>
                        <th scope='col'>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {getUniqueCart(myCart).map(item => (
                        <tr key={item.id}>
                            <th>{item.id}</th>
                            <td><img src={item.imgUrl} style={{ width: '50px' }} /></td>
                            <td>{item.name}</td>
                            <td>{getQuantity(item, myCart.my_cart)}</td>
                            <td>${item.price}</td>
                            <td>${item.price*getQuantity(item, myCart.my_cart).toFixed(2)}</td>
                            <td><button className='btn btn-danger' onClick={() => { handleClick(item) }}>Remove</button></td>
                        </tr>
                    ))
                    }

                </tbody>
            </table>
            <div className='text-center'>
                <button className='btn btn-danger' onClick={removeAllFromCartAPI}>Remove All</button>
            </div>
        </>
    
}
