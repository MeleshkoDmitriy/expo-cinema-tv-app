import { memo } from 'react';
import { Typography } from '../../Typography';
import { TextStyle } from 'react-native';
import { useTheme } from '@emotion/react';
import { BlurBox } from '../../BlurBox';
import { STYLES } from '@/styles';

interface ItemLabelProps {
  label: string;
  isFocused?: boolean;
}

export const ItemLabel = memo(({ label, isFocused }: ItemLabelProps) => {
  const theme = useTheme();

  const labelStyles = {
    width: theme.sizes.carouselItem.width,
  } satisfies TextStyle;
  const textColor = isFocused
    ? theme.colors.primary.mainHover
    : theme.colors.background.white;

  return (
    <BlurBox styles={STYLES.blurbox.position.cardTitle} isFocused={isFocused}>
      <Typography
        color={textColor}
        fontWeight='strong'
        style={labelStyles}
        numberOfLines={1}
      >
        {label}
      </Typography>
    </BlurBox>
  );
});
