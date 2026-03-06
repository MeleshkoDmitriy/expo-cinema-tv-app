import {
  SpatialNavigationFocusableView,
  SpatialNavigationNodeRef,
} from 'react-tv-space-navigation';
import { TAvatar } from '@/types';
import { Ref } from 'react';
import { Animated } from 'react-native';
import { useScaleAnimation } from '@/hooks';
import { ImageItem } from './ImageItem';

interface FocusableImageItemProps {
  avatar: TAvatar;
  onSelect?: () => void;
  onLongSelect?: () => void;
  indexRange?: [number, number];
  label?: string;
  ref?: Ref<SpatialNavigationNodeRef>;
}

export const FocusableImageItem = ({
  avatar,
  onSelect,
  onLongSelect,
  indexRange,
  label,
  ref,
}: FocusableImageItemProps) => {
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
      viewProps={{ accessibilityLabel: avatar.name }}
      ref={ref}
    >
      {({ isFocused, isRootActive }) => (
        <Animated.View style={animatedStyle}>
          <ImageItem
            avatar={avatar}
            isFocused={isFocused && isRootActive}
            label={label}
          />
        </Animated.View>
      )}
    </SpatialNavigationFocusableView>
  );
};
