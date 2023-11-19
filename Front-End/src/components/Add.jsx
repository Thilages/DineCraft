import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ADD_URL = "http://localhost:4000/add";

const Add = () => {
  
  const handleSubit = async () => {
    await axios.post(ADD_URL, { orderName, orderPrice });
  };

  const [orderName, setorderName] = useState("");
  const [orderPrice, setorderPrice] = useState("");

  return (
    <div style={{ height: "100vh" }}>
      <div className="order-card" >
        <h1>Add Orders</h1>
        <div style={{display:"flex",padding:"20px"}}>
          <h2 style={{marginRight:"20px"}}>Name:</h2>
          <input
            type="text"
            onChange={(e) => setorderName(e.target.value)}
          />
        </div>
        <div style={{display:"flex",padding:"20px"}}>
          <h2 style={{marginRight:"20px"}}>Price:</h2>
          <input
            type="text"
            onChange={(e) => setorderPrice(e.target.value)}
          />
        </div>
        <Link to="/">
          <button className="order-button"onClick={handleSubit}>Add</button>
        </Link>
      </div>
    </div>
  );
};

export default Add;
