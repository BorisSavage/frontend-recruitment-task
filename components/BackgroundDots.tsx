"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function BackgroundDots() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className="absolute left-0 top-0 h-full w-full"
      style={{
        backgroundImage: `${
          theme === "dark"
            ? "radial-gradient(rgba(30,41,59,0.2)"
            : "radial-gradient(rgba(226,232,240,0.2)"
        } 2px, transparent 2px`,
        backgroundPosition: "0% 0%",
        backgroundSize: "6px 6px",
      }}
    />
  );
}
