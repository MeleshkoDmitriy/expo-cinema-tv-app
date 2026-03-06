import { MutableRefObject } from 'react';
import { ViewStyle } from 'react-native';
import {
  SpatialNavigationNode,
  SpatialNavigationVirtualizedListRef,
} from 'react-tv-space-navigation';
import { TAvatar } from '@/types';
import { scaledPixels } from '@/utils';
import { useTheme } from '@emotion/react';
import { FocusableImageList } from './FocusableImageList';

const ROW_PADDING = scaledPixels(70);

interface FocusableRowProps {
  data: TAvatar[];
  containerStyle?: ViewStyle;
  parentRef?: MutableRefObject<SpatialNavigationVirtualizedListRef | null>;
}

export const FocusableImageRow = ({
  data,
  containerStyle,
  parentRef,
}: FocusableRowProps) => {
  const theme = useTheme();

  return (
    <SpatialNavigationNode>
      {({ isActive }) => (
        <FocusableImageList
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
