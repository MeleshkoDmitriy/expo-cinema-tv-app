import { StyleSheet, View } from 'react-native';
import {
  Input,
  Screen,
  Typography,
  VirtualizedSpatialGrid,
} from '@/components';
import { DefaultFocus } from 'react-tv-space-navigation';
import { scaledPixels } from '@/utils';
import { mockRokuData } from '@/constants';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigation';
import { TMovie } from '@/types';
import { useCallback, useMemo } from 'react';
import { useSearchQuery } from '@/store';

const ALL_DATA = [
  ...mockRokuData.movies,
  ...mockRokuData.series,
  ...mockRokuData.shorts,
];

export const SearchScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const searchQuery = useSearchQuery();

  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return ALL_DATA;

    const q = searchQuery.toLowerCase().trim();

    return ALL_DATA.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description?.toLowerCase().includes(q),
    );
  }, [searchQuery]);

  const handleItemSelect = useCallback(
    (movie: TMovie) => {
      navigation.push('Interstitial', { movieInfo: movie });
    },
    [navigation],
  );

  return (
    <Screen>
      <View style={styles.container}>
        <DefaultFocus>
          <Input />
          <VirtualizedSpatialGrid
            data={filteredData}
            onItemSelect={handleItemSelect}
          />
        </DefaultFocus>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scaledPixels(40),
    gap: scaledPixels(30),
  },
});
