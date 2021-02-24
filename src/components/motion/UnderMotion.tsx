import React from "react";
import { motion } from "framer-motion";

const UnderMotion: React.FC<{
  children: JSX.Element;
}> = ({ children }) => {
  return (
    <motion.div
      animate={{
        y: 0,
        opacity: 1
      }}
      initial={{
        y: 500,
        opacity: 0
      }}
      exit={{
        y: 0,
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

export default UnderMotion;
