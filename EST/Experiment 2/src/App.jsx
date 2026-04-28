import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    fetch("http://localhost:8080/api/hello")
      .then((res) => res.text())
      .then((data) => {
        console.log("Response:", data);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }, []);

  return <h2>Check console for API response</h2>;
}