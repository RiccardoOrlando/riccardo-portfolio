import React, { useState, useRef, useEffect, useCallback, useLayoutEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, RefreshCw } from 'lucide-react';

const VIDEO_F4_URL = "https://res.cloudinary.com/ddbmmjpal/video/upload/f_auto,q_auto/v1768508141/Vallelunga_on-board_per_portfolio.mp4";
const VIDEO_KART_URL = "https://res.cloudinary.com/ddbmmjpal/video/upload/f_auto,q_auto/v1768507881/Triscina_On-Board_Per_Portfolio_compresso.mp4";

const VideoSplitScreen = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [isSyncMode, setIsSyncMode] = useState(true);
  const [isMutedF4, setIsMutedF4] = useState(true); 
  const [isMutedKart, setIsMutedKart] = useState(true); 
  const [isPlayingF4, setIsPlayingF4] = useState(false);
  const [isPlayingKart, setIsPlayingKart] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50); 
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 }); 

  const containerRef = useRef(null);
  const videoF4Ref = useRef(null);
  const videoKartRef = useRef(null);

  // Volume F4 al 2%
  useEffect(() => {
    const setLowVolume = () => {
      if (videoF4Ref.current) videoF4Ref.current.volume = 0.02;
    };
    if (hasStarted) {
      setLowVolume();
      const backupTimer = setTimeout(setLowVolume, 1000);
      return () => clearTimeout(backupTimer);
    }
  }, [hasStarted, isPlayingF4]);

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

  const handleStartAll = () => {
    setHasStarted(true);
    setIsPlayingF4(true);
    setIsPlayingKart(true);
    setTimeout(() => {
      videoF4Ref.current?.play();
      videoKartRef.current?.play();
    }, 150);
  };

  const toggleSyncPlay = () => {
    const nextState = !isPlayingF4;
    setIsPlayingF4(nextState);
    setIsPlayingKart(nextState);
    if (nextState) {
      videoF4Ref.current?.play();
      videoKartRef.current?.play();
    } else {
      videoF4Ref.current?.pause();
      videoKartRef.current?.pause();
    }
  };

  useEffect(() => {
    let frame;
    const sync = () => {
      if (isSyncMode && isPlayingF4 && videoF4Ref.current && videoKartRef.current) {
        const diff = Math.abs(videoF4Ref.current.currentTime - videoKartRef.current.currentTime);
        if (diff > 0.15) videoKartRef.current.currentTime = videoF4Ref.current.currentTime;
      }
      frame = requestAnimationFrame(sync);
    };
    if (hasStarted) frame = requestAnimationFrame(sync);
    return () => cancelAnimationFrame(frame);
  }, [isSyncMode, isPlayingF4, hasStarted]);

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
    // Z-INDEX BASSO PER IL WRAPPER ESTERNO
    <div className="relative z-10 w-full py-12 md:py-16 bg-black select-none font-sans text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-8 md:mb-10 gap-6 text-center md:text-left">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black italic tracking-tighter uppercase leading-none">
              ONBOARD <span className="text-red-600">COMPARISON</span>
            </h2>
            <div className="h-1 md:h-1.5 w-16 md:w-24 bg-red-600 mt-4 mx-auto md:mx-0"></div>
          </div>
          
          <button 
            onClick={() => setIsSyncMode(!isSyncMode)}
            className={`flex items-center gap-3 px-6 md:px-8 py-2 md:py-3 rounded-full border-2 transition-all font-black italic text-[10px] md:text-xs tracking-widest ${isSyncMode ? 'bg-red-600 border-red-600 text-white' : 'bg-transparent border-zinc-700 text-zinc-500'}`}
          >
            <RefreshCw size={14} className={isSyncMode ? 'animate-spin' : ''} />
            {isSyncMode ? 'SYNC MODE: ON' : 'MANUAL MODE'}
          </button>
        </div>

        {/* Player Container */}
        <div className="relative shadow-2xl overflow-hidden rounded-xl md:rounded-3xl border border-white/10">
          <div ref={containerRef} className="relative w-full aspect-video bg-black">
            
            {/* Start Overlay (z-index ridotto) */}
            {!hasStarted && (
              <div className="absolute inset-0 z-40 flex items-center justify-center bg-black/90 backdrop-blur-md">
                <button onClick={handleStartAll} className="w-16 h-16 md:w-24 md:h-24 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl">
                  <Play className="text-white fill-white ml-1" size={32} />
                </button>
              </div>
            )}

            {/* Video F4 */}
            <div className="absolute inset-0 w-full h-full">
              <video
                ref={videoF4Ref}
                src={VIDEO_F4_URL}
                className="w-full h-full object-contain"
                loop playsInline muted={isMutedF4}
              />
            </div>

            {/* Video Kart */}
            <div 
              className="absolute top-0 left-0 h-full z-10 overflow-hidden border-r-2 border-red-600" 
              style={{ width: `${sliderPosition}%` }}
            >
              <div style={{ width: dimensions.width, height: dimensions.height }} className="relative bg-black">
                <video
                  ref={videoKartRef}
                  src={VIDEO_KART_URL}
                  className="w-full h-full object-contain"
                  style={{ objectPosition: '20% center' }}
                  loop playsInline muted={isMutedKart}
                />
              </div>
            </div>

            {/* Handle Slider (z-index ridotto a 20) */}
            <div
              onMouseDown={() => setIsDragging(true)}
              onTouchStart={() => setIsDragging(true)}
              className="absolute top-0 bottom-0 z-20 flex items-center justify-center touch-none"
              style={{ left: `${sliderPosition}%`, width: '40px', marginLeft: '-20px', cursor: 'ew-resize' }}
            >
              <div className="w-8 h-8 md:w-10 md:h-10 bg-black border-2 border-red-600 rounded-full flex items-center justify-center shadow-2xl">
                <div className="flex gap-1">
                  <div className="w-0.5 md:w-1 h-3 bg-red-600 rounded-full"></div>
                  <div className="w-0.5 md:w-1 h-3 bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            {/* DESKTOP CONTROLS (z-index 30 per stare sopra il video ma sotto l'header esterno) */}
            {hasStarted && (
              <div className="hidden md:block absolute inset-x-0 bottom-0 z-30 p-6 bg-gradient-to-t from-black via-black/40 to-transparent">
                <div className="flex items-center justify-between pointer-events-none">
                  <div className="flex items-center gap-3 pointer-events-auto">
                    <button onClick={() => setIsMutedKart(!isMutedKart)} className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md">
                      {isMutedKart ? <VolumeX size={18}/> : <Volume2 size={18}/>}
                    </button>
                    {!isSyncMode && (
                      <button onClick={() => { setIsPlayingKart(!isPlayingKart); isPlayingKart ? videoKartRef.current.pause() : videoKartRef.current.play(); }} 
                        className="px-4 py-2 bg-white text-black rounded-lg font-black text-[10px] uppercase italic transition-transform active:scale-95">
                        {isPlayingKart ? <Pause size={12} fill="black"/> : <Play size={12} fill="black"/>} KART
                      </button>
                    )}
                  </div>

                  {isSyncMode && (
                    <button onClick={toggleSyncPlay} className="pointer-events-auto flex flex-row items-center gap-3 px-8 py-3 bg-red-600 text-white rounded-full font-black text-xs uppercase italic shadow-lg active:scale-95">
                      {isPlayingF4 ? <Pause size={16} fill="white"/> : <Play size={16} fill="white"/>} <span>SYNC PLAY</span>
                    </button>
                  )}

                  <div className="flex items-center gap-3 pointer-events-auto">
                    {!isSyncMode && (
                      <button onClick={() => { setIsPlayingF4(!isPlayingF4); isPlayingF4 ? videoF4Ref.current.pause() : videoF4Ref.current.play(); }} 
                        className="px-4 py-2 bg-red-600 text-white rounded-lg font-black text-[10px] uppercase italic transition-transform active:scale-95">
                        {isPlayingF4 ? <Pause size={12} fill="white"/> : <Play size={12} fill="white"/>} F4
                      </button>
                    )}
                    <button onClick={() => setIsMutedF4(!isMutedF4)} className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md">
                      {isMutedF4 ? <VolumeX size={18}/> : <Volume2 size={18}/>}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Labels e Paragrafi (invariati) */}
        <div className="mt-4 flex justify-between px-2 text-zinc-500 font-black italic uppercase tracking-widest text-[8px] md:text-[10px]">
          <span>Karting Champion - Triscina</span>
          <span>F4 Tatuus Gen2 - Vallelunga</span>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-zinc-900/30 p-6 md:p-8 rounded-3xl border border-white/5 hover:border-red-600/20 transition-all group">
            <h4 className="text-white text-sm font-black uppercase mb-4 tracking-[0.2em] italic flex items-center gap-3">
              <div className="w-2 h-4 bg-red-600 transform -skew-x-12"></div> Technical Focus
            </h4>
            <p className="text-zinc-500 text-sm leading-relaxed font-bold italic uppercase tracking-tight group-hover:text-zinc-300 transition-colors">
              Confronto dei punti di staccata e velocità di percorrenza curva tra la dinamica ultra-reattiva del Karting e il carico aerodinamico della Formula 4.
            </p>
          </div>
          <div className="bg-zinc-900/30 p-6 md:p-8 rounded-3xl border border-white/5 hover:border-red-600/20 transition-all group">
            <h4 className="text-white text-sm font-black uppercase mb-4 tracking-[0.2em] italic flex items-center gap-3">
              <div className="w-2 h-4 bg-red-600 transform -skew-x-12"></div> Driving Evolution
            </h4>
            <p className="text-zinc-500 text-sm leading-relaxed font-bold italic uppercase tracking-tight group-hover:text-zinc-300 transition-colors">
              L'onboard evidenzia come il passaggio alle ruote scoperte richieda una gestione dei freni più modulata rispetto all'aggressività necessaria nel karting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSplitScreen;