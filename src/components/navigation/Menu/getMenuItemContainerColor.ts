import { theme } from '@/styles';

export const getMenuItemContainerColor = (
  isFocused: boolean,
  isMenuOpen: boolean,
  isActive: boolean,
) => {
  let color;

  if (isFocused && isMenuOpen) {
    color = theme.colors.background.white;
  } else {
    color = theme.colors.background.black;
  }

  if (isActive) {
    color = theme.colors.primary.main;
  }

  if (isActive && isFocused && isMenuOpen) {
    color = theme.colors.primary.mainHover;
  }

  return color;
};
