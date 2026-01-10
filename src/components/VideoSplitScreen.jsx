import React, { useState, useRef, useEffect, useCallback, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { Volume2, VolumeX, Play, Pause, RefreshCw } from 'lucide-react';

const VIMEO_ID_F4 = '1140843197'; 
const VIMEO_ID_KART = '1148910571'; 

const getVimeoEmbedUrl = (id, isMuted, isPlaying) => {
  const params = new URLSearchParams({
    autoplay: isPlaying ? 1 : 0, 
    loop: 1,     
    muted: isMuted ? 1 : 0, 
    background: 1, // Riduce l'interfaccia di Vimeo per caricare meno asset
    quality: "720p", // 720p è un ottimo compromesso per non saturare la banda in split
    transparent: 0
  });
  return `https://player.vimeo.com/video/${id}?${params.toString()}`;
};

const VideoSplitScreen = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [isSyncMode, setIsSyncMode] = useState(true); // Sync attivo di default
  
  const [isMutedF4, setIsMutedF4] = useState(true); 
  const [isMutedKart, setIsMutedKart] = useState(true); 
  const [isPlayingF4, setIsPlayingF4] = useState(false); 
  const [isPlayingKart, setIsPlayingKart] = useState(false); 
  
  const [isDragging, setIsDragging] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50); 
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 }); 

  const containerRef = useRef(null);

  const updateDimensions = useCallback(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    }
  }, []);

  useLayoutEffect(() => {
    updateDimensions(); 
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [updateDimensions]);

  // Gestione Sincronizzata
  const toggleSyncPlay = () => {
    const newState = !isPlayingF4;
    setIsPlayingF4(newState);
    setIsPlayingKart(newState);
  };

  const handleStartAll = () => {
    setHasStarted(true);
    setIsPlayingF4(true);
    setIsPlayingKart(true);
  };

  const handleMove = useCallback((e) => {
    if (!isDragging || !containerRef.current) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  }, [isDragging]);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', () => setIsDragging(false));
      window.addEventListener('touchmove', handleMove);
      window.addEventListener('touchend', () => setIsDragging(false));
    }
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
    };
  }, [isDragging, handleMove]);

  return (
    <div className="w-full py-30 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter">
              ONBOARD <span className="text-red-600">COMPARISON</span>
            </h2>
            <p className="text-gray-500 uppercase tracking-widest text-xs mt-2">
              Analisi tecnica: Karting vs Formula 4
            </p>
          </div>
          
          {/* Toggle Sync Mode */}
          <button 
            onClick={() => setIsSyncMode(!isSyncMode)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all text-xs font-bold ${isSyncMode ? 'bg-red-600 border-red-600 text-white' : 'bg-transparent border-gray-600 text-gray-400'}`}
          >
            <RefreshCw size={14} className={isSyncMode ? 'animate-spin-slow' : ''} />
            {isSyncMode ? 'SYNC MODE ACTIVE' : 'MANUAL MODE'}
          </button>
        </div>

        <div
          ref={containerRef}
          className="relative w-full aspect-video rounded-3xl overflow-hidden bg-zinc-900 shadow-[0_0_50px_rgba(255,0,0,0.2)] select-none border border-white/5"
          style={{ touchAction: 'none' }}
        >
          {!hasStarted ? (
            <div 
              className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url('/img/fotomisano.webp')" }}
            >
                <button 
                  onClick={handleStartAll}
                  className="group relative flex items-center justify-center w-20 h-20 bg-red-600 rounded-full transition-all hover:scale-110 hover:shadow-[0_0_30px_#FF0000]"
                >
                    <Play className="text-white fill-white ml-1" size={28} />
                </button>
                <p className="mt-4 text-white font-black tracking-widest text-sm uppercase">Avvia Confronto</p>
            </div>
          ) : null}

          {/* VIDEO 1: F4 (Destra/Sotto) */}
          <div className="absolute inset-0 w-full h-full">
            {hasStarted && (
                <iframe
                  src={getVimeoEmbedUrl(VIMEO_ID_F4, isMutedF4, isPlayingF4)}
                  className="absolute pointer-events-none"
                  style={{ width: dimensions.width, height: dimensions.height, border: 'none' }}
                  allow="autoplay; fullscreen"
                />
            )}
            <div className="absolute bottom-6 right-8 px-3 py-1 bg-red-600 text-white text-[10px] font-black italic rounded-sm z-20 uppercase">
              F4 Tatuus Gen2
            </div>
          </div>

          {/* VIDEO 2: KART (Sinistra/Sopra) */}
          <div
            className="absolute top-0 left-0 h-full overflow-hidden border-r-2 border-red-600 z-10 shadow-2xl"
            style={{ width: `${sliderPosition}%` }}
          >
            {hasStarted && (
                <iframe
                  src={getVimeoEmbedUrl(VIMEO_ID_KART, isMutedKart, isPlayingKart)}
                  className="absolute pointer-events-none"
                  style={{ width: dimensions.width, height: dimensions.height, left: 0, top: 0, border: 'none' }}
                  allow="autoplay; fullscreen"
                />
            )}
            <div className="absolute bottom-6 left-8 px-3 py-1 bg-white text-black text-[10px] font-black italic rounded-sm z-20 uppercase">
              Kart 125cc Shifter
            </div>
          </div>

          {/* SLIDER HANDLE */}
          <div
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
            className="absolute top-0 bottom-0 z-30 cursor-ew-resize"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="h-full w-0.5 bg-red-600 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-black border-2 border-red-600 rounded-full shadow-2xl flex items-center justify-center">
                <div className="flex gap-1">
                  <div className="w-1 h-3 bg-red-600 rounded-full" />
                  <div className="w-1 h-3 bg-red-600 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* CONTROLLI DINAMICI */}
          {hasStarted && (
            <div className="absolute top-6 inset-x-8 flex justify-between z-40 pointer-events-none">
                {/* Controllo Sinistro (Kart) */}
                <div className="flex gap-2 pointer-events-auto">
                  {!isSyncMode && (
                    <button onClick={() => setIsPlayingKart(!isPlayingKart)} className="p-3 bg-black/60 backdrop-blur-md rounded-xl text-white hover:bg-red-600 transition-all border border-white/10">
                      {isPlayingKart ? <Pause size={16}/> : <Play size={16}/>}
                    </button>
                  )}
                  <button onClick={() => setIsMutedKart(!isMutedKart)} className="p-3 bg-black/60 backdrop-blur-md rounded-xl text-white hover:bg-red-600 transition-all border border-white/10">
                    {isMutedKart ? <VolumeX size={16}/> : <Volume2 size={16}/>}
                  </button>
                </div>

                {/* Controllo Centrale (Sync Play) */}
                {isSyncMode && (
                  <button 
                    onClick={toggleSyncPlay}
                    className="pointer-events-auto flex items-center gap-3 px-6 py-2 bg-red-600 rounded-full text-white font-bold shadow-2xl hover:scale-105 transition-transform"
                  >
                    {isPlayingF4 ? <Pause size={20} fill="white"/> : <Play size={20} fill="white"/>}
                    <span className="text-sm">SYNC PLAY</span>
                  </button>
                )}

                {/* Controllo Destro (F4) */}
                <div className="flex gap-2 pointer-events-auto">
                  <button onClick={() => setIsMutedF4(!isMutedF4)} className="p-3 bg-black/60 backdrop-blur-md rounded-xl text-white hover:bg-red-600 transition-all border border-white/10">
                    {isMutedF4 ? <VolumeX size={16}/> : <Volume2 size={16}/>}
                  </button>
                  {!isSyncMode && (
                    <button onClick={() => setIsPlayingF4(!isPlayingF4)} className="p-3 bg-black/60 backdrop-blur-md rounded-xl text-white hover:bg-red-600 transition-all border border-white/10">
                      {isPlayingF4 ? <Pause size={16}/> : <Play size={16}/>}
                    </button>
                  )}
                </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoSplitScreen;