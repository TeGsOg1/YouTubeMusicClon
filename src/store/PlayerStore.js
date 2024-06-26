import { create } from "zustand";

export const usePlayerStore = create((set) => ({
    isPlaying: false,
    volume: 1,
    currentMusic: { playlist: null, song: null, songs: [] },
    audioRef: null,
    setVolume: (volume) => set({ volume }),
    setIsPlaying: (isPlaying) => set({ isPlaying }),
    setCurrentMusic: (currentMusic) => set({ currentMusic }),
    setAudioRef: (ref) => set({ audioRef: ref }),
}));
