const generateIds = (prefix, count) => {
  return Array.from({ length: count }, (_, i) => {
    const photoNumber = (i + 1).toString().padStart(2, '0');
    return `${prefix}_${photoNumber}`;
  });
};

export const galleryData = {
  // --- GARE ---
  "2025": [
    { 
      id: "mugello-2025", 
      title: "Campionato Italiano F4 FX - Mugello", 
      coverId: "2025_mugello_01", 
      photos: generateIds("2025_mugello", 48) 
    },
    { 
      id: "misano-2025", 
      title: "Campionato Italiano F4 FX - Misano", 
      coverId: "2025_misano_01", 
      photos: generateIds("2025_misano", 40) 
    }
  ],
  "2024": [
    // Qui potrai aggiungere le gare dell'anno scorso
  ],

  // --- PROFILO & MACCHINA ---
  "profile": {
    mainPhoto: "profilo_main",      // Rinomina la tua foto profilo così
    carPhoto: "Tatuus_T-014",       // Il tuo ID specifico
    bestOf: generateIds("profilo_best", 12) // Genera da profilo_best_01 a profilo_best_12
  }
};