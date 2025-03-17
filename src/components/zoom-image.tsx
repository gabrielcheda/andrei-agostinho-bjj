"use client";

import Image from "next/image";
import { useState } from "react";

export default function ZoomImage({ src, alt }: { src: string; alt: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFullscreen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Imagem clicável */}
      <Image
        src={src}
        alt={alt}
        width={400}
        height={400}
        className="cursor-pointer w-full object-cover"
        onClick={toggleFullscreen}
      />

      {/* Modal de Fullscreen */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={toggleFullscreen}
        >
          <Image
            src={src}
            alt={alt}
            width={900}
            height={900}
            className="w-auto max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
}
