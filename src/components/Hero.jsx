import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../index.css";

export default function Hero() {
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    // Animazioni contenuto e immagine
    gsap.to(contentRef.current, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    });

    gsap.to(imageRef.current, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      delay: 0.3,
    });

    // Firma che scorre in loop
    gsap.to(marqueeRef.current, {
      xPercent: -50,
      duration: 20,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <section
      id="home"
      className="w-full min-h-screen flex justify-center items-center px-4"
    
    >
      <div className="w-full max-w-[90%] h-[95vh] bg-black/70 border border-red-600 shadow-[0_0_50px_#FF0000] rounded-4xl flex flex-col overflow-hidden py-8 px-8" style={{
        backgroundImage: "url('/img/FotoMisano.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        {/* Contenuto + immagine */}
        <div className="flex flex-col md:flex-row flex-1">
          {/* Contenuto */}
          <div
            ref={contentRef}
            className="flex-1 flex flex-col justify-center p-6 opacity-0"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
              Riccardo
            </h1>
            <h1 className="text-5xl md:text-6xl font-bold text-red-600 mb-4">
              Orlando
            </h1>

            <p className="py-3 text-2xl font-bold">FORMULA 4 FIA</p>

            {/* Linea RO15 */}
            <div className="relative my-4">
              <hr className="border-red-600 border-t-2" />
              <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-black px-2 text-red-600 font-bold">
                RO15
              </span>
            </div>

            <p className="text-white/80 mb-6 text-lg md:text-xl">
              Pilota italiano che unisce aggressività e precisione in pista. Non
              aspetto la vittoria. Me la prendo.
            </p>

            <div className="flex gap-5">
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                Contattami
              </button>
              <button className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                Progetti
              </button>
            </div>
          </div>

          {/* Immagine */}
          <div
            ref={imageRef}
            className="flex-1 flex justify-center items-center p-6 opacity-0"
          >
            <img
              src="/img/ImmagineVittoriaMugello.jpg"
              alt="Hero"
              className="w-80 h-80 md:w-96 md:h-96 rounded-full shadow-[0_0_50px_#FF0000] object-cover"
            />
          </div>
        </div>

        {/* Firma marquee */}
        <div className="w-full mt-6 py-4 overflow-hidden">
          <div
            ref={marqueeRef}
            className="flex whitespace-nowrap gap-4"
            style={{ willChange: "transform" }}
          >
            <span className="text-red-600 font-extrabold text-5xl md:text-6xl">
              RICCARDO ORLANDO • RICCARDO ORLANDO • RICCARDO ORLANDO •
            </span>
            <span className="text-red-600 font-extrabold text-5xl md:text-6xl">
              RICCARDO ORLANDO • RICCARDO ORLANDO • RICCARDO ORLANDO •
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
