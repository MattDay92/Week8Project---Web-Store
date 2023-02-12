import React, { Component } from 'react'

export default class Item extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="card" style={{width: "18rem"}}>
                <img src={this.props.itemInfo.imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{ this.props.itemInfo.name }</h5>
                    <p className="card-text">{this.props.itemInfo.details}</p>
                    
                </div>
            </div>
        )
    }
}