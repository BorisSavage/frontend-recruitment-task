"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image, { StaticImageData } from "next/image";
import { useTheme } from "next-themes";
import { cn } from "@nextui-org/react";

type Props = {
  image: StaticImageData;
  alt: string;
};
export default function PictureCard({ image, alt }: Props) {
  const { theme } = useTheme();
  return (
    <div className="grow">
      <AspectRatio className="overflow-hidden rounded-3xl" ratio={9 / 16}>
        <Image
          className={cn(
            "object-cover transition duration-500",
            "hover:scale-105 hover:contrast-[1.05] hover:saturate-[1.05]",
            "dark:brightness-75"
          )}
          fill
          quality={100}
          placeholder="blur"
          sizes="(min-width: 450px) 330px, 100svw"
          src={image}
          alt={alt}
        />
      </AspectRatio>
    </div>
  );
}
