import { create } from 'zustand';

interface PageState {
  currentPage: string;
  setPage: (page: string) => void;
}

const usePageStore = create<PageState>((set) => ({
  currentPage: '/landing',
  setPage: (page) => set({ currentPage: page }),
}));

export default usePageStore;