import { create } from "zustand";

interface PlayerStoreProps {
  videoId: string | null;
  setVideoId: (videoId: string | null) => void;
}

export const usePlayerStore = create<PlayerStoreProps>()((set) => ({
  videoId: null,
  setVideoId: (videoId) => set({ videoId }),
}));
