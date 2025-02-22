import { HistoryItem } from "@/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type HistoryStore = {
  history: HistoryItem[];
  addToHistory: (item: HistoryItem) => void;
};

export const useHistoryStore = create<HistoryStore>()(
  persist(
    (set) => ({
      history: [],
      addToHistory: (item: HistoryItem) =>
        set((state) => ({ history: [item, ...state.history] })),
    }),
    {
      name: "history-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
