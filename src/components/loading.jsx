import React from "react";
import loadin from "../assets/loding.gif";
export default function loading() {
  return (
    <div className="text-center mb-4">
      <img
        src={loadin}
        alt="loading"
        style={{
          height: "50px",
          width: "50px",
          backgroundColor: "white",
          color: "white",
        }}
      />
    </div>
  );
}
