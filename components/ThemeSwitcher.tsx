"use client";

import { MoonIcon } from "@heroicons/react/24/solid";
import { SunIcon } from "@heroicons/react/24/solid";
import { Switch } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Switch
      defaultSelected={theme === "dark"}
      // size="lg"
      color="success"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      <span className="hidden sm:inline">
        {theme === "light" ? "Dark" : "Light"} mode
      </span>
    </Switch>
  );
}
