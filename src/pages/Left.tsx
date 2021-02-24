import React from "react";
import LeftMotion from "../components/motion/LeftMotion";
import NavBar from "../components/NavBar";

const Left = () => {
  return (
    <div>
      <NavBar />
      <LeftMotion>
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
      </LeftMotion>
    </div>
  );
};

export default Left;
