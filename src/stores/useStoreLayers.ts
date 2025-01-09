import { create } from 'zustand'

interface StoreState {
  currentIndex: number;
  increment: () => void;
  decrement: () => void;
}

const slidesComponentsLength = 6; // Número de componentes en el arreglo

export const useStoreLayers = create<StoreState>((set) => ({
  currentIndex: 0, // Inicializa el índice con el valor que desees
  increment: () => set((state) => {
    console.log('increment');
    const newIndex = state.currentIndex + 1;
    if (newIndex < slidesComponentsLength) {
      return { currentIndex: newIndex };
    }
    return state;
  }),
  decrement: () => set((state) => {
    console.log('decrement');
    const newIndex = state.currentIndex - 1;
    if (newIndex >= 0) {
      return { currentIndex: newIndex };
    }
    return state;
  }),
}));