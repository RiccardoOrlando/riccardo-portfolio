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
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
          
          {/* BRAND/LOGO: Ora va a capo su mobile per non spordare */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-block no-underline group">
              <h3 className="text-3xl sm:text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white flex flex-col sm:flex-row sm:items-center border-l-4 border-red-600 pl-4 md:pl-5 group-hover:pl-7 transition-all duration-300 leading-[0.85] sm:leading-none">
                RICCARDO 
                <span className="text-red-600 sm:ml-2 mt-2 sm:mt-0">ORLANDO</span>
              </h3>
            </Link>
            
            <div className="space-y-4 pl-1">
              <div className="flex items-center gap-2">
                <Trophy size={16} className="text-red-600" />
                <span className="text-zinc-500 font-bold text-[11px] uppercase tracking-[0.3em]">Formula 4 Driver</span>
              </div>
              <p className="text-zinc-400 text-[15px] max-w-sm italic leading-relaxed">
                Dalla pista al digitale: vivi l'emozione della velocità e segui ogni curva della mia carriera nel motorsport professionistico.
              </p>
            </div>
          </div>
          
          {/* NAVIGAZIONE E INFO */}
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 lg:col-span-2">
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600 flex items-center gap-2">
                <span className="w-4 h-[1px] bg-red-600"></span> MENU
              </h4>
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name}
                    to={link.path}
                    className="group flex items-center text-zinc-400 hover:text-white text-[13px] font-bold uppercase italic no-underline transition-all duration-200"
                  >
                    <ChevronRight size={14} className="text-red-600 mr-1" />
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 flex items-center gap-2">
                <span className="w-4 h-[1px] bg-zinc-700"></span> INFO
              </h4>
              <nav className="flex flex-col gap-3">
                {infoLinks.map((link) => (
                  <Link 
                    key={link.name}
                    to={link.path}
                    className="group flex items-center text-zinc-400 hover:text-white text-[13px] font-bold uppercase italic no-underline transition-all duration-200"
                  >
                    <ChevronRight size={14} className="text-red-600 mr-1" />
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* CONTATTI BOXES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-10 border-t border-zinc-900">
          <div className="flex items-center gap-4 bg-zinc-900/40 p-5 border border-zinc-900/50 rounded-xl group hover:border-red-600/30 transition-all">
            <div className="p-3 bg-zinc-900 rounded-lg group-hover:bg-red-600 transition-colors">
               <Mail size={20} className="text-red-600 group-hover:text-white" />
            </div>
            <div className="overflow-hidden text-left">
              <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest m-0 leading-none">Email</p>
              <p className="text-[14px] font-bold text-white m-0 italic mt-1 break-all">info@riccardoorlando.it</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-zinc-900/40 p-5 border border-zinc-900/50 rounded-xl group hover:border-red-600/30 transition-all">
            <div className="p-3 bg-zinc-900 rounded-lg group-hover:bg-red-600 transition-colors">
               <MapPin size={20} className="text-red-600 group-hover:text-white" />
            </div>
            <div className="text-left">
              <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest m-0 leading-none">Base</p>
              <p className="text-[14px] font-bold text-white m-0 italic uppercase mt-1">Italy / International</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-10 bg-zinc-900/20 p-5 border border-zinc-900/50 rounded-xl sm:col-span-2 lg:col-span-1">
              <a href="#" className="text-zinc-400 hover:text-red-600 transform hover:scale-125 transition-all">
                <Instagram size={24}/>
              </a>
              <div className="w-[1px] h-6 bg-zinc-800"></div>
              <a href="#" className="text-zinc-400 hover:text-red-600 transform hover:scale-125 transition-all">
                <Linkedin size={24}/>
              </a>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-zinc-900">
          <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.3em] italic text-center md:text-left">
            &copy; {currentYear} RICCARDO ORLANDO <span className="hidden md:inline mx-2">|</span> All Rights Reserved
          </p>
          
          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest">
            <Link to="/privacy" className="text-zinc-500 hover:text-white no-underline transition-colors">Privacy</Link>
            <Link to="/cookies" className="text-zinc-500 hover:text-white no-underline transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;