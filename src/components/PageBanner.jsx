// ========================================
// src/components/PageBanner.jsx
// ========================================
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const PageBanner = ({ title, subtitle, imageUrl, path }) => {
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.to(contentRef.current, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    });

    gsap.to(imageRef.current, {
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      delay: 0.2,
    });
  }, []);

  return (
    <div className="w-full flex overflow-hidden mt-24 h-[250px]">
      {/* Colonna sinistra: testo */}
      <div
        ref={contentRef}
        className="flex-1 flex flex-col justify-center px-8 md:px-12 bg-white opacity-0"
        style={{ transform: "translateX(-50px)" }}
      >
        {/* Riga titolo + percorso */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-[30px] h-[3px] bg-red-600"></div>
          <span className="text-gray-500 text-sm">{path}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-black mb-1">
          {title}
        </h1>

        {subtitle && (
          <p className="text-base md:text-lg text-gray-700 max-w-3xl">
            {subtitle}
          </p>
        )}
      </div>

      {/* Colonna destra: immagine */}
      <div
        ref={imageRef}
        className="flex-1 relative opacity-0"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay leggero per contrasto */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
    </div>
  );
};

export default PageBanner;
