"use client";

import Image from "next/image";
import volcano from "@/public/volcano.webp";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const name = "Michael";

export default function Hero() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const opacity = useTransform(scrollYProgress, [0.5, 0.8], [1, 0]);
  const filter = useTransform(
    scrollYProgress,
    [0.5, 0.8],
    ["blur(0px)", "blur(20px)"]
  );
  return (
    <div
      style={{
        WebkitMask: "linear-gradient(to top, transparent, red 1%)",
        mask: "linear-gradient(to top, transparent, red 1%)",
      }}
      ref={ref}
      className="absolute left-0 right-0 top-0 flex h-[80svh] flex-col items-center justify-start overflow-hidden object-top text-center sm:space-y-8"
    >
      <motion.div className="h-full w-full" style={{ y, opacity, filter }}>
        <Image
          priority
          src={volcano}
          quality={100}
          placeholder="blur"
          className="min-h-[200%] object-cover object-top transition duration-500 dark:brightness-75"
          alt="A hero picture"
        />
      </motion.div>
      <div className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 text-7xl font-bold tracking-widest sm:text-9xl sm:font-bold">
        <span className="select-none text-slate-900 blur-[2px]">{name}</span>
        <h1
          className={cn(
            "absolute left-0 top-0 animate-gradient bg-gradient-to-r from-[#d4ea62] via-[#ed711e] to-[#e9295c] bg-300% bg-clip-text text-transparent",
            "dark:from-teal-400 dark:via-amber-400 dark:to-violet-400"
          )}
        >
          {name}
        </h1>
      </div>
    </div>
  );
}
