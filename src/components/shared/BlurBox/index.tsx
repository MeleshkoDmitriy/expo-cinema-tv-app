import { BlurView } from 'expo-blur';
import { ReactNode } from 'react';
import styled from '@emotion/native';
import { scaledPixels } from '@/utils';
import { ViewStyle } from 'react-native';

interface BlurBoxProps {
  children: ReactNode;
  isFocused?: boolean;
  styles?: ViewStyle;
}

export const BlurBox = ({ children, isFocused = false, styles }: BlurBoxProps) => {
  const blurTint = isFocused ? 'extraLight' : 'dark';
  const blurIntensity = isFocused ? 10 : 90;

  return (
    <StyledBlurView intensity={blurIntensity} tint={blurTint} style={styles}>
      {children}
    </StyledBlurView>
  );
};

const StyledBlurView = styled(BlurView)(({}) => ({
  paddingVertical: scaledPixels(6),
  paddingHorizontal: scaledPixels(12),
  borderRadius: scaledPixels(10),
  overflow: 'hidden',
}));
