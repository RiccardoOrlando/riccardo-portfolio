import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Send, CheckCircle, Instagram, Linkedin, MapPin, AlertCircle } from 'lucide-react';
import Header from '../components/Header';
import PageBanner from '../components/PageBanner';

const Contatti = () => {
  const form = useRef();
  
  // STATI PER GESTIRE LA UI
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(""); // Cambiato in stringa per messaggi personalizzati

  // --- CONFIGURAZIONE EMAILJS (I TUOI CODICI) ---
  const SERVICE_ID = "service_8hp9z0o";
  const TEMPLATE_ID = "template_1qdwvd2";
  const PUBLIC_KEY = "KT9rnG0LRS90JTw-Y";
  // ----------------------------------------------

  const sendEmail = (e) => {
    e.preventDefault();
    setError(""); // Reset errori
    
    // --- VALIDAZIONI AVANZATE ---
    const formData = new FormData(form.current);
    const name = formData.get('from_name');
    const email = formData.get('from_email');
    const message = formData.get('message');

    // 1. Controllo Nome (almeno 2 caratteri)
    if (name.trim().length < 2) {
      setError("Per favore, inserisci un nome valido.");
      return;
    }

    // 2. Controllo Email (Regex per formato corretto)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("L'indirizzo email non sembra corretto.");
      return;
    }

    // 3. Controllo Messaggio (minimo 10 caratteri per evitare spam)
    if (message.trim().length < 10) {
      setError("Il messaggio è troppo breve (minimo 10 caratteri).");
      return;
    }

    // Se passa i controlli, inizia l'invio
    setIsSending(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log("Email inviata con successo!", result.text);
        setIsSending(false);
        setIsSuccess(true);
        form.current.reset();
      }, (err) => {
        console.log("Errore nell'invio...", err.text);
        setIsSending(false);
        setError("Errore server. Riprova più tardi o scrivimi via email.");
      });
  };

  return (
    <>
    <Header />
      <PageBanner 
        title="Contatti"
        subtitle="Mettiti in contatto con me e il mio team"
        imageUrl="/img/fotoimolaalepapa.webp"
        path="Home / Contatti"
      />
    <div className="min-h-screen bg-black text-white py-24 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER PAGINA */}
        <div className="mb-16 text-center lg:text-left">
          <h1 className="text-7xl font-black italic uppercase tracking-tighter">
            Get in <span className="text-red-600">Touch</span>
          </h1>
          <div className="h-1 w-24 bg-red-600 mt-4 mx-auto lg:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* LATO SINISTRO: INFO E SOCIAL */}
          <div className="flex flex-col justify-center">
            <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
              Sei un team manager, uno sponsor o un giornalista? 
              Usa il modulo per scrivermi direttamente. Rispondo solitamente entro 24 ore.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-zinc-900 rounded-2xl border border-zinc-800 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all shadow-lg shadow-red-600/5">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-zinc-500 tracking-widest">Email</p>
                  <a href="mailto:riccardoorlando08@gmail.com" className="text-2xl font-black hover:text-red-500 transition-colors">
                    riccardoorlando08@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-zinc-900 rounded-2xl border border-zinc-800 text-red-600">
                  <MapPin size={28} />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-zinc-500 tracking-widest">Base</p>
                  <p className="text-2xl font-black italic uppercase tracking-tight">Palermo, Italia</p>
                </div>
              </div>
            </div>

            {/* SOCIAL BOX */}
            <div className="mt-16 p-8 bg-zinc-900/30 border border-zinc-800 rounded-3xl inline-block lg:self-start">
              <p className="text-sm font-bold uppercase text-zinc-500 mb-6">Seguimi in pista</p>
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
          <div className="relative">
            <div className="absolute -inset-4 bg-red-600/10 blur-3xl rounded-full"></div>

            <div className="relative bg-zinc-900/80 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-zinc-800 shadow-2xl">
              
              {isSuccess ? (
                <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                  <CheckCircle size={80} className="text-green-500 mx-auto mb-6" />
                  <h3 className="text-3xl font-black italic uppercase mb-2">Messaggio Inviato!</h3>
                  <p className="text-zinc-400">Grazie Riccardo, riceverai una risposta a breve.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-10 text-red-600 font-bold uppercase tracking-widest hover:text-white transition-colors"
                  >
                    Invia un altro messaggio
                  </button>
                </div>
              ) : (
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase text-zinc-500 mb-2 ml-1 tracking-widest">Nome</label>
                      <input 
                        type="text" 
                        name="from_name"
                        className="w-full bg-black border border-zinc-700 p-4 rounded-xl focus:border-red-600 outline-none transition-all focus:ring-1 focus:ring-red-600"
                        placeholder="Il tuo nome"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-zinc-500 mb-2 ml-1 tracking-widest">Email</label>
                      <input 
                        type="email" 
                        name="from_email"
                        className="w-full bg-black border border-zinc-700 p-4 rounded-xl focus:border-red-600 outline-none transition-all focus:ring-1 focus:ring-red-600"
                        placeholder="email@esempio.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-500 mb-2 ml-1 tracking-widest">Oggetto</label>
                    <input 
                      type="text" 
                      name="subject"
                      className="w-full bg-black border border-zinc-700 p-4 rounded-xl focus:border-red-600 outline-none transition-all focus:ring-1 focus:ring-red-600"
                      placeholder="Esempio: Proposta Sponsor"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-500 mb-2 ml-1 tracking-widest">Messaggio</label>
                    <textarea 
                      name="message"
                      rows="5"
                      className="w-full bg-black border border-zinc-700 p-4 rounded-xl focus:border-red-600 outline-none transition-all resize-none focus:ring-1 focus:ring-red-600"
                      placeholder="Scrivi qui il tuo messaggio..."
                    ></textarea>
                  </div>

                  {/* MESSAGGIO DI ERRORE PERSONALIZZATO */}
                  {error && (
                    <div className="flex items-center gap-2 text-red-500 text-sm font-bold bg-red-500/10 p-4 rounded-xl border border-red-500/20 animate-shake">
                      <AlertCircle size={18} /> {error}
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={isSending}
                    className={`w-full py-5 rounded-2xl font-black italic uppercase tracking-widest text-lg transition-all transform active:scale-95 flex items-center justify-center gap-3
                      ${isSending 
                        ? 'bg-zinc-800 cursor-not-allowed text-zinc-500' 
                        : 'bg-red-600 hover:bg-red-700 text-white shadow-xl shadow-red-900/40'}`}
                  >
                    {isSending ? "Inviando..." : "Invia Messaggio"}
                    <Send size={20} className={isSending ? "animate-pulse" : ""} />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  );
};

export default Contatti;