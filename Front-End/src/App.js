import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Chef, Waiter, Navbar,Add } from "./components";
import { Box } from "@mui/material";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Box sx={{height:"100vh", backgroundColor:"#90e0ef"}}>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/chef" element={<Chef />} />
        <Route path="/waiter" element={<Waiter />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
