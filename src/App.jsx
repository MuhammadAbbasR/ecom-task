import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from "./pages/homepage";
import CartPage from "./pages/cartpage";
import ProfilePage from "./pages/profilepage";

function App() {
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.qty, 0)
  );

  return (
    <Router>
      <nav className="navbar">
        <h1>MyShop</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cart">Cart ({cartCount})</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
