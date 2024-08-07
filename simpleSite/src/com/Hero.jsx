import React from "react";
import { animate, color, delay, motion, spring, stagger } from "framer-motion";

const containerVarient = {
  animate: {
    transition: {
      delayChildren: 2,
      staggerChildren: 0.6,
    },
  },
};

const imgVariants = {
  initial: {
    opacity: 0,
    x: -100,
    y: 100,
    rotateZ: 20,
  },
  animate: () => ({
    opacity: 1,
    x: 0,
    y: 0,
    //rotateZ: custom === 0 ? -20 : custom === 1 ? 0 : 20,
  }),
};

function Hero() {
  return (
    <div className="grid w-full max-w-screen-lg grid-cols-3 mx-auto">
      <div className="z-10 text-left col-span-2 flex gap-3 relative flex-col pt-[20vh] ">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.8,
          }}
          className="w-full"
        >
          <h1 className="text-5xl tracking-widest text-transparent uppercase bg-purple-100 bg-clip-text bg-gradient-to-r from-blue-100 to-purple-100">
            Checkout our
          </h1>
          <h1 className="tracking-widest text-transparent bg-purple-100 text-7xl bg-clip-text bg-gradient-to-r from-blue-100 to-purple-100">
            New Collection
          </h1>
          <p className="py-2 text-base tracking-wider text-gray-400 uppercase">
            New deals for this X-Mas
          </p>
          <button className="py-2 border text-white border-white w-[20vw] px-4 text-md tracking-widest uppercase mt-3">
            See more
          </button>
        </motion.div>
      </div>

      <motion.div
        variants={containerVarient}
        initial="initial"
        animate="animate"
        className="relative z-40"
      >
        <motion.img
          variants={imgVariants}
          custom={0}
          src="https://raw.githubusercontent.com/techiskole/hero-animation-1/main/public/hero-girl1.jpg"
          alt=""
          className="h-[70vh] w-full -left-[10vw] -rotate-12 absolute object-cover z-10"
        />
        <motion.img
          variants={imgVariants}
          custom={1}
          src="https://raw.githubusercontent.com/techiskole/hero-animation-1/main/public/hero-girl2.jpg"
          alt=""
          className="h-[70vh] w-full absolute object-cover z-10"
        />
        <motion.img
          variants={imgVariants}
          custom={2}
          src="https://raw.githubusercontent.com/techiskole/hero-animation-1/main/public/hero-girl3.jpg"
          alt=""
          className="h-[70vh] left-[10vw] rotate-12 w-full absolute object-cover z-10"
        />
      </motion.div>
    </div>
  );
}

export default Hero;
