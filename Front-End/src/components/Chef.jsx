import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const ORDER_URL = "http://localhost:4000/order";
const DELETE_URL = "http://localhost:4000/delete";

const Chef = () => {
  
  useEffect(() => 
  {
    fetchOrder();
  });

  const [orderIndex, setorderIndex] = useState(null);
  const [placedOrder, setplacedOrder] = useState([]);
  
  const deleteitem = async (order) => {
    setorderIndex(order);
    await axios.post(DELETE_URL, { orderIndex });
  };

  const fetchOrder = async () => {
    const { data } = await axios.get(ORDER_URL);
    setplacedOrder(data);
  };

  return (
    <div style={{ height: "100vh", backgroundColor: "#caf0f8" }}>
      <div className="order-table">
        <div style={{ display: placedOrder.length > 0 ? "none" : "block" }}>
          <h1 className="chef-display">No Orders Available</h1>
        </div>
        {placedOrder.map((ordersArray) => (
          <div className="order-card">
            <h1 className="order-title">
              ORDER#{placedOrder.indexOf(ordersArray) + 1}
            </h1>
            {ordersArray.map((item) => (
              <h2 className="orders">{item.name}</h2>
            ))}
            <button
              onClick={() => deleteitem(placedOrder.indexOf(ordersArray))}
              className="order-button"
            >
              Order Complete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chef;
