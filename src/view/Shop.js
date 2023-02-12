import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
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
    this.setState({ items: data });
  };

  componentDidMount = () => {
    this.getItems();
  }


  showItems = () => {
    if (this.state.items.length > 0) {
      const stuff = this.state.items.map(i => <Link key={i.id} to={`/shop/${i.id}`} ><Item itemInfo={i} /></Link>)
      return stuff}
  };


  render() {
    return (
      <div>
        <h1 className="text-center my-3">Welcome to the Bike Shop!</h1>
        <h4 className="text-center my-3">Pedal Towards Savings Today!</h4>
        {console.log(this.state.items, 'rendered')}
        {this.showItems()}
       
      </div>
    )
  }
}
