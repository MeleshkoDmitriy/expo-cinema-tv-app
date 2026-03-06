import { Direction } from '@bam.tech/lrud';
import {
  DefaultFocus,
  SpatialNavigationRoot,
  SpatialNavigationView,
} from 'react-tv-space-navigation';
import { Fragment, useCallback, useEffect, useRef } from 'react';
import { Animated, Dimensions, Platform, View } from 'react-native';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { MenuButton } from './MenuButton';
import { Box, Spacer, TIconName, Typography } from '@/components/shared';
import { theme } from '@/styles';
import { useMenu } from '@/hooks';
import { menuItems } from '@/constants';
import { useTranslation } from 'react-i18next';


const windowDimensions = Dimensions.get('window');
const MenuItem = ({
  label,
  icon,
  isMenuOpen,
  isActive,
  onSelect,
}: {
  label: string;
  icon: TIconName;
  isMenuOpen: boolean;
  isActive: boolean;
  onSelect: () => void;
}) => {
  return (
    <Box direction='horizontal' alignItems='center'>
      <ActiveIndicator isActive={isActive} />
      <MenuButton
        icon={icon}
        onSelect={() => onSelect()}
        isMenuOpen={isMenuOpen}
        isActive={isActive}
      />
      {isMenuOpen && (
        <>
          <Spacer direction='horizontal' gap='medium' />
          <Typography
            color={
              isActive
                ? theme.colors.primary.main
                : theme.colors.background.contrastText
            }
          >
            {label}
          </Typography>
        </>
      )}
    </Box>
  );
};

export const Menu = ({ state, navigation }: BottomTabBarProps) => {
  const { t } = useTranslation();
  const { isOpen: isMenuOpen, toggleMenu } = useMenu();
  const theme = useTheme();
  const animatedWidth = useRef(
    new Animated.Value(
      isMenuOpen ? theme.sizes.menu.open : theme.sizes.menu.closed,
    ),
  ).current;
  const onDirectionHandledWithoutMovement = useCallback(
    (movement: Direction) => {
      if (movement === 'right') {
        toggleMenu(false);
      }
    },
    [toggleMenu],
  );

  const menuWebProps = Platform.select({
    web: {
      onMouseEnter: () => {
        toggleMenu(true);
      },
      onMouseLeave: () => {
        toggleMenu(false);
      },
    },
    default: {},
  });

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: isMenuOpen ? theme.sizes.menu.open : theme.sizes.menu.closed,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [
    animatedWidth,
    isMenuOpen,
    theme.sizes.menu.closed,
    theme.sizes.menu.open,
  ]);
  return (
    <SpatialNavigationRoot
      isActive={isMenuOpen}
      onDirectionHandledWithoutMovement={onDirectionHandledWithoutMovement}
    >
      <AbsoluteMenuContainer>
        <SpatialNavigationView direction='vertical'>
          <MenuSpacer />
          <MenuOverlay style={{ width: animatedWidth }} />
          <MenuContainer isOpen={isMenuOpen} {...menuWebProps}>
            <DefaultFocus>
              <View>
                {state.routes.map((route, index) => {
                  return (
                    <Fragment key={route.key}>
                      <MenuItem
                        // @ts-ignore
                        label={t(menuItems[route.name].labelKey)}
                        // @ts-ignore
                        icon={menuItems[route.name].icon}
                        isMenuOpen={isMenuOpen}
                        isActive={state.index === index}
                        onSelect={() =>
                          navigation.navigate(route.name, route.params)
                        }
                      />
                      <Spacer direction='vertical' gap='medium' />
                    </Fragment>
                  );
                })}
              </View>
            </DefaultFocus>
          </MenuContainer>
        </SpatialNavigationView>
      </AbsoluteMenuContainer>
    </SpatialNavigationRoot>
  );
};

const MenuContainer = styled.View<{ isOpen: boolean }>(({ isOpen, theme }) => ({
  position: 'absolute',
  left: 0,
  backgroundColor: 'transparent',
  width: isOpen ? theme.sizes.menu.open : theme.sizes.menu.closed,
  height: windowDimensions.height,
  paddingLeft: theme.spacings.small,
  justifyContent: 'center',
}));

const MenuOverlay = styled(Animated.View)(({ theme }) => ({
  position: 'absolute',
  left: 0,
  backgroundColor: theme.colors.background.mainHover,
  height: windowDimensions.height,
}));

const ActiveIndicator = styled.View<{ isActive: boolean }>(
  ({ isActive, theme }) => ({
    marginRight: theme.spacings.medium / 1.5,
    width: 5,
    height: '100%',
    backgroundColor: isActive ? theme.colors.primary.main : 'transparent',
    borderRadius: 4,
  }),
);

const MenuSpacer = styled.View(({ theme }) => ({
  width: theme.sizes.menu.closed,
}));

const AbsoluteMenuContainer = styled.View({
  position: 'absolute',
});
