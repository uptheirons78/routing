import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
const endpoint = 'https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get';

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(endpoint);

    const items = await data.json();
    console.log(items);

    setItems(items.items);
  };

  return (
    <div>
      {items.slice(0, 10).map(item => (
        <h1 key={item.itemid}>
          <Link to={`/shop/${item.itemid}`}>{item.name}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;
