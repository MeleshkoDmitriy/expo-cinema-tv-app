import { MutableRefObject } from 'react';
import { ViewStyle } from 'react-native';
import {
  SpatialNavigationNode,
  SpatialNavigationVirtualizedListRef,
} from 'react-tv-space-navigation';
import { TMovie } from '@/types';
import { scaledPixels } from '@/utils';
import { useTheme } from '@emotion/react';
import { FocusableList } from './FocusableList';

const ROW_PADDING = scaledPixels(70);

interface FocusableRowProps {
  data: TMovie[];
  containerStyle?: ViewStyle;
  parentRef?: MutableRefObject<SpatialNavigationVirtualizedListRef | null>;
}

export const FocusableRow = ({
  data,
  containerStyle,
  parentRef,
}: FocusableRowProps) => {
  const theme = useTheme();

  return (
    <SpatialNavigationNode>
      {({ isActive }) => (
        <FocusableList
          data={data}
          parentRef={parentRef}
          isActive={isActive}
          containerStyle={{
            height: theme.sizes.carouselItem.height + ROW_PADDING,
            ...containerStyle,
          }}
        />
      )}
    </SpatialNavigationNode>
  );
};
