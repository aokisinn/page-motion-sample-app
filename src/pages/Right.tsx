import React from "react";
import RightMotion from "../components/motion/RightMotion";
import NavBar from "../components/NavBar";

const Right = () => {
  return (
    <div>
      <NavBar />
      <RightMotion>
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
      </RightMotion>
    </div>
  );
};

export default Right;
