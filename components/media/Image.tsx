import NextImage, { type ImageProps } from "next/image";

import { cn } from "@/lib/utils";

export default function Image({
  className,
  alt,
  ...props
}: ImageProps) {
  return (
    <NextImage
      alt={alt}
      className={cn(
        "h-auto max-w-full",
        className
      )}
      {...props}
    />
  );
}