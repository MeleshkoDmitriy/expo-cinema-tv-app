import { FocusableItem } from '@/components/shared/FocusableCarousel/FocusableItem';
import { theme } from '@/styles';
import { TMovie } from '@/types';
import { scaledPixels } from '@/utils';
import { useCallback } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { SpatialNavigationVirtualizedGrid } from 'react-tv-space-navigation';

const NUMBER_OF_COLUMNS = 3;
const INFINITE_SCROLL_ROW_THRESHOLD = 2;

interface VirtualizedSpatialGridProps {
  data: TMovie[];
  onItemSelect: (movie: TMovie) => void;
  containerStyle?: ViewStyle;
}

export const VirtualizedSpatialGrid = ({
  data,
  onItemSelect,
  containerStyle,
}: VirtualizedSpatialGridProps) => {
  const renderItem = useCallback(
    ({ item }: { item: TMovie }) => (
      <FocusableItem
        movie={item}
        label={item.title}
        onSelect={() => onItemSelect(item)}
      />
    ),
    [],
  );

  return (
    <View style={[styles.container, containerStyle]}>
      <SpatialNavigationVirtualizedGrid
        data={data}
        renderItem={renderItem}
        itemHeight={theme.sizes.carouselItem.height * 1.3}
        numberOfColumns={NUMBER_OF_COLUMNS}
        onEndReachedThresholdRowsNumber={INFINITE_SCROLL_ROW_THRESHOLD}
        rowContainerStyle={styles.rowStyle}
        scrollInterval={150}
        // header={</>}
        // headerSize={}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: scaledPixels(1000),
    backgroundColor: theme.colors.background.mainHover,
    padding: scaledPixels(30),
    paddingLeft: scaledPixels(75),
    borderRadius: scaledPixels(20),
    overflow: 'hidden',
  },
  rowStyle: {
    gap: scaledPixels(100),
  },
});
