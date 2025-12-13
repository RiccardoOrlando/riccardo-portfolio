// ========================================
// 10. src/pages/Sponsor.jsx
// ========================================
import React from "react";
import Header from "../components/Header";
import PageBanner from "../components/PageBanner";

export default function Sponsor() {
  return (
    <>
      <Header />
      <PageBanner
        title="Sponsor"
        subtitle="I partner che supportano il mio percorso sportivo"
        imageUrl="/img/fotomisanointervista.jpg"
        path="Home / Sponsor"
      />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-black/70 border border-red-600 shadow-[0_0_30px_#FF0000] rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">
            I Nostri Partner
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            <div className="flex items-center justify-center p-6 bg-white/10 rounded-2xl hover:bg-white/20 transition-colors">
              <img
                src="/img/sponsor1.png"
                alt="Sponsor 1"
                className="max-w-full h-20 object-contain"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
