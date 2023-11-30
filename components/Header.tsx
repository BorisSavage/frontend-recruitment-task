"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import ThemeSwitcher from "./ThemeSwitcher";
import { Logo } from "./Logo";

// Constants for routes
const HOME_ROUTE = "/";
const ABOUT_ROUTE = "/about";
const MOVIES_ROUTE = "/movies";

export function Header() {
  return (
    <header
      className={cn(
        "absolute top-0 z-50 flex w-full max-w-[1000px] items-center justify-between px-1 py-1 text-sm",
        "sm:justify-between sm:px-1 sm:text-base",
        "after:absolute after:bottom-0 after:block after:h-[1px] after:w-full after:bg-gradient-to-l after:from-transparent after:from-35% after:to-slate-900 after:opacity-20 after:transition after:duration-500 after:content-['']",
        "after:hover:opacity-80",
        "dark:after:to-slate-100"
      )}
    >
      <div className="flex h-10 items-center justify-start text-sm">
        <Link
          className="flex items-center justify-start pr-3 font-bold text-slate-900 transition duration-500 dark:text-slate-100 sm:pl-2 sm:pr-5"
          href="/"
        >
          <Logo />
          ACME
        </Link>
        <div className="absolute -bottom-10 right-0 sm:static">
          <ThemeSwitcher />
        </div>
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href={HOME_ROUTE} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={ABOUT_ROUTE} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={MOVIES_ROUTE} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Movies
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
