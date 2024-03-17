import { RefObject } from "react";
import { create } from "zustand";

type IndexRefStore = {
  faqRef: RefObject<HTMLDivElement> | null;
  setFAQRef: (ref: RefObject<HTMLDivElement>) => void;
};

export const useIndexRefStore = create<IndexRefStore>((set) => ({
  faqRef: null,
  setFAQRef: (faqRef) => set({ faqRef }),
}));
