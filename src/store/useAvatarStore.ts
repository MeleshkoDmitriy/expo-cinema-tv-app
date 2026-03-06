import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';
import { TAvatar } from '@/types';
import { EnumStorageKeys, Storage } from '@/lib';

type AvatarState = {
  avatar: TAvatar | null;
  isHydratedAvatar: boolean;
};

type AvatarActions = {
  setAvatar: (avatar: TAvatar) => void;
  hydrateAvatarFromStorage: () => Promise<void>;
};

type LikedlistStore = AvatarState & { actions: AvatarActions };

export const useAvatarStore = create<LikedlistStore>((set) => ({
  avatar: null,
  isHydratedAvatar: false,

  actions: {
    hydrateAvatarFromStorage: async () => {
      const data = await Storage.getStorageItem(EnumStorageKeys.AVATAR);
      set({ avatar: data ?? null, isHydratedAvatar: true });
    },

    setAvatar: async (avatar) => {
      await Storage.setStorageItem(EnumStorageKeys.AVATAR, avatar);
      set({ avatar: avatar });
    },
  },
}));

export const useAvatar = () => useAvatarStore((state) => state.avatar);
export const useIsHydratedAvatar = () =>
  useAvatarStore((state) => state.isHydratedAvatar);

export const useAvatarActions = () =>
  useAvatarStore(
    useShallow((state) => ({
      setAvatar: state.actions.setAvatar,
      hydrateAvatarFromStorage: state.actions.hydrateAvatarFromStorage,
    })),
  );
