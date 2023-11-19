import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div
    className="navbar"
    style={{ height: "fit-content", backgroundColor: "#90e0ef" }}
  >
    <Link to="/waiter">
      <button
        className="order-button "
        style={{ margin: "10px", color: "white", border: "1px solid white" }}
      >
        WAITER
      </button>
    </Link>
    <Link to="/">
      <button
        className="order-button "
        style={{ margin: "10px", color: "white", border: "1px solid white" }}
      >
        OWNER
      </button>
    </Link>
    <Link to="/chef">
      <button
        className="order-button "
        style={{ margin: "10px", color: "white", border: "1px solid white" }}
      >
        CHEF
      </button>
    </Link>
  </div>
);

export default Navbar;
