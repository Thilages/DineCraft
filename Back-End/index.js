import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const menuItems = [
  { id: 1, name: "Butter Chicken", price: 250, availability: true },
  { id: 2, name: "Paneer Tikka", price: 200, availability: true },
  { id: 3, name: "Masala Dosa", price: 150, availability: true },
  { id: 4, name: "Chole Bhature", price: 180, availability: true },
  { id: 5, name: "Biryani", price: 300, availability: true },
  { id: 6, name: "Samosa", price: 20, availability: true },
  { id: 7, name: "Aloo Gobi", price: 180, availability: true },
  { id: 8, name: "Rogan Josh", price: 280, availability: true },
  { id: 9, name: "Pani Puri", price: 30, availability: true },
  { id: 10, name: "Chicken Tikka", price: 220, availability: true },
  { id: 11, name: "Dal Makhani", price: 200, availability: true },
  { id: 12, name: "Tandoori Roti", price: 15, availability: true },
  { id: 13, name: "Fish Curry", price: 280, availability: true },
  { id: 14, name: "Palak Paneer", price: 210, availability: true },
  { id: 15, name: "Kofta Curry", price: 220, availability: true },
  { id: 16, name: "Rice Pulao", price: 120, availability: true },
  { id: 17, name: "Aloo Paratha", price: 50, availability: true },
  { id: 18, name: "Mango Lassi", price: 60, availability: true },
  { id: 19, name: "Jalebi", price: 40, availability: true },
  { id: 20, name: "Chicken Biryani", price: 280, availability: true },
  // Add more items as needed
  { id: 21, name: "Gulab Jamun", price: 50, availability: true },
  { id: 22, name: "Dhokla", price: 30, availability: true },
  { id: 23, name: "Keema Naan", price: 80, availability: true },
  { id: 24, name: "Mutton Biryani", price: 320, availability: true },
  { id: 25, name: "Kheer", price: 70, availability: true },
  { id: 26, name: "Pakora", price: 35, availability: true },
  { id: 27, name: "Thali", price: 200, availability: true },
  { id: 28, name: "Chapati", price: 10, availability: true },
  { id: 29, name: "Chicken Korma", price: 260, availability: true },
  { id: 30, name: "Bhindi Masala", price: 90, availability: true },
  { id: 31, name: "Rasgulla", price: 60, availability: true },
  { id: 32, name: "Prawn Curry", price: 300, availability: true },
  { id: 33, name: "Baingan Bharta", price: 180, availability: true },
  { id: 34, name: "Mango Pickle", price: 25, availability: true },
  { id: 35, name: "Lamb Rogan Josh", price: 320, availability: true },
  // Add more unique items as needed
  { id: 36, name: "Chicken Saag", price: 250, availability: true },
  { id: 37, name: "Vegetable Biryani", price: 180, availability: true },
  { id: 38, name: "Kadai Paneer", price: 210, availability: true },
  { id: 39, name: "Prawn Masala", price: 280, availability: true },
  { id: 40, name: "Cabbage Sabzi", price: 90, availability: true },
  { id: 41, name: "Mango Rice", price: 150, availability: true },
  { id: 42, name: "Chicken 65", price: 220, availability: true },
  { id: 43, name: "Methi Thepla", price: 30, availability: true },
  { id: 44, name: "Shahi Tukda", price: 80, availability: true },
  { id: 45, name: "Egg Curry", price: 200, availability: true },
  { id: 46, name: "Chicken Keema", price: 240, availability: true },
  { id: 47, name: "Spinach Pakora", price: 40, availability: true },
  { id: 48, name: "Vegetable Pulao", price: 130, availability: true },
  { id: 49, name: "Mango Smoothie", price: 70, availability: true },
  { id: 50, name: "Chicken Malai Tikka", price: 230, availability: true },
];

const showOrder = [];
const App = express();
const port = 4000;

App.use(cors());
App.use(bodyParser.json());

App.get("/menu", (req, res) => 
  {
    res.json(menuItems);
  });

App.get("/order", (req, res) => 
  {
    res.json(showOrder);
  });

App.post("/orders", (req, res) => 
  {
    const order = req.body;
    showOrder.push(order);
  });
App.post("/available", (req, res) => 
  {
    const changeId = req.body.id;
    menuItems.forEach((item) => {
      if (item.id == changeId) 
      {
        item.availability = !item.availability;
      }
    });
  });

App.post("/add", (req, res) => 
  {
    const getId = menuItems.length + 1;
    const newItem = {
      id: getId,
      name: req.body.orderName,
      price: req.body.orderPrice,
      availability: true,
    };
    menuItems.push(newItem);
  });

App.put("/edit", (req, res) => 
  {
    const change = req.body[0];
    const id = req.body[1];
    const feild = req.body[2];
    menuItems.forEach((item) => 
    {
      if (item.id == id) 
      {
        item[feild] = change * 10;
      }
    });
  });

App.post("/delete", (req, res) => 
  {
    const deleteIndex = req.body.orderIndex;
    showOrder.splice(deleteIndex, 1);
  });


App.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});
