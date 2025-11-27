import React, { useState, useRef, useEffect, useCallback, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// 🛑 ID definitivi dei tuoi video Vimeo 🛑
const VIMEO_ID_F4 = '1140843197'; 
const VIMEO_ID_KART = '1140844159'; 

// Funzione helper per costruire l'URL di incorporamento di Vimeo
const getVimeoEmbedUrl = (id, isMuted, isPlaying) => {
  const params = new URLSearchParams({
    // L'unico modo per controllare Play/Pause senza API è forzare il ricaricamento con autoplay=0 o autoplay=1
    autoplay: isPlaying ? 1 : 0, 
    loop: 1,     
    muted: isMuted ? 1 : 0, 
    background: 1, 
    byline: 0,     
    portrait: 0,   
    title: 0,      
    color: 'e50914'
  });
  // La ricarica dell'iframe tramite 'key' aggiornerà questi parametri
  return `https://player.vimeo.com/video/${id}?${params.toString()}`;
};

const VideoSplitScreen = () => {
  // STATI AUDIO SEPARATI
  const [isMutedF4, setIsMutedF4] = useState(true); 
  const [isMutedKart, setIsMutedKart] = useState(true); 
  
  // NUOVI STATI PLAY/PAUSE SEPARATI
  const [isPlayingF4, setIsPlayingF4] = useState(true); 
  const [isPlayingKart, setIsPlayingKart] = useState(true); 

  const [isDragging, setIsDragging] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50); 
  
  // STATO CRUCIALE: Dimensioni del contenitore esterno (per allineamento iframe)
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 }); 

  const containerRef = useRef(null);
  const handleRef = useRef(null);
  
  // --- LOGICA DIMENSIONI FISSE (Risolve il problema dello zoom) ---
  const updateDimensions = useCallback(() => {
    if (containerRef.current) {
      setContainerDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });
    }
  }, []);

  useLayoutEffect(() => {
    updateDimensions(); 
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [updateDimensions]);

  // --- LOGICA DI DRAG & CATTURA GLOBALE (Risolve il problema del blocco) ---
  
  const handleMouseDown = (e) => {
    if (handleRef.current && handleRef.current.contains(e.target)) {
      setIsDragging(true);
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  const handlePointerMove = useCallback((e) => {
    if (!isDragging || !containerRef.current) return;
    
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
    
  }, [isDragging]);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handlePointerMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handlePointerMove);
      document.addEventListener('touchend', handleMouseUp);
      document.body.style.userSelect = 'none';
    }

    return () => {
      document.removeEventListener('mousemove', handlePointerMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handlePointerMove);
      document.removeEventListener('touchend', handleMouseUp);
      document.body.style.userSelect = 'auto';
    };
  }, [isDragging, handlePointerMove]);

  // Logica GSAP (Animazione di entrata)
  useEffect(() => {
    const ctx = gsap.context(() => {
        gsap.from(containerRef.current, {
            scale: 0.9,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
            }
        });
    }, containerRef);
    return () => ctx.revert();
  }, []);
  
  // --- HANDLER AUDIO & PLAY/PAUSE ---
  const toggleMuteF4 = () => setIsMutedF4(!isMutedF4);
  const toggleMuteKart = () => setIsMutedKart(!isMutedKart);
  
  const togglePlayPauseF4 = () => setIsPlayingF4(!isPlayingF4);
  const togglePlayPauseKart = () => setIsPlayingKart(!isPlayingKart);


  return (
    <div className="w-full py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Intestazione */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-2">
            Doppio Onboard: Kart vs Monoposto
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Trascina per controllare e confrontare le due prospettive.
          </p>
        </div>

        {/* Contenitore Splitscreen Video */}
        <div
          ref={containerRef}
          className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-red-800/50 select-none"
        >
          
          {/* VIDEO DESTRA (F4) - BASE LAYER */}
          <div className="absolute inset-0">
            <iframe
              // Key: isMuted + isPlaying
              key={`f4-${isMutedF4}-${isPlayingF4}`} 
              src={getVimeoEmbedUrl(VIMEO_ID_F4, isMutedF4, isPlayingF4)}
              title="Formula 4 Onboard"
              frameBorder="0"
              allow="autoplay; loop; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
            {/* Overlay e Testo F4 */}
            <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
            <div className="absolute bottom-8 right-8 bg-red-600 px-6 py-3 rounded-full z-10 pointer-events-none">
              <span className="text-white font-bold text-xl">F4 Monoposto</span>
            </div>
          </div>

          {/* VIDEO SINISTRA (Kart) - SLIDER LAYER (Maschera) */}
          <div
            className="absolute top-0 left-0 h-full overflow-hidden" 
            style={{ width: `${sliderPosition}%` }} 
          >
            <iframe
              // Key: isMuted + isPlaying
              key={`kart-${isMutedKart}-${isPlayingKart}`} 
              src={getVimeoEmbedUrl(VIMEO_ID_KART, isMutedKart, isPlayingKart)}
              title="Karting Onboard"
              frameBorder="0"
              allow="autoplay; loop; fullscreen; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                // FORZA DIMENSIONI FISSE: Risolve lo zoom
                width: containerDimensions.width, 
                height: containerDimensions.height,
              }}
            />
            {/* Overlay e Testo Kart */}
            <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
            <div className="absolute bottom-8 left-8 bg-blue-600 px-6 py-3 rounded-full z-10 pointer-events-none">
              <span className="text-white font-bold text-xl">Karting Inizio</span>
            </div>
          </div>
          
          {/* Slider (HANDLE) - Trascinamento */}
          <div
            ref={handleRef} 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-40 will-change-transform" 
            style={{ left: `${sliderPosition}%` }} 
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-gray-800">
              <div className="flex gap-1">
                <div className="w-1 h-6 bg-gray-800 rounded"></div>
                <div className="w-1 h-6 bg-gray-800 rounded"></div>
              </div>
            </div>
          </div>
          
          {/* ⏯️ Pulsante Play/Pause Kart (Sinistra - Alto) */}
          <button
            onClick={togglePlayPauseKart}
            className="absolute top-6 left-6 p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-blue-600 transition-colors duration-300 z-50"
            aria-label={isPlayingKart ? "Metti in Pausa Kart" : "Avvia Kart"}
          >
            {isPlayingKart ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </button>
          
          {/* ⏯️ Pulsante Play/Pause F4 (Destra - Alto) */}
          <button
            onClick={togglePlayPauseF4}
            className="absolute top-6 right-6 p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-red-600 transition-colors duration-300 z-50"
            aria-label={isPlayingF4 ? "Metti in Pausa F4" : "Avvia F4"}
          >
            {isPlayingF4 ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </button>

          {/* 🔈 Pulsante Mute Video Kart (Sinistra - Basso) */}
          <button
            onClick={toggleMuteKart}
            className="absolute bottom-6 left-6 p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-blue-600 transition-colors duration-300 z-50"
            aria-label={isMutedKart ? "Attiva Audio Kart" : "Disattiva Audio Kart"}
          >
            {isMutedKart ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
          </button>

          {/* 🔈 Pulsante Mute Video F4 (Destra - Basso) */}
          <button
            onClick={toggleMuteF4}
            className="absolute bottom-6 right-6 p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-red-600 transition-colors duration-300 z-50"
            aria-label={isMutedF4 ? "Attiva Audio F4" : "Disattiva Audio F4"}
          >
            {isMutedF4 ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default VideoSplitScreen;