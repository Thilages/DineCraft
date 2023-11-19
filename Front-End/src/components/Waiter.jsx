import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:4000/menu";
const ORDER_URL = "http://localhost:4000/orders";

const Waiter = () => {
  useEffect(() => {
    fetchmenu();
  }, []);

  const [menu, setmenu] = useState([]);
  const [Orders, setOrders] = useState([]);

  const fetchmenu = async () => {
    const { data } = await axios.get(BASE_URL);
    setmenu(data);
  };

  const placeOrder = async () => {
    await axios.post(ORDER_URL, Orders);
    setOrders([]);
  };

  const handleMenuItemClick = (item) => {
    setOrders([...Orders, item]);
  };

  const totalFunction = () => {
    let total = 0;
    Orders.forEach((item) => (total += Number(item.price)));
    return Math.round(total);
  };

  return (
    <div style={{ display: "flex" }}>
      <div className="waiter-menu" style={{ width: "50%" }}>
        <h1
          style={{
            display: "block",
            width: "100%",
            textAlign: "center",
            padding: "10px",
          }}
        >
          Available Items
        </h1>
        {menu.map((item) => {
          if (item.availability) {
            return (
              <div className="waiter-card">
                <div style={{ display: "flex" }}>
                  <h3 style={{ marginRight: "10px" }}>{item.name} - </h3>
                  <h3 style={{ marginRight: "10px" }}>₹ {item.price}</h3>
                </div>
                <button onClick={() => handleMenuItemClick(item)}>ORDER</button>
              </div>
            );
          }
          return (
            <div className="waiter-card">
              <div style={{ display: "flex" }}>
                <h3 style={{ marginRight: "10px" }}>{item.name} - </h3>
                <h3 style={{ marginRight: "10px" }}>₹ {item.price}</h3>
              </div>
              <h3>Curretly unabailable</h3>
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
          height: "100vh",
          overflow: "scroll",
        }}
      >
        <div className="waiter-order">
          <h1>Your Order</h1>
          <div className="waiter-item">
            <h2 style={{ marginRight: "20px" }}>Food</h2>
            <h2>Price</h2>
          </div>
          {Orders.map((item) => (
            <div className="waiter-item">
              <h3 style={{ marginRight: "20px" }}>{item.name}</h3>
              <h3>₹{item.price}</h3>
            </div>
          ))}
          <h3 style={{ padding: "10px" }}>Total:₹{totalFunction()}</h3>
          <button className="order-button" onClick={placeOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Waiter;
