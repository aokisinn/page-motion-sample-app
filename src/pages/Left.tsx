import React from "react";
import NavBar from "../components/NavBar";

const Left = () => {
  return (
    <div>
      <NavBar />
      <div
        style={{
          width: "100%",
          height: 800,
          background: "chocolate",
          textAlign: "center"
        }}
      >
        左
      </div>
    </div>
  );
};

export default Left;
