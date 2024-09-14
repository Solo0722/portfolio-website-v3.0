import { cn } from '@/lib/utils';
import { useMotionValueEvent, useScroll,AnimatePresence,motion } from 'framer-motion';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navItems } from '@/data';
import { COLORS } from '@/lib/constants';

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={
          "w-full h-20 flex flex-row items-center justify-between px-24 z-50 bg-transparent fixed top:0 transition-all"
        }
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: `${COLORS.BACKGROUND_COLOR}40`
        }}
      >
        <div className="flex flex-row items-center">
          <Image src="/mylogo.svg" width={37} height={37} alt="logo" />
        </div>
        <div className="flex flex-row gap-4">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative inline-block transition-all text-[14px] px-4 py-2"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              {/* add !cursor-pointer */}
              {/* remove hidden sm:block for the mobile responsive */}
              <span className=" text-sm !cursor-pointer">{navItem.name}</span>
            </Link>
          ))}
        </div>

        {/* remove this login btn */}
        <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>Download CV</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default Navbar