import styled from '@emotion/native'
import { scaledPixels } from '@/utils';

export const FocusableListContainer = styled.View<{ isActive: boolean }>(({ isActive, theme }) => ({
  backgroundColor: isActive
    ? theme.colors.background.mainActive
    : theme.colors.background.mainHover,
  padding: theme.spacings.medium,
  borderRadius: scaledPixels(20),
  overflow: 'hidden',
  width: '100%',
}));