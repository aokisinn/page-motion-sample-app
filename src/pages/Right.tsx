import React from "react";
import NavBar from "../components/NavBar";

const Right = () => {
  return (
    <div>
      <NavBar />
      <div
        style={{
          width: "100%",
          height: 800,
          background: "aqua",
          textAlign: "center"
        }}
      >
        右
      </div>
    </div>
  );
};

export default Right;
