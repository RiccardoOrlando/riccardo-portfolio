// ========================================
// src/components/Header.jsx
// ========================================
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
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
    <header className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-black hover:text-red-600 transition-colors duration-300"
        >
          Riccardo
        </Link>

        <nav>
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className="text-black font-medium transition-colors duration-300 group-hover:text-red-600"
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
