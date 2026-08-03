import Image from "./Image";

import { cn } from "@/lib/utils";

type AvatarProps = {
  src: string;
  alt: string;
  size?: number;
  className?: string;
};

export default function Avatar({
  src,
  alt,
  size = 40,
  className,
}: AvatarProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={cn(
        "rounded-full object-cover",
        className
      )}
    />
  );
}