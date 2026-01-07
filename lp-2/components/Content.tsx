"use client"

import { easeInOut, motion } from "motion/react";

const Content = () => {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center
      bg-neutral-900 perspective-distant transform-3d
      bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)]
      bg-size-[3rem_3rem]"
    >
      <motion.button
        whileHover={{
          rotateX: 20,
          rotateY: 20,
          boxShadow: "0px 20px 50px rbga(8,112,184,0.7)",
        }}
        style={{
          translateZ: 100,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="group relative cursor-pointer text-neutral-50 text-3xl px-12 py-8 rounded-lg bg-black
        shadow-[inset_0_1px_2px_rgba(255,255,255,0.18),inset_0_-1px_2px_rgba(255,255,255,0.12)]"
      >
        <span
          className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto
          h-px w-3/4
          bg-gradient-to-r from-transparent via-sky-500 to-transparent"
        />
        <span
          className="absolute inset-x-0 bottom-0 mx-auto
          h-[4px] w-full mx-auto blur-lg
          opacity-0 group-hover:opacity-100
          bg-gradient-to-r from-transparent via-sky-500 to-transparent
          group-hover:bg-sky-500 group-hover:opacity-100"
        />
        subscribe
      </motion.button>
    </div>
  );
};

export default Content;

