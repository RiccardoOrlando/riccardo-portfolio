import React from 'react';
// Importa le icone che desideri (es. da lucide-react, se le stai usando)
import { Facebook, Instagram, Linkedin, Mail, MapPin } from 'lucide-react'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Dati di navigazione fittizi
  const links = [
    { title: 'Azienda', items: ['Chi Siamo', 'Carriere', 'Stampa'] },
    { title: 'Supporto', items: ['FAQ', 'Contatti', 'Assistenza'] },
    { title: 'Legale', items: ['Termini di Servizio', 'Privacy Policy', 'Cookies'] },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-red-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 border-b border-gray-700 pb-12">
          
          {/* Colonna 1: Logo e Descrizione */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold text-red-600 mb-4">
              Racing Project
            </h3>
            <p className="text-gray-400 text-sm max-w-sm">
              Il tuo partner per il motorsport. Dall'esperienza in Kart fino alla Formula 4. Passione, precisione e velocità.
            </p>
          </div>
          
          {/* Colonne 2, 3, 4: Link di Navigazione */}
          {links.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-lg font-semibold text-white uppercase">{section.title}</h4>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <a 
                      href={`#${item.toLowerCase().replace(/\s/g, '-')}`} // Link placeholder
                      className="text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Sezione Contatti e Social */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          {/* Contatti */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm">
            <div className="flex items-center space-x-2 text-gray-400">
              <Mail className="w-5 h-5 text-red-600" />
              <span>info@racingproject.it</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin className="w-5 h-5 text-red-600" />
              <span>Palermo, Sicilia, Italia</span>
            </div>
          </div>
          
          {/* Social Icons */}
          <div className="flex space-x-5">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-red-500 transition-colors" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="w-6 h-6 text-gray-400 hover:text-red-500 transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-red-500 transition-colors" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-500 text-xs">
            &copy; {currentYear} Racing Project. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;