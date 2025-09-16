
import React from "react";

export default function Modal({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ background: "white", padding: "2rem", borderRadius: "10px" }}>
        {children}
        <button onClick={onClose} style={{ marginTop: "1rem" }}>
          Close
        </button>
      </div>
    </div>
  );
}
