import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';

export default function SingleItem(user) {
    const { itemId } = useParams();
    const [item, setItem] = useState([])

    const getItem = async () => {
        const url = `http://127.0.0.1:5000/api/shop/${itemId}`
        
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
        setItem(data);
    };

    useEffect(() => {
        getItem()
    }, [])


    return item.length===0 ?(
        <div>Item is loading...</div>
      ): (
        <div className='text-center'>
            <h1>{item.item.name}</h1>
            <div className='col'>
                <div className="card text-center">
                    <img src={item.item.imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">{item.item.details}</p>
                        <h2 className="card-text">{item.item.price}</h2>
                        <Link to={`/`} className='btn btn-primary mx-1'>Return</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
