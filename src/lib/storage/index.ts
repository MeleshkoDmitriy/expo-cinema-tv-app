import AsyncStorage from '@react-native-async-storage/async-storage';
import { TAvatar, TMovie } from '@/types';

export const enum EnumStorageKeys {
  WATCHLIST = 'watchlist',
  LIKEDLIST = 'likedlist',
  AVATAR = 'avatar',
  HISTORY = 'history',
  LANG = 'lang',
}

export const enum EnumStorageLangsValues {
  EN = 'en',
  RU = 'ru',
}

export type StorageKey = (typeof EnumStorageKeys)[keyof typeof EnumStorageKeys];

export type TStorageSchema = {
  [EnumStorageKeys.WATCHLIST]: TMovie[];
  [EnumStorageKeys.LIKEDLIST]: TMovie[];
  [EnumStorageKeys.AVATAR]: TAvatar;
  [EnumStorageKeys.HISTORY]: TMovie[];
  [EnumStorageKeys.LANG]: EnumStorageLangsValues;
};

export const Storage = {
  getStorageItem: async <K extends StorageKey>(
    key: K,
  ): Promise<TStorageSchema[K] | null> => {
    const raw = await AsyncStorage.getItem(key);
    if (raw === null) return null;
    return JSON.parse(raw) as TStorageSchema[K];
  },

  setStorageItem: async <K extends StorageKey>(
    key: K,
    value: TStorageSchema[K],
  ): Promise<void> => {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  },

  removeStorageItem: async (key: StorageKey): Promise<void> => {
    await AsyncStorage.removeItem(key);
  },
};
