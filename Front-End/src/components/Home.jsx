import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

const BASE_URL = "http://localhost:4000/menu";
const EDIT_URL = "http://localhost:4000/edit";
const AVAILABLE_URL = "http://localhost:4000/available";

const Home = () => {
  useEffect(() => {
    fetchmenu();
  });

  const [menu, setmenu] = useState([]);
  const [edited, setedited] = useState(null);

  const fetchmenu = async () => {
    const { data } = await axios.get(BASE_URL);
    setmenu(data);
  };

  const updateChange = async (e, id, feild) => {
    const newValue = e.target.value;
    setedited([newValue, id, feild]);
    await axios.put(EDIT_URL, edited);
    setedited([]);
  };

  const updateAvailabity = async (id) => {
    await axios.post(AVAILABLE_URL, { id });
  };

  return (
    <div>
      <h1 style={{ display: "block", textAlign: "center", marginTop: "10px" }}>
        TODAYS OFFERING
      </h1>
      <div className="home">
        {menu.map((item) => (
          <div className="card">
            <h2>{item.name}</h2>
            <div style={{ display: "flex" }}>
              <h2>Price : ₹</h2>
              <input
                className="price-input"
                type="text"
                placeholder={item.price}
                onChange={(e) => updateChange(e, item.id, "price")}
              />
            </div>
            <button
              onClick={() => updateAvailabity(item.id)}
              className={
                item.availability
                  ? "order-button available-button"
                  : "order-button unavailable-button"
              }
            >
              {item.availability ? <>Available</> : <>NotAvailable</>}
            </button>
          </div>
        ))}
      </div>
      <Link to="/add">
        <button className="add-button">ADD</button>
      </Link>
    </div>
  );
};

export default Home;
