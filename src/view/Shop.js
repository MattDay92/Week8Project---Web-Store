import React, { Component, useState, useEffect } from 'react'
import Item from '../component/Item';

export default class Shop extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    }
  };

  getItems = async () => {
    const res = await fetch('http://127.0.0.1:5000/api/shop');
    const data = await res.json();
    console.log(data)
    this.setState({ items: data.items });
  };

  componentDidMount = () => {
    this.getItems();
  }


  showItems = () => {
    if (this.state.items.length > 0) {
      return this.state.items.map(i => <div className='col-3' key={i.id} to={`/shop/${i.id}`} ><Item itemInfo={i} /></div>)
      }
  };


  render() {
    return (
      <div className='container'>
        <h1 className="text-center my-3">Welcome to the Bike Shop!</h1>
        <h4 className="text-center my-3">Pedal Towards Savings Today!</h4>
        {console.log(this.state.items, 'rendered')}
        <div className='row'>
        {this.showItems()}
        </div>       
      </div>
    )
  }
}
