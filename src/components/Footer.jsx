import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, MapPin, Trophy, ChevronRight } from 'lucide-react'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Storia', path: '/storia' },
    { name: 'Carriera', path: '/carriera' },
    { name: 'Galleria', path: '/galleria' },
  ];

  const infoLinks = [
    { name: 'Profilo', path: '/profilo' },
    { name: 'Sponsor', path: '/sponsor' },
    { name: 'Contatti', path: '/contatti' },
  ];

  return (
    <footer className="w-full bg-zinc-950 text-white pt-12 md:pt-20 pb-8 border-t border-zinc-900 relative overflow-hidden">
      {/* Elemento decorativo in background (opzionale - simula una scia) */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* TOP SECTION: GRID RESPONSIVA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* BRAND/LOGO: Occupa 2 colonne su desktop e tablet largo */}
          <div className="sm:col-span-2 space-y-6">
            <Link to="/" className="inline-block no-underline group">
              <h3 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white flex items-center border-l-4 border-red-600 pl-4 md:pl-5 group-hover:pl-7 transition-all duration-300">
                RICCARDO <span className="text-red-600 ml-2">ORLANDO</span>
              </h3>
            </Link>
            
            <div className="space-y-4 pl-1">
              <div className="flex items-center gap-2">
                <Trophy size={14} className="text-red-600" />
                <span className="text-zinc-500 font-bold text-[10px] uppercase tracking-[0.3em]">Formula 4 Driver</span>
              </div>
              <p className="text-zinc-400 text-sm max-w-sm italic leading-relaxed">
                Dalla pista al digitale: vivi l'emozione della velocità e segui ogni curva della mia carriera nel motorsport professionistico.
              </p>
            </div>
          </div>
          
          {/* NAVIGAZIONE: Diventa 1 colonna su mobile, ma affiancata su tablet */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-red-600"></span> MENU
            </h4>
            <nav className="grid grid-cols-1 gap-3">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path}
                  className="group flex items-center text-zinc-400 hover:text-white text-sm font-bold uppercase italic no-underline transition-all duration-200"
                >
                  <ChevronRight size={14} className="text-red-600 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 mr-2" />
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* MEDIA: Diventa 1 colonna su mobile, ma affiancata su tablet */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-zinc-700"></span> INFO
            </h4>
            <nav className="grid grid-cols-1 gap-3">
              {infoLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path}
                  className="group flex items-center text-zinc-400 hover:text-white text-sm font-bold uppercase italic no-underline transition-all duration-200"
                >
                  <ChevronRight size={14} className="text-red-600 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 mr-2" />
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* CONTATTI BOXES: Grid adattiva 1 -> 2 -> 3 colonne */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 py-10 border-t border-zinc-900">
          
          {/* Email Box */}
          <div className="flex items-center gap-4 bg-zinc-900/30 p-5 border border-zinc-900 group hover:border-zinc-700 transition-colors">
            <div className="p-3 bg-zinc-900 rounded-lg group-hover:bg-red-600 group-hover:text-white transition-all">
               <Mail size={20} className="text-red-600 group-hover:text-white" />
            </div>
            <div>
              <p className="text-[9px] text-zinc-500 font-black uppercase tracking-tighter m-0">Email</p>
              <p className="text-sm font-bold text-white m-0 tracking-tight italic">info@riccardoorlando.it</p>
            </div>
          </div>

          {/* Location Box */}
          <div className="flex items-center gap-4 bg-zinc-900/30 p-5 border border-zinc-900 group hover:border-zinc-700 transition-colors">
            <div className="p-3 bg-zinc-900 rounded-lg group-hover:bg-red-600 group-hover:text-white transition-all">
               <MapPin size={20} className="text-red-600 group-hover:text-white" />
            </div>
            <div>
              <p className="text-[9px] text-zinc-500 font-black uppercase tracking-tighter m-0">Base</p>
              <p className="text-sm font-bold text-white m-0 tracking-tight italic">ITALY / INTERNATIONAL</p>
            </div>
          </div>

          {/* Social Box: Occupa 2 colonne su tablet, 1 su desktop */}
          <div className="flex items-center justify-center gap-8 bg-zinc-900/30 p-5 border border-zinc-900 sm:col-span-2 lg:col-span-1">
             <a href="#" className="text-zinc-500 hover:text-red-600 transform hover:scale-110 transition-all duration-300">
               <Instagram size={24}/>
             </a>
             <div className="w-[1px] h-4 bg-zinc-800"></div>
             <a href="#" className="text-zinc-500 hover:text-red-600 transform hover:scale-110 transition-all duration-300">
               <Linkedin size={24}/>
             </a>
          </div>
        </div>

        {/* BOTTOM SECTION: Footer molto pulito */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-zinc-900">
          <p className="text-zinc-600 text-[9px] font-black uppercase tracking-[0.4em] italic text-center md:text-left">
            &copy; {currentYear} RICCARDO ORLANDO <span className="hidden md:inline ml-2 text-zinc-800">|</span> <span className="block md:inline mt-2 md:mt-0">All Rights Reserved</span>
          </p>
          
          <div className="flex gap-8 text-[9px] font-bold uppercase tracking-widest">
            <Link to="/privacy" className="text-zinc-600 hover:text-white no-underline transition-colors">Privacy Policy</Link>
            <Link to="/cookies" className="text-zinc-600 hover:text-white no-underline transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;