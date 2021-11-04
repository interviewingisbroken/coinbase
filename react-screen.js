/**
Requirements:
Part 1:
- Clicking Buy should create a new row for Bids (buys).
- Clicking Sell should create a new row for Asks (sells).
- For the size, generate a random number between 0 to 1.
- For Price, generate a random number around 37000.
---
Example order generator object:
{
  id: Math.random(),
  size: Math.random(),
  price: 37000 + Math.random() * 2000
}

Part 2: 
UI should look close to the example. You will not need to use theme library like Material UI or Bootstrap.
- Green = rgb(45,175,52)
- Orange = rgb(250,103,45)
- You can use pure black and white for the other colors. 

Part 3:
- When a new row is created, fade it in from an opacity of zero to a fully visible opacity of one. Over 1 second. 
- Sort by Price.
**/

import { useState } from "react";
import "./styles.css";

function sortOrders(orders) {
  return [...orders].sort((a, b) => b.price - a.price);
}

export default function App() {
  const [sells, setSells] = useState([]);
  const [buys, setBuys] = useState([]);

  const addBuy = () => {
    const newBuy = {
      id: Math.random(),
      size: Math.random().toFixed(4),
      price: (37000 + Math.random() * 2000).toFixed(2)
    };

    const sortedOrders = sortOrders([...buys, newBuy]);

    setBuys(sortedOrders);
  };

  const addSell = () => {
    const newSell = {
      id: Math.random(),
      size: Math.random().toFixed(4),
      price: (37000 + Math.random() * 2000).toFixed(2)
    };

    const sortedOrders = sortOrders([...sells, newSell]);

    setSells(sortedOrders);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div className="order__container">
        <div className="order__controls">
          <button onClick={addBuy} className="control-buy">
            Buy
          </button>
          <button onClick={addSell} className="control-sell">
            Sell
          </button>
        </div>
        <div className="order__book">
          <div className="order__book--sells">
            {sells.map((sell) => (
              <div key={sell.id} className="sell">
                <span className="sell-size">{sell.size}</span>
                <span className="sell-price">{sell.price}</span>
              </div>
            ))}
          </div>

          <div className="divider" />

          <div className="order__book--buys">
            {buys.map((buy) => (
              <div key={buy.id} className="buy">
                <span className="buy-size">{buy.size}</span>
                <span className="buy-price">{buy.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

