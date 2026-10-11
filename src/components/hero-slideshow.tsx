"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export interface HeroSlideshowImage {
  src: string;
  alt: string;
}

const SLIDE_DURATION_MS = 3000;
const FADE_DURATION_MS = 900;

/**
 * Full-bleed background slideshow. All images are rendered (and therefore
 * preloaded) from the start and simply cross-fade via opacity — this avoids
 * the blank-frame/flicker that mount-unmount carousels can produce.
 */
export function HeroSlideshow({ images }: { images: HeroSlideshowImage[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className="absolute inset-0">
      {images.map((image, i) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover transition-opacity ease-in-out"
          style={{
            transitionDuration: `${FADE_DURATION_MS}ms`,
            opacity: i === activeIndex ? 1 : 0,
          }}
        />
      ))}
    </div>
  );
}
