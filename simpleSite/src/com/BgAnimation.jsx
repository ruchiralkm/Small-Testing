import React from "react";
import { color, easeInOut, motion, spring } from "framer-motion";

function BgAnimation() {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0.5,
          width: 0,
        }}
        animate={{
          opacity: 1,
          width: "100vw",
        }}
        transition={{
          duration: 1.1,
          delay: 0.2,
          ease: easeInOut,
        }}
        className="absolute top-0 left-0 z-0 h-screen bg-gradient-to-b from-gray-200 to-gray-400"
      ></motion.div>

      <motion.div
        initial={{
          width: 0,
        }}
        animate={{
          width: "90vw",
        }}
        transition={{
          duration: 1,
          delay: 0.7,
          ease: "easeInOut",
        }}
        className="bg-gray-800 border-t-2 border-gray-600 h-[20vh] z-20 absolute left-0 bottom-0"
      ></motion.div>

      <motion.div
        initial={{
          x: "-100vw",
          rotateZ: 20,
        }}
        animate={{
          x: 0,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 0.9,
        }}
        className="bg-gray-800 h-[170vh] w-[60vw] z-10 absolute -left-[10vh] -top-[50vh]"
      ></motion.div>
    </>
  );
}

export default BgAnimation;
