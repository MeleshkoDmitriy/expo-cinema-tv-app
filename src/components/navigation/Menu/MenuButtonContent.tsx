import styled from '@emotion/native';
import { Ref } from 'react';
import { Animated, View } from 'react-native';
import { useTheme } from '@emotion/react';
import { Icon, TIconName } from '@/components/shared';
import { useFocusAnimation } from '@/hooks';
import { scaledPixels } from '@/utils';
import { getMenuItemContainerColor } from './getMenuItemContainerColor';

interface MenuButtonContentProps {
  icon: TIconName;
  isFocused: boolean;
  isMenuOpen: boolean;
  isActive: boolean;
  ref?: Ref<View>;
}

export const MenuButtonContent = ({
  icon,
  isFocused,
  isMenuOpen,
  isActive,
  ref,
}: MenuButtonContentProps) => {
  const animation = useFocusAnimation(isFocused && isMenuOpen);
  const theme = useTheme();

  const getIconColor = () => {
    let color;

    if (isFocused && isMenuOpen) {
      color = theme.colors.background.main;
    } else {
      color = theme.colors.background.contrastText;
    }

  if (isActive && isFocused && isMenuOpen) {
    color = theme.colors.background.white;
  } 

    return color;
  };
  const iconColor = getIconColor();
  const containerColor = getMenuItemContainerColor(
    isFocused,
    isMenuOpen,
    isActive,
  );

  return (
    <Container style={animation} containerColor={containerColor} ref={ref}>
      <Icon icon={icon} size={theme.sizes.menu.icon} color={iconColor} />
    </Container>
  );
};

const Container = styled(Animated.View)<{
  containerColor: string;
}>(({ containerColor, theme }) => ({
  alignSelf: 'baseline',
  backgroundColor: containerColor,
  padding: theme.spacings.small * 1.5,
  borderRadius: scaledPixels(12),
}));
