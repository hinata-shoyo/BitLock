import React, { useState, useEffect } from "react";

const Alert = ({ message }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div
      className="alert"
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        backgroundColor: "#f44336", // Red color
        color: "#fff", // White text
        padding: "10px 20px", // Padding
        borderRadius: "5px", // Rounded corners
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)", // Box shadow
        zIndex: 9999, // Ensure it's on top of other elements
        width: "300px", // Width
        display: isVisible ? "block" : "none",
      }}
    >
      {message}
    </div>
  );
};

export default Alert;
