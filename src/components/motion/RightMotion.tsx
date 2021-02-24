import React from "react";
import { motion } from "framer-motion";

const RightMotion: React.FC<{
  children: JSX.Element;
}> = ({ children }) => {
  return (
    <motion.div
      animate={{
        x: 0,
        opacity: 1
      }}
      initial={{
        x: 500,
        opacity: 0
      }}
      exit={{
        x: 0,
        opacity: 0
      }}
      transition={{
        duration: 0.3
      }}
    >
      {children}
    </motion.div>
  );
};

export default RightMotion;
