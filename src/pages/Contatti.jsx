
// ========================================
// 11. src/pages/Contatti.jsx
// ========================================
import React from "react";
import Header from "../components/header";
import PageBanner from "../components/PageBanner";

export default function Contatti() {
  return (
    <>
      <Header />
      <PageBanner 
        title="Contatti"
        subtitle="Mettiti in contatto con me e il mio team"
        imageUrl="/img/fotoimolapodiopremiazione.jpg"
        path="Home / Contatti"
      />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-black/70 border border-red-600 shadow-[0_0_30px_#FF0000] rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-red-600 mb-6">Inviami un Messaggio</h2>
          
          <form className="space-y-6">
            <div>
              <label className="block text-white font-semibold mb-2">Nome</label>
              <input 
                type="text" 
                className="w-full bg-white/10 border border-red-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Il tuo nome"
              />
            </div>
            
            <div>
              <label className="block text-white font-semibold mb-2">Email</label>
              <input 
                type="email" 
                className="w-full bg-white/10 border border-red-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="tua@email.com"
              />
            </div>
            
            <div>
              <label className="block text-white font-semibold mb-2">Messaggio</label>
              <textarea 
                rows="5"
                className="w-full bg-white/10 border border-red-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Scrivi il tuo messaggio..."
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-colors duration-300"
            >
              Invia Messaggio
            </button>
          </form>
        </div>
      </main>
    </>
  );
}