import React from "react";

export default function Button({ children, onClick, type = "button" }) {
  return (
    <button
      onClick={onClick}
      type={type}
      style={{
        padding: "0.6rem 1.2rem",
        backgroundColor: "#4f46e5",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}
