import type { ViewStyle } from 'react-native';
import styled from '@emotion/native';
import { type ReactNode } from 'react';
import { View } from 'react-native';
import { type TTheme } from '@/styles';

type BoxDirection = 'vertical' | 'horizontal';

interface Props {
  direction?: BoxDirection;
  flex?: ViewStyle['flex'];
  flexWrap?: ViewStyle['flexWrap'];
  alignItems?: ViewStyle['alignItems'];
  justifyContent?: ViewStyle['justifyContent'];
  paddingHorizontal?: keyof TTheme['spacings'];
  paddingVertical?: keyof TTheme['spacings'];
  paddingBottom?: keyof TTheme['spacings'];
  paddingRight?: keyof TTheme['spacings'];
  paddingLeft?: keyof TTheme['spacings'];
  paddingTop?: keyof TTheme['spacings'];
  padding?: keyof TTheme['spacings'];
  testID?: string;
  style?: ViewStyle;
  children: ReactNode;
}

export const Box = ({ direction = 'vertical', children, ...otherProps }: Props) => {
  return (
    <StyledView direction={direction} {...otherProps}>
      {children}
    </StyledView>
  );
};

const StyledView = styled(View, {
  shouldForwardProp: (propName) => propName !== 'direction',
})<Props & { direction: BoxDirection }>(
  ({
    direction,
    flex,
    flexWrap,
    alignItems,
    justifyContent,
    paddingHorizontal,
    paddingVertical,
    paddingBottom,
    paddingRight,
    paddingLeft,
    paddingTop,
    padding,
    theme,
  }) => ({
    flexDirection: direction === 'vertical' ? 'column' : 'row',
    ...(flex && { flex }),
    ...(flexWrap && { flexWrap }),
    ...(alignItems && { alignItems }),
    ...(justifyContent && { justifyContent }),
    paddingHorizontal: paddingHorizontal && theme.spacings[paddingHorizontal],
    paddingVertical: paddingVertical && theme.spacings[paddingVertical],
    paddingBottom: paddingBottom && theme.spacings[paddingBottom],
    paddingRight: paddingRight && theme.spacings[paddingRight],
    paddingLeft: paddingLeft && theme.spacings[paddingLeft],
    paddingTop: paddingTop && theme.spacings[paddingTop],
    padding: padding && theme.spacings[padding],
  }),
);