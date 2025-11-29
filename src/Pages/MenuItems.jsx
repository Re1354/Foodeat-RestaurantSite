import React from "react";
import Image1 from "../assets/coffee2.png";
import Image2 from "../assets/Chicken.png";
import Image3 from "../assets/Potato.png";
import Image4 from "../assets/3.png";
import Image5 from "../assets/vegetables.png";
import Image6 from "../assets/steak.png";
import { Link } from "react-router-dom";

const FoodData = [
  {
    image: Image1,
    rating: "⭐⭐⭐⭐⭐",
    price: "$10.99",
    name: "Spicy Chicken Burger",
    desc: "Juicy grilled chicken topped with spicy sauce and fresh veggies.",
  },
  {
    image: Image2,
    rating: "⭐⭐⭐⭐⭐",
    price: "$12.49",
    name: "Creamy Alfredo Pasta",
    desc: "Classic fettuccine pasta tossed in a creamy garlic Alfredo sauce.",
  },
  {
    image: Image3,
    rating: "⭐⭐⭐⭐",
    price: "$9.99",
    name: "Veggie Delight Pizza",
    desc: "Crispy crust loaded with fresh vegetables and melted cheese.",
  },
  {
    image: Image4,
    rating: "⭐⭐⭐⭐⭐",
    price: "$6.99",
    name: "Cheesy Garlic Bread",
    desc: "Toasted bread slices smothered with garlic butter and melted cheese.",
  },
  {
    image: Image5,
    rating: "⭐⭐⭐⭐",
    price: "$8.49",
    name: "BBQ Beef Wrap",
    desc: "Tender beef strips, tangy BBQ sauce, and veggies in a warm wrap.",
  },
  {
    image: Image6,
    rating: "⭐⭐⭐⭐⭐",
    price: "$14.99",
    name: "Grilled Salmon Plate",
    desc: "Fresh salmon grilled to perfection with sides of rice and salad.",
  },
  {
    image: Image1,
    rating: "⭐⭐⭐⭐",
    price: "$7.99",
    name: "Crispy French Fries",
    desc: "Golden fried potato sticks seasoned with herbs and spices.",
  },
  {
    image: Image2,
    rating: "⭐⭐⭐⭐⭐",
    price: "$11.49",
    name: "Chicken Caesar Salad",
    desc: "Grilled chicken, romaine lettuce, parmesan, and Caesar dressing.",
  },
  {
    image: Image3,
    rating: "⭐⭐⭐⭐⭐",
    price: "$13.99",
    name: "Tandoori Chicken Plate",
    desc: "Spiced and grilled chicken served with rice and chutney.",
  },
];

const MenuItems = () => {
  return (
    <div className="container py-10">
      {/* header section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold mb-2">Menu List</h1>
        <Link to="/" className="primary-btn hover:scale-105 duration-200">
          Back To Home
        </Link>
      </div>
      {/* card section */}
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-8">
        {FoodData.map((item, index)=> (
          <div
            key={index}
            className="bg-white/50 p-5 lg:p-6 rounded-3xl hover:scale-110 transition duration-300 "
          >
            <img
              src={item.image}
              alt=""
              className="w-60 sm:w-40  lg:w-[240px] mx-auto object-cover rounded-full img-shadow"
            />
            <div className="space-y-2">
              <p className="text-red-500">{item.rating}</p>
              <p className="text-lg font-semibold ">{item.name}</p>
              <p>{item.desc}</p>
              <p className="text-lg font-semibold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
