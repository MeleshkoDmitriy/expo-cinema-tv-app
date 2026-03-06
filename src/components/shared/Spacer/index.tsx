import styled from '@emotion/native';
import React from 'react';
import { View } from 'react-native';

import { type TTheme } from '../../../styles/index';

type GridSpacerDirection = 'vertical' | 'horizontal';

type FlexSpacerProps = {
  direction?: never;
  gap?: never;
  flex: number;
};

type GridSpacerProps = {
  direction?: GridSpacerDirection;
  gap: keyof TTheme['spacings'];
  flex?: never;
};

type Props = FlexSpacerProps | GridSpacerProps;

const SpacerToMemoize = ({ direction = 'vertical', gap, flex }: Props) => {
  if (typeof flex === 'number') {
    return <FlexSpacer flex={flex} />;
  }

  return <GridSpacer direction={direction} gap={gap} />;
};

const FlexSpacer = styled.View<{ flex: number }>(({ flex }) => ({
  flex,
}));

const GridSpacer = styled(View, {
  shouldForwardProp: (propName) =>
    propName !== 'direction' && propName !== 'gap',
})<{
  direction: GridSpacerDirection;
  gap: keyof TTheme['spacings'];
}>(({ direction, gap, theme }) => ({
  ...(direction === 'vertical'
    ? { height: theme.spacings[gap] }
    : { width: theme.spacings[gap] }),
}));

export const Spacer = React.memo(SpacerToMemoize);
