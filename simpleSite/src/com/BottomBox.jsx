import React from "react";
import { animate, color, motion, spring } from "framer-motion";

const BoxVariants = {
  initial: {
    y: 100,
  },
  animate: {
    y: 0,
  },
};

function BottomBox(props) {
  return (
    <motion.div
      variants={BoxVariants}
      className="flex items-center justify-center text-base text-center text-gray-200 uppercase bg-gray-500 rounded-t-md"
    >
      {props.children}
    </motion.div>
  );
}

export default BottomBox;
