import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';
import { TMovie } from '@/types';
import { EnumStorageKeys, Storage } from '@/lib';

const MAX_HISTORY_LENGTH = 10;

type HistorylistState = {
  historylist: TMovie[];
  isHydratedHistorylist: boolean;
};

type HistorylistActions = {
  setHistorylist: (movie: TMovie) => void;
  hydrateHistorylistFromStorage: () => Promise<void>;
};

type HistorylistStore = HistorylistState & { actions: HistorylistActions };

export const useHistorylistStore = create<HistorylistStore>((set, get) => ({
  historylist: [],
  isHydratedHistorylist: false,

  actions: {
    setHistorylist: async (movie) => {
      const actualHistory = get().historylist;
      const withoutDuplication = actualHistory.filter((m) => m.id !== movie.id);
      const newHistory = [movie, ...withoutDuplication].slice(0, MAX_HISTORY_LENGTH);

      await Storage.setStorageItem(EnumStorageKeys.HISTORY, newHistory);
      set({ historylist: newHistory });
    },

    hydrateHistorylistFromStorage: async () => {
      const data = await Storage.getStorageItem(EnumStorageKeys.HISTORY);
      set({ historylist: data ?? [], isHydratedHistorylist: true });
    },
  },
}));

export const useHistorylist = () => useHistorylistStore((state) => state.historylist);
export const useIsHydratedHistorylist = () =>
  useHistorylistStore((state) => state.isHydratedHistorylist);

export const useHistorylistActions = () =>
  useHistorylistStore(
    useShallow((state) => ({
      setHistorylist: state.actions.setHistorylist,
      hydrateHistorylistFromStorage: state.actions.hydrateHistorylistFromStorage,
    })),
  );
