import { create } from 'zustand'

type CarouselStore = {
  currentIndex: number
  setIndex: (index: number) => void
}

export const useCarouselStore = create<CarouselStore>((set) => ({
  currentIndex: 0,
  setIndex: (index) => set(() => ({ currentIndex: index }))
}))