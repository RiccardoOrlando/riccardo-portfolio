import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Controlla lo scroll per cambiare lo sfondo dell'header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-black/80 backdrop-blur-md py-2 border-b border-zinc-800" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO CLICCABILE */}
        <Link to="/" className="transition-transform duration-300 hover:scale-105">
          <img 
            src={`https://res.cloudinary.com/${cloudName}/image/upload/w_300,f_auto,q_auto/${logoPublicId}`} 
            alt="Logo Riccardo Orlando" 
            className={`transition-all duration-300 object-contain ${
              isScrolled ? "h-12" : "h-16"
            }`}
          />
        </Link>

        <nav>
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className="text-white font-medium transition-colors duration-300 group-hover:text-red-600 uppercase text-xs tracking-widest"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}