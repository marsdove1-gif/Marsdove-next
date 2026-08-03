import Image from "./Image";

import { cn } from "@/lib/utils";

type ThumbnailProps = {
  src: string;
  alt: string;
  active?: boolean;
  onClick?: () => void;
};

export default function Thumbnail({
  src,
  alt,
  active,
  onClick,
}: ThumbnailProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "overflow-hidden rounded-md border",
        active && "ring-2 ring-primary"
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={80}
        height={80}
        className="aspect-square object-cover"
      />
    </button>
  );
}