import styled from '@emotion/native';
import { Animated } from 'react-native';
import { scaledPixels } from '@/utils';

export const ItemContainer = styled(Animated.View)<{
  isFocused: boolean;
}>(({ isFocused, theme }) => ({
  height: theme.sizes.carouselItem.height,
  width: theme.sizes.carouselItem.width,
  overflow: 'hidden',
  borderRadius: scaledPixels(20),
  borderColor: isFocused ? theme.colors.primary.mainHover : 'transparent',
  borderWidth: scaledPixels(3),
}));
