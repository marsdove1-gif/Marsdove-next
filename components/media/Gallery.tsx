"use client";

import { useState } from "react";

import Image from "./Image";
import Thumbnail from "./Thumbnail";

type GalleryProps = {
  images: {
    src: string;
    alt: string;
  }[];
};

export default function Gallery({
  images,
}: GalleryProps) {
  const [current, setCurrent] = useState(0);

  if (!images.length) return null;

  return (
    <div className="space-y-4">
      <Image
        src={images[current].src}
        alt={images[current].alt}
        width={800}
        height={800}
        className="aspect-square w-full rounded-xl object-cover"
      />

      <div className="flex gap-2 overflow-auto">
        {images.map((image, index) => (
          <Thumbnail
            key={index}
            {...image}
            active={index === current}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}