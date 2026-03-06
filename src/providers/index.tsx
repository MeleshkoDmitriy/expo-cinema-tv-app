import { ThemeProvider } from '@emotion/react';
import { LanguageProvider, MenuProvider } from '@/context';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SpatialNavigationDeviceTypeProvider } from 'react-tv-space-navigation';
import { theme } from '@/styles';
import { LogBox } from 'react-native';
import { ReactNode, useEffect } from 'react';
import { useLikedlistStore, useWatchlistStore } from '@/features';
import { useAvatarStore, useHistorylistStore } from '@/store';
import { EnumStorageKeys, Storage } from '@/lib';
import { getDeviceLang } from '@/utils';
import i18n from '@/i18n';

interface ContextProviderProps {
  children: ReactNode;
}

LogBox.ignoreLogs(['Persistent storage is not supported on tvOS']);

export const AppProvider = ({ children }: ContextProviderProps) => {
  useEffect(() => {
    useWatchlistStore.getState().actions.hydrateWatchlistFromStorage();
    useLikedlistStore.getState().actions.hydrateLikedlistFromStorage();
    useAvatarStore.getState().actions.hydrateAvatarFromStorage();
    useHistorylistStore.getState().actions.hydrateHistorylistFromStorage();
  }, []);

  useEffect(() => {
    let cancelled = false;

    Storage.getStorageItem(EnumStorageKeys.LANG).then((savedLang) => {
      if (cancelled) return;
      const lang = savedLang !== null ? savedLang : getDeviceLang();
      i18n.changeLanguage(lang);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <SpatialNavigationDeviceTypeProvider>
      <SafeAreaProvider>
        <LanguageProvider>
          <ThemeProvider theme={theme}>
            <MenuProvider>{children}</MenuProvider>
          </ThemeProvider>
        </LanguageProvider>
      </SafeAreaProvider>
    </SpatialNavigationDeviceTypeProvider>
  );
};
