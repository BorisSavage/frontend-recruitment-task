"use client";

import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { Button } from "@nextui-org/button";
import { usePathname } from "next/navigation";

function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function BreadcrumbNav() {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  if (pathNames.length === 0) return null;
  return (
    <div className="relative px-4">
      <Breadcrumbs>
        <BreadcrumbItem href="/" key="home">
          Home
        </BreadcrumbItem>
        {pathNames.map((pathName, index) => {
          const path = `/${pathNames.slice(0, index + 1).join("/")}`;
          return (
            <BreadcrumbItem href={path} key={pathName}>
              {capitalizeFirstLetter(pathName)}
            </BreadcrumbItem>
          );
        })}
      </Breadcrumbs>
    </div>
  );
}
