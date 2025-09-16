import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/slices/cartSlices";
import laptop from "src/assests/laptop.png" 
import headphone from "src/assests/headphone.jpg" 
import phone from"src/assests/phone.jpg"
import tablet from "src/assests/tablet.jpg" 

const HomePage = () => {
  const dispatch = useDispatch();

  const products = [
    { id: 1, name: "Laptop", price: 999, img: laptop },
    { id: 2, name: "Headphones", price: 199, img: headphone},
    { id: 3, name: "Phone", price: 699, img: phone},
    { id: 4, name: "Tablet", price: 499, img: tablet },
  ];

  return (
    <div className="container">
      <h2>Products</h2>
      <div className="product-grid">
        {products.map((p) => (
          <div className="card" key={p.id}>
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p>${p.price}</p>
            <button onClick={() => dispatch(addToCart(p))}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;