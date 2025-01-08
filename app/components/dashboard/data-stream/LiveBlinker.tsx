'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function LiveBlinker() {
  return (
    <div className="w-fit h-fit flex flex-row justify-end items-center gap-[4px]">
      <span className="font-mono text-green text-[16px] font-semibold tracking-[-0.02em]">LIVE</span>
      
    {/* Blinking Dot */}
      <div className="relative w-[18px] h-[18px] flex items-center justify-center">
        <motion.div
          className="rounded-full bg-greenBG"
          initial={{ width: 18, height: 18, opacity: 0, position: "absolute", alignSelf: "center"}}
          animate={{ width: 18, height: 18, opacity: [0, 1, 0], position: "absolute", alignSelf: "center" }}
          transition={{
            ease: "easeOut",
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.8
          }}
          style={{ zIndex: 0 }}
        />
        <div className="w-[8px] h-[8px] rounded-full bg-green" style={{ zIndex: 1 }} />
      </div>
    </div>
  );
}