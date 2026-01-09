import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  // Configurazione Cloudinary per il logo
  const cloudName = "ddbmmjpal"; 
  const logoPublicId = "logo_ro_racing"; // Il percorso che hai creato

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
    // Sfondo nero, bordo grigio scuro e testo bianco per coerenza col sito
    <header className="fixed top-0 left-0 w-full border-b border-zinc-800 z-50 mb-24">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO CLICCABILE INGRANDITO */}
        <Link to="/" className="transition-transform duration-300 hover:scale-105">
          <img 
            src={`https://res.cloudinary.com/${cloudName}/image/upload/w_300,f_auto,q_auto/${logoPublicId}`} 
            alt="Logo Riccardo Orlando" 
            className="h-16 w-auto object-contain"
          />
        </Link>

        <nav>
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className="font-medium transition-colors duration-300 group-hover:text-red-600 uppercase text-xs tracking-widest"
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