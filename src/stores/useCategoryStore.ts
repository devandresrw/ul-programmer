import { create } from 'zustand';

interface CategoryStore {
  category: string | null;
  setCategory: (category: string | null) => void;
}

export const useCategoryStore = create<CategoryStore>((set) => ({
  category: null,
  setCategory: (category) => {
    set({ category })
    console.log(category)
  },
}));