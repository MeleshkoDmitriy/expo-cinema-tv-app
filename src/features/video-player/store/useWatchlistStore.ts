import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';
import { TMovie } from '@/types';
import { EnumStorageKeys, Storage } from '@/lib';

type WatchlistState = {
  watchlist: TMovie[];
  isHydratedWatchlist: boolean;
};

type WatchlistActions = {
  setWatchlist: (list: TMovie[]) => void;
  hydrateWatchlistFromStorage: () => Promise<void>;
  toggleWatchlistMovie: (movie: TMovie) => Promise<void>;
  isInWatchlist: (movieId: string) => boolean;
};

type WatchlistStore = WatchlistState & { actions: WatchlistActions };

export const useWatchlistStore = create<WatchlistStore>((set, get) => ({
  watchlist: [],
  isHydratedWatchlist: false,
  actions: {
    setWatchlist: (list) => set({ watchlist: list }),

    hydrateWatchlistFromStorage: async () => {
      const data = await Storage.getStorageItem(EnumStorageKeys.WATCHLIST);
      set({ watchlist: data ?? [], isHydratedWatchlist: true });
    },

    toggleWatchlistMovie: async (movie) => {
      const { watchlist } = get();
      const next = watchlist.some((m) => m.id === movie.id)
        ? watchlist.filter((m) => m.id !== movie.id)
        : [...watchlist, movie];

      await Storage.setStorageItem(EnumStorageKeys.WATCHLIST, next);
      set({ watchlist: next });
    },

    isInWatchlist: (movieId) => get().watchlist.some((m) => m.id === movieId),
  },
}));

export const useWatchlist = () => useWatchlistStore((state) => state.watchlist);
export const useIsHydratedWatchlist = () =>
  useWatchlistStore((state) => state.isHydratedWatchlist);

export const useWatchlistActions = () =>
  useWatchlistStore(
    useShallow((state) => ({
      setWatchlist: state.actions.setWatchlist,
      hydrateWatchlistFromStorage: state.actions.hydrateWatchlistFromStorage,
      toggleWatchlistMovie: state.actions.toggleWatchlistMovie,
      isInWatchlist: state.actions.isInWatchlist,
    })),
  );
