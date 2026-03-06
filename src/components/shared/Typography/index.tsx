import { TextProps } from 'react-native';
import styled from '@emotion/native';
import { theme } from '@/styles';
import {
  TTypographyVariant,
  TTypographyWeight,
} from '@/styles/theme/typography';

interface TypographyProps extends TextProps {
  children: string;
  color?: string;
  variant?: TTypographyVariant;
  fontWeight?: TTypographyWeight;
  isUpperCase?: boolean;
}

export const Typography = ({
  children,
  color = theme.colors.background.white,
  variant = 'body',
  fontWeight = 'regular',
  isUpperCase = false,
}: TypographyProps) => {
  return (
    <StyledText
      color={color}
      variant={variant}
      fontWeight={fontWeight}
      isUpperCase={isUpperCase}
    >
      {children}
    </StyledText>
  );
};

const StyledText = styled.Text<{
  color: string;
  variant: TTypographyVariant;
  fontWeight: TTypographyWeight;
  isUpperCase: boolean;
}>(({ variant, fontWeight, color, theme, isUpperCase }) => ({
  ...theme.typography[variant][fontWeight],
  color: color,
  textTransform: isUpperCase ? 'uppercase' : 'none',
}));
