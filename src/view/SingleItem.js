import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';

export default function SingleItem() {
    const { itemId } = useParams()
    const [item, setItem] = useState([])

    const getItem = async () => {
        const url = `http://127.0.0.1:5000/api/shop/7`
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
        setItem(data);
    };

    useEffect(() => {
        getItem()
    }, [])


    return (
        <div className='text-center'>
            <h1>{item.name}</h1>
            <div className='col'>
                <div className="card text-center">
                    <img src={item.imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">{item.details}</p>
                        <h2 className="card-text">{item.price}</h2>
                        <Link to={`/shop`} className='btn btn-primary mx-1'>Return</Link>
                        <button className='btn btn-success mx-1'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
