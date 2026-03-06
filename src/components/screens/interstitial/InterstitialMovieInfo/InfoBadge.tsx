import styled from '@emotion/native';
import { scaledPixels } from '@/utils';
import { Typography } from '@/components/shared';
import { useTheme } from '@emotion/react';
import { useFocusAnimation } from '@/hooks';
import { Animated } from 'react-native';

interface InfoBadgeProps {
  item: string;
}

export const InfoBadge = ({ item }: InfoBadgeProps) => {
  const theme = useTheme();
  const animation = useFocusAnimation(false);

  return (
    <Badge style={animation}>
      <Typography color={theme.colors.background.white} fontWeight='strong'>{item}</Typography>
    </Badge>
  );
};

const Badge = styled(Animated.View)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: scaledPixels(3),
  borderRadius: scaledPixels(7),
  borderColor: theme.colors.background.white,
  backgroundColor: theme.colors.primary.main,
  paddingVertical: scaledPixels(4),
  paddingHorizontal: scaledPixels(8),
}));
