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
    <footer className="w-full bg-zinc-950 text-white pt-16 pb-8 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* BRAND/LOGO */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="inline-block no-underline">
              <h3 className="text-4xl font-black italic uppercase tracking-tighter text-white flex items-center border-l-4 border-red-600 pl-5">
                RICCARDO <span className="text-red-600 ml-2">ORLANDO</span>
              </h3>
            </Link>
            <div className="flex items-center gap-2 pl-6">
              <Trophy size={14} className="text-red-600" />
              <span className="text-zinc-500 font-bold text-[10px] uppercase tracking-widest">Formula 4 Driver</span>
            </div>
            <p className="text-zinc-400 text-sm max-w-sm italic pl-6 leading-relaxed">
              Dalla pista al digitale: vivi l'emozione della velocità.
            </p>
          </div>
          
          {/* NAVIGAZIONE */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-red-600"></span> MENU
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path}
                  className="group flex items-center text-zinc-300 hover:text-white text-sm font-bold uppercase italic no-underline transition-colors"
                >
                  <ChevronRight size={14} className="text-red-600 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 mr-1" />
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* MEDIA */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-zinc-700"></span> MEDIA
            </h4>
            <nav className="flex flex-col gap-3">
              {infoLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path}
                  className="group flex items-center text-zinc-300 hover:text-white text-sm font-bold uppercase italic no-underline transition-colors"
                >
                  <ChevronRight size={14} className="text-red-600 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 mr-1" />
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* CONTATTI BOXES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10 border-t border-zinc-900">
          <div className="flex items-center gap-4 bg-zinc-900/50 p-4 border border-zinc-900">
            <Mail className="text-red-600" size={20} />
            <div>
              <p className="text-[9px] text-zinc-500 font-black uppercase tracking-tighter m-0">Email</p>
              <p className="text-sm font-bold text-white m-0 tracking-tight italic">info@riccardoorlando.it</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-zinc-900/50 p-4 border border-zinc-900">
            <MapPin className="text-red-600" size={20} />
            <div>
              <p className="text-[9px] text-zinc-500 font-black uppercase tracking-tighter m-0">Base</p>
              <p className="text-sm font-bold text-white m-0 tracking-tight italic">ITALY / CIRCUITS</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 border border-zinc-900 bg-zinc-900/50 p-4">
             <a href="#" className="text-zinc-400 hover:text-white transition-colors"><Instagram size={20}/></a>
             <a href="#" className="text-zinc-400 hover:text-white transition-colors"><Linkedin size={20}/></a>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-zinc-900">
          <p className="text-zinc-600 text-[9px] font-black uppercase tracking-[0.4em] italic">
            &copy; {currentYear} RICCARDO ORLANDO
          </p>
          <div className="flex gap-6 text-[9px] font-bold uppercase tracking-widest">
            <Link to="/privacy" className="text-zinc-600 hover:text-red-600 no-underline">Privacy</Link>
            <Link to="/cookies" className="text-zinc-600 hover:text-red-600 no-underline">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;