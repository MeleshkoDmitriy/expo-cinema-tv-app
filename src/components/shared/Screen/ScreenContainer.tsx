import styled from '@emotion/native';

export const ScreenContainer = styled.View<{
  isPlayer?: boolean;
  isSidebarMenuMargin?: boolean;
}>(({ theme, isPlayer = false, isSidebarMenuMargin = true }) => ({
  flex: 1,
  backgroundColor: theme.colors.background.main,
  marginLeft: isSidebarMenuMargin ? theme.sizes.menu.closed : 0,
  padding: isPlayer ? 0 : theme.spacings.medium,
}));
