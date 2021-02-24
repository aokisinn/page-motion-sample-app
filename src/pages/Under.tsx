import React from "react";
import UnderMotion from "../components/motion/UnderMotion";
import NavBar from "../components/NavBar";

const Under = () => {
  return (
    <div>
      <NavBar />
      <UnderMotion>
        <div
          style={{
            width: "100%",
            height: 800,
            background: "antiquewhite",
            textAlign: "center"
          }}
        >
          下
        </div>
      </UnderMotion>
    </div>
  );
};

export default Under;
