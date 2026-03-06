import { StyleSheet, View } from 'react-native';
import { Button, Screen, SpatialRow, Typography } from '@/components';
import { scaledPixels } from '@/utils';
import { DefaultFocus } from 'react-tv-space-navigation';
import { useTranslation } from 'react-i18next';
import { useLanguageContext } from '@/hooks/useLanguageContext';
import { EnumStorageLangsValues } from '@/lib';

export const SettingsScreen = () => {
  const { locale, setLocale } = useLanguageContext();
  const { t } = useTranslation();

  const onSelectLocale = (selectedLocale: EnumStorageLangsValues) => {
    setLocale(selectedLocale);
  };

  return (
    <Screen>
      <DefaultFocus>
        <View style={styles.container}>
          <SpatialRow direction='horizontal'>
            <Button
              onSelect={() => onSelectLocale(EnumStorageLangsValues.EN)}
              iconName={
                EnumStorageLangsValues.EN === locale ? 'Check' : undefined
              }
            >
              {t('screens.settings.english')}
            </Button>
            <Button
              onSelect={() => onSelectLocale(EnumStorageLangsValues.RU)}
              iconName={
                EnumStorageLangsValues.RU === locale ? 'Check' : undefined
              }
            >
              {t('screens.settings.russian')}
            </Button>
          </SpatialRow>
        </View>
      </DefaultFocus>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scaledPixels(40),
    gap: scaledPixels(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
