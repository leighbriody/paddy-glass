"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

export function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  if (images.length === 1) {
    return (
      <div className="relative aspect-square w-full overflow-hidden rounded-lg border bg-muted">
        <Image
          src={images[0]}
          alt={alt}
          fill
          className="object-cover"
          priority
        />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg border bg-muted">
        <Image
          src={images[selectedImage]}
          alt={`${alt} - View ${selectedImage + 1}`}
          fill
          className="object-cover"
          priority={selectedImage === 0}
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={cn(
              "relative aspect-square overflow-hidden rounded-md border-2 transition-all",
              selectedImage === index
                ? "border-primary"
                : "border-transparent opacity-60 hover:opacity-100"
            )}
          >
            <Image
              src={image}
              alt={`${alt} - Thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
