import { create } from 'zustand'
import { persist, PersistStorage } from 'zustand/middleware'

interface IntroStore {
  view: boolean,
  preView: () => void
  preHiden: () => void
}

const sessionStorage: PersistStorage<IntroStore> = {
  getItem: (name) => {
    const value = window.sessionStorage.getItem(name)
    return value ? JSON.parse(value) : null
  },
  setItem: (name, value) => {
    window.sessionStorage.setItem(name, JSON.stringify(value))
  },
  removeItem: (name) => {
    window.sessionStorage.removeItem(name)
  }
}

export const useIntro = create<IntroStore>()(
  persist(
    (set) => ({
      view: true,
      preView: () => set({ view: true }),
      preHiden: () => set({ view: false }),
    }), {
    name: 'intro',
    storage: sessionStorage
  }
  )
)