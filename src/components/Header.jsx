import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Instagram, Linkedin, X, Menu } from "lucide-react";
import gsap from "gsap";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const overlayRef = useRef(null);
  const linksRef = useRef([]);

  const cloudName = "ddbmmjpal"; 
  const logoPublicId = "logo_ro_racing"; 

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Storia", path: "/storia" },
    { name: "Carriera", path: "/carriera" },
    { name: "Galleria", path: "/galleria" },
    { name: "Profilo", path: "/profilo" },
    { name: "Sponsor", path: "/sponsor" },
    { name: "Contatti", path: "/contatti" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const tl = gsap.timeline();
      tl.to(overlayRef.current, {
        duration: 0.4,
        opacity: 1,
        display: "flex",
        ease: "power2.out",
      });
      tl.fromTo(
        linksRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out" },
        "-=0.2"
      );
    } else {
      document.body.style.overflow = "auto";
      gsap.to(overlayRef.current, {
        duration: 0.3,
        opacity: 0,
        display: "none",
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-md py-3 border-b border-zinc-800" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          <Link to="/" className="transition-transform duration-300 hover:scale-105">
            <img 
              src={`https://res.cloudinary.com/${cloudName}/image/upload/w_300,f_auto,q_auto/${logoPublicId}`} 
              alt="Logo Riccardo Orlando" 
              className={`transition-all duration-300 object-contain ${isScrolled ? "h-10" : "h-14"}`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:block">
            <ul className="flex gap-8">
              {navItems.map((item) => (
                <li key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    className="text-white font-black uppercase text-[11px] tracking-widest transition-colors duration-300 group-hover:text-red-600 italic"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Toggle Button */}
          <button 
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-white p-2 hover:text-red-600 transition-colors"
          >
            <Menu size={30} />
          </button>
        </div>
      </header>

      {/* FULLSCREEN MODAL */}
      <div 
        ref={overlayRef}
        className="fixed inset-0 bg-zinc-950 z-[100] hidden flex-col items-center justify-center opacity-0"
      >
        {/* CLOSE BUTTON DENTRO IL MODAL */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 text-white hover:text-red-600 transition-colors p-2"
        >
          <X size={40} strokeWidth={1.5} />
        </button>

        {/* Links Centrati */}
        <nav>
          <ul className="flex flex-col items-center gap-6">
            {navItems.map((item, index) => (
              <li key={item.name} ref={(el) => (linksRef.current[index] = el)}>
                <Link
                  to={item.path}
                  className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white hover:text-red-600 transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer del Modal */}
        <div className="absolute bottom-12 flex gap-8">
          <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Instagram size={24}/></a>
          <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Linkedin size={24}/></a>
        </div>
      </div>
    </>
  );
}