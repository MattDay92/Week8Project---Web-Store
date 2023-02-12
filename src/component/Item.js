import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Item extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="card text-center" style={{width: "18rem"}}>
                <img src={this.props.itemInfo.imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{ this.props.itemInfo.name }</h5>
                    <p className="card-text">{this.props.itemInfo.details}</p>
                    <Link to={`/shop/singleitem/${this.props.itemInfo.id}`} className='btn btn-primary mx-1'>More Info</Link>
                    <button className='btn btn-success mx-1'>Add to Cart</button>
                </div>
            </div>
        )
    }
}