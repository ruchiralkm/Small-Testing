import React from "react";
import { animate, color, motion, spring, stagger } from "framer-motion";
import BottomBox from "./BottomBox";

const container = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 2,
      staggerChildren: 0.4,
    },
  },
};

function Bottom() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={container}
      className="grid grid-cols-3 gap-4 absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-screen-lg mx-auto z-30 h-[10vh]"
    >
      <BottomBox>Best deal</BottomBox>
      <BottomBox>Offers</BottomBox>
      <BottomBox>Special Discount</BottomBox>
    </motion.div>
  );
}

export default Bottom;
