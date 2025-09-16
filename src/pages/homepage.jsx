import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/slices/cartSlices";


const HomePage = () => {
  const dispatch = useDispatch();

  const products = [
    { id: 1, name: "Laptop", price: 999, img: "src/assests/laptop.png" },
    { id: 2, name: "Headphones", price: 199, img: "src/assests/headphone.jpg" },
    { id: 3, name: "Phone", price: 699, img: "src/assests/phone.jpg" },
    { id: 4, name: "Tablet", price: 499, img: "src/assests/tablet.jpg" },
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