import {
  SpatialNavigationFocusableView,
  SpatialNavigationNodeRef,
} from 'react-tv-space-navigation';
import { TMovie } from '@/types';
import { Ref } from 'react';
import { Animated } from 'react-native';
import { Item } from './Item';
import { useScaleAnimation } from '@/hooks';

interface FocusableItemProps {
  movie: TMovie;
  onSelect?: () => void;
  onLongSelect?: () => void;
  indexRange?: [number, number];
  label?: string;
  ref?: Ref<SpatialNavigationNodeRef>;
}

export const FocusableItem = ({
  movie,
  onSelect,
  onLongSelect,
  indexRange,
  label,
  ref,
}: FocusableItemProps) => {
  const { animatedStyle, triggerPulse } = useScaleAnimation();

  const handleLongSelect = () => {
    triggerPulse();
    onLongSelect?.();
  };

  return (
    <SpatialNavigationFocusableView
      onSelect={onSelect}
      onLongSelect={handleLongSelect}
      indexRange={indexRange}
      viewProps={{ accessibilityLabel: movie.title }}
      ref={ref}
    >
      {({ isFocused, isRootActive }) => (
        <Animated.View style={animatedStyle}>
          <Item
            movie={movie}
            isFocused={isFocused && isRootActive}
            label={label}
          />
        </Animated.View>
      )}
    </SpatialNavigationFocusableView>
  );
};
