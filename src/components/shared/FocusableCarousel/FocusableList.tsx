import { MutableRefObject, Ref, useCallback, useRef } from 'react';
import {
  SpatialNavigationVirtualizedList,
  SpatialNavigationVirtualizedListRef,
} from 'react-tv-space-navigation';
import { TMovie } from '@/types';
import { View } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigation';
import { useTheme } from '@emotion/react';
import { FocusableItem } from './FocusableItem';
import { scaledPixels } from '@/utils';
import { SupportedKeys } from '@/hooks/PanEvent/RemoteControl/SupportedKeys';
import { useKey } from '@/hooks';
import { FocusableListContainer } from './FocusableListContainer';

const GAP_BETWEEN_ELEMENTS = scaledPixels(30);
const NUMBER_OF_ITEMS_VISIBLE_ON_SCREEN = 7;

type FocusableListOrientation = 'vertical' | 'horizontal';

interface FocusableListProps {
  orientation?: FocusableListOrientation;
  containerStyle?: object;
  data: TMovie[];
  parentRef?: MutableRefObject<SpatialNavigationVirtualizedListRef | null>;
  isActive: boolean;
  ref?: Ref<View>;
}

interface RenderItemProps {
  item: TMovie;
}

export const FocusableList = ({
  orientation,
  containerStyle,
  data,
  parentRef,
  isActive,
  ref,
}: FocusableListProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const theme = useTheme();
  const listRef = useRef<SpatialNavigationVirtualizedListRef | null>(null);
  const isScreenFocused = useIsFocused();

  const onFocusableItemSelect = (movie: TMovie) => {
    navigation.push('Interstitial', { movieInfo: movie });
  };

  const renderItem = useCallback(
    ({ item: movie }: RenderItemProps) => (
      <FocusableItem
        movie={movie}
        onSelect={() => onFocusableItemSelect(movie)}
        label={movie.title}
      />
    ),
    [navigation],
  );

  const itemSize = theme.sizes.carouselItem.width + GAP_BETWEEN_ELEMENTS;

  const goToFirstItem = useCallback(
    (pressedKey: SupportedKeys) => {
      const isBackKey = pressedKey === SupportedKeys.Back;
      const isRowActive = isActive && isScreenFocused;
      const isFirstElementFocused =
        listRef.current?.currentlyFocusedItemIndex === 0;

      if (!isBackKey || !isRowActive || isFirstElementFocused) {
        return false;
      }

      listRef.current?.focus(0);
      return true;
    },
    [isActive, isScreenFocused, listRef],
  );

  useKey(SupportedKeys.Back, goToFirstItem);

  return (
    <FocusableListContainer isActive={isActive} style={containerStyle} ref={ref}>
      <SpatialNavigationVirtualizedList
        data={data}
        renderItem={renderItem}
        itemSize={itemSize}
        orientation={orientation}
        onEndReachedThresholdItemsNumber={NUMBER_OF_ITEMS_VISIBLE_ON_SCREEN}
        ref={(elementRef) => {
          if (parentRef) parentRef.current = elementRef;
          listRef.current = elementRef;
        }}
      />
    </FocusableListContainer>
  );
};
