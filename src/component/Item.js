import React from 'react'
import { Link } from 'react-router-dom';

export default function Item ({itemInfo, user}) {
    
    const addToCartAPI = async () => {
        console.log(user.user.apitoken)
        // if (user.apitoken){
            const url = 'http://127.0.0.1:5000/api/cart/add'
            const options = {
                method: 'POST',
                body: JSON.stringify({'itemId': itemInfo.id}),
                headers:{
                    'Content-Type':'application/json',
                    Authorization: `Bearer ${user.user.apitoken}`
                }
            } 
            console.log(url, options)

            const res = await fetch(url, options);
            const data = await res.json();
            console.log(data)
            // if (data.status ==='ok'){
            //     setMessages([data.message])
            // }
        // }
    }

        return (
            <div className="card text-center h-100">
                <img src={itemInfo.imgUrl} className="card-img-top" alt={itemInfo.name} />
                <div className="card-body">
                    <h5 className="card-title">{ itemInfo.name }</h5>
                    <p className="card-text">{itemInfo.details}</p>
                    <h3>{itemInfo.price}</h3>
                    <div>
                    <Link to={`/shop/singleitem/${itemInfo.id}`} className='btn btn-primary mx-1'>More Info</Link>
                    <button onClick={()=>{addToCartAPI()}} className='btn btn-success mx-1'>Add to Cart</button>
                    </div>
                </div>
            </div>
        )
    }
