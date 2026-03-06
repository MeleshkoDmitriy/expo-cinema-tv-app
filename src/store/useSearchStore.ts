import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';
import { TMovie } from '@/types';

type SearchState = {
  searchQuery: string;
};

type SearchActions = {
  setSearchQuery: (query: string) => void;
};

type SearchStore = SearchState & { actions: SearchActions };

export const useSearchStore = create<SearchStore>((set) => ({
  searchQuery: '',
  actions: {
    setSearchQuery: (query) => set({ searchQuery: query }),
  },
}));

export const useSearchQuery = () =>
  useSearchStore((state) => state.searchQuery);

export const useSearchActions = () =>
  useSearchStore(
    useShallow((state) => ({
      setSearchQuery: state.actions.setSearchQuery,
    })),
  );
