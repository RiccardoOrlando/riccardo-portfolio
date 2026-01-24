import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Send, CheckCircle, Instagram, Linkedin, MapPin, AlertCircle } from 'lucide-react';
import Header from '../components/Header';
import PageBanner from '../components/PageBanner';

const Contatti = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const SERVICE_ID = "service_8hp9z0o";
  const TEMPLATE_ID = "template_1qdwvd2";
  const PUBLIC_KEY = "KT9rnG0LRS90JTw-Y";

  const sendEmail = (e) => {
    e.preventDefault();
    setError("");
    
    const formData = new FormData(form.current);
    const name = formData.get('from_name');
    const email = formData.get('from_email');
    const message = formData.get('message');

    if (!name || name.trim().length < 2) {
      setError("Per favore, inserisci un nome valido.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("L'indirizzo email non sembra corretto.");
      return;
    }

    if (!message || message.trim().length < 10) {
      setError("Il messaggio è troppo breve (minimo 10 caratteri).");
      return;
    }

    setIsSending(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setIsSending(false);
        setIsSuccess(true);
        form.current.reset();
      }, (err) => {
        setIsSending(false);
        setError("Errore server. Riprova più tardi.");
      });
  };

  return (
    <div className="w-full overflow-x-hidden bg-black text-white">
      {/* HEADER FIX */}
      <div className="fixed top-0 left-0 w-full z-[999]">
        <Header />
      </div>

      <PageBanner 
        title="Contatti"
        subtitle="Mettiti in contatto con me"
        imageUrl="/img/fotoimolaalepapa.webp"
        path="Home / Contatti"
      />

      <div className="relative min-h-screen py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* HEADER PAGINA - Font Responsivo */}
          <div className="mb-12 md:mb-16 text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">
              Get in <span className="text-red-600">Touch</span>
            </h1>
            <div className="h-1.5 w-20 bg-red-600 mt-4 mx-auto lg:mx-0"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            
            {/* LATO SINISTRO: INFO E SOCIAL */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <p className="text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed">
                Sei un team manager, uno sponsor o un giornalista? 
                Usa il modulo per scrivermi direttamente. Rispondo solitamente entro 24 ore.
              </p>

              <div className="space-y-6 md:space-y-8">
                {/* Email Box - Fixed per mobile */}
                <div className="flex items-start md:items-center gap-4 md:gap-6 group">
                  <div className="shrink-0 p-3 md:p-4 bg-zinc-900 rounded-2xl border border-zinc-800 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                    <Mail size={24} className="md:w-7 md:h-7" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest mb-1">Scrivimi</p>
                    <a 
                      href="mailto:riccardoorlando08@gmail.com" 
                      className="text-lg sm:text-xl md:text-2xl font-black hover:text-red-500 transition-colors block truncate"
                    >
                      riccardoorlando08@gmail.com
                    </a>
                  </div>
                </div>

                {/* Posizione Box */}
                <div className="flex items-start md:items-center gap-4 md:gap-6 group">
                  <div className="shrink-0 p-3 md:p-4 bg-zinc-900 rounded-2xl border border-zinc-800 text-red-600">
                    <MapPin size={24} className="md:w-7 md:h-7" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest mb-1">Base</p>
                    <p className="text-xl md:text-2xl font-black italic uppercase tracking-tight">Palermo, Italia</p>
                  </div>
                </div>
              </div>

              {/* SOCIAL BOX */}
              <div className="mt-12 md:mt-16 p-6 md:p-8 bg-zinc-900/30 border border-zinc-800 rounded-3xl inline-block lg:self-start">
                <p className="text-[10px] font-bold uppercase text-zinc-500 mb-6 tracking-widest">Seguimi in pista</p>
                <div className="flex gap-4">
                  <a href="#" className="p-4 bg-black border border-zinc-700 rounded-xl hover:border-red-600 transition-all hover:-translate-y-1 text-zinc-400 hover:text-white">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="p-4 bg-black border border-zinc-700 rounded-xl hover:border-red-600 transition-all hover:-translate-y-1 text-zinc-400 hover:text-white">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* LATO DESTRO: IL FORM */}
            <div className="relative order-1 lg:order-2">
              <div className="absolute -inset-4 bg-red-600/10 blur-3xl rounded-full"></div>

              <div className="relative bg-zinc-900/80 backdrop-blur-md p-6 md:p-10 rounded-3xl border border-zinc-800 shadow-2xl">
                
                {isSuccess ? (
                  <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                    <CheckCircle size={64} className="text-green-500 mx-auto mb-6" />
                    <h3 className="text-2xl md:text-3xl font-black italic uppercase mb-2">Inviato!</h3>
                    <p className="text-zinc-400 text-sm md:text-base">Grazie Riccardo, riceverai una risposta a breve.</p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="mt-10 text-red-600 font-bold uppercase tracking-widest hover:text-white transition-colors"
                    >
                      Invia un altro
                    </button>
                  </div>
                ) : (
                  <form ref={form} onSubmit={sendEmail} className="space-y-5 md:space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                      <div className="min-w-0">
                        <label className="block text-[10px] font-bold uppercase text-zinc-500 mb-2 ml-1 tracking-widest">Nome</label>
                        <input 
                          type="text" 
                          name="from_name"
                          required
                          className="w-full bg-black border border-zinc-700 p-4 rounded-xl focus:border-red-600 outline-none transition-all text-sm md:text-base"
                          placeholder="Il tuo nome"
                        />
                      </div>
                      <div className="min-w-0">
                        <label className="block text-[10px] font-bold uppercase text-zinc-500 mb-2 ml-1 tracking-widest">Email</label>
                        <input 
                          type="email" 
                          name="from_email"
                          required
                          className="w-full bg-black border border-zinc-700 p-4 rounded-xl focus:border-red-600 outline-none transition-all text-sm md:text-base"
                          placeholder="email@esempio.com"
                        />
                      </div>
                    </div>

                    <div className="min-w-0">
                      <label className="block text-[10px] font-bold uppercase text-zinc-500 mb-2 ml-1 tracking-widest">Oggetto</label>
                      <input 
                        type="text" 
                        name="subject"
                        className="w-full bg-black border border-zinc-700 p-4 rounded-xl focus:border-red-600 outline-none transition-all text-sm md:text-base"
                        placeholder="Esempio: Proposta Sponsor"
                      />
                    </div>

                    <div className="min-w-0">
                      <label className="block text-[10px] font-bold uppercase text-zinc-500 mb-2 ml-1 tracking-widest">Messaggio</label>
                      <textarea 
                        name="message"
                        rows="4"
                        required
                        className="w-full bg-black border border-zinc-700 p-4 rounded-xl focus:border-red-600 outline-none transition-all resize-none text-sm md:text-base"
                        placeholder="Scrivi qui il tuo messaggio..."
                      ></textarea>
                    </div>

                    {error && (
                      <div className="flex items-center gap-2 text-red-500 text-xs font-bold bg-red-500/10 p-3 rounded-xl border border-red-500/20">
                        <AlertCircle size={16} /> {error}
                      </div>
                    )}

                    <button 
                      type="submit" 
                      disabled={isSending}
                      className={`w-full py-4 md:py-5 rounded-2xl font-black italic uppercase tracking-widest text-base md:text-lg transition-all transform active:scale-95 flex items-center justify-center gap-3
                        ${isSending 
                          ? 'bg-zinc-800 cursor-not-allowed text-zinc-500' 
                          : 'bg-red-600 hover:bg-red-700 text-white shadow-xl shadow-red-900/20'}`}
                    >
                      {isSending ? "Inviando..." : "Invia Messaggio"}
                      <Send size={18} className={isSending ? "animate-pulse" : ""} />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contatti;