import React from "react";
import { color, motion, spring } from "framer-motion";

function Logo() {
  return (
    <motion.div
      initial={{
        y: "-100px",
      }}
      animate={{
        y: 0,
      }}
      transition={{
        delay: 1.3,
        type: "spring",
        stiffness: 110,
      }}
      className="text-white ml-[-300px]"
    >
      <div className="mt-10 text-3xl tracking-widest uppercase">
        Fashion Bus
      </div>
      <div className="text-sm tracking-widest text-gray-400 uppercase">
        Best in the market right now
      </div>
    </motion.div>
  );
}

export default Logo;
