import { create } from "zustand";

export const usePlayerStore = create((set) => ({
    isPlaying: false,
    volume: 1,
    currentMusic: { playlist: null, song: null, songs: [] },
    currentTime: 0,
    isPlayerOpen: false,
    setVolume: (volume) => set({ volume }),
    setIsPlaying: (isPlaying) => set({ isPlaying }),
    setCurrentMusic: (currentMusic) => set({ currentMusic }),
    setCurrentTime: (currentTime) => set({ currentTime }),
    setIsPlayerOpen: (isPlayerOpen) => set({ isPlayerOpen }),
}));
