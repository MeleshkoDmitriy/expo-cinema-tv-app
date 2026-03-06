import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';
import { TMovie } from '@/types';
import { EnumStorageKeys, Storage } from '@/lib';

type LikedlistState = {
  likedlist: TMovie[];
  isHydratedLikedlist: boolean;
};

type LikedlistActions = {
  setLikedlist: (list: TMovie[]) => void;
  hydrateLikedlistFromStorage: () => Promise<void>;
  toggleLikedlistMovie: (movie: TMovie) => Promise<void>;
  isInLikedlist: (movieId: string) => boolean;
};

type LikedlistStore = LikedlistState & { actions: LikedlistActions };

export const useLikedlistStore = create<LikedlistStore>((set, get) => ({
  likedlist: [],
  isHydratedLikedlist: false,
  actions: {
    setLikedlist: (list) => set({ likedlist: list }),

    hydrateLikedlistFromStorage: async () => {
      const data = await Storage.getStorageItem(EnumStorageKeys.LIKEDLIST);
      set({ likedlist: data ?? [], isHydratedLikedlist: true });
    },

    toggleLikedlistMovie: async (movie) => {
      const { likedlist } = get();
      const next = likedlist.some((m) => m.id === movie.id)
        ? likedlist.filter((m) => m.id !== movie.id)
        : [...likedlist, movie];

      await Storage.setStorageItem(EnumStorageKeys.LIKEDLIST, next);
      set({ likedlist: next });
    },

    isInLikedlist: (movieId) => get().likedlist.some((m) => m.id === movieId),
  },
}));

export const useLikedlist = () => useLikedlistStore((state) => state.likedlist);
export const useIsHydratedLikedlist = () =>
  useLikedlistStore((state) => state.isHydratedLikedlist);

export const useLikedlistActions = () =>
  useLikedlistStore(
    useShallow((state) => ({
      setLikedlist: state.actions.setLikedlist,
      hydrateLikedlistFromStorage: state.actions.hydrateLikedlistFromStorage,
      toggleLikedlistMovie: state.actions.toggleLikedlistMovie,
      isInLikedlist: state.actions.isInLikedlist,
    })),
  );
