import type { ReactNode, Ref } from 'react';
import { Animated, View } from 'react-native';
import styled from '@emotion/native';
import { Icon, TIconName } from '../../Icon';
import { useFocusAnimation } from '@/hooks';
import { useTheme } from '@emotion/react';
import { Typography } from '../../Typography';
import { scaledPixels } from '@/utils';


interface ButtonContentProps {
  ref?: Ref<View>;
  children: ReactNode | string;
  isFocused: boolean;
  iconName?: TIconName;
}

export const ButtonContent = ({
  ref,
  children,
  isFocused,
  iconName,
}: ButtonContentProps) => {
  const animation = useFocusAnimation(isFocused);
  const theme = useTheme();
  const color = isFocused
    ? theme.colors.background.black
    : theme.colors.background.white;

  return (
    <Container isFocused={isFocused} style={animation} ref={ref}>
      {typeof children === 'string' ? (
        <Typography variant='title' color={color} fontWeight='strong'>
          {children}
        </Typography>
      ) : (
        <View>{children}</View>
      )}

      {iconName && <Icon icon={iconName} color={color} />}
    </Container>
  );
};

const Container = styled(Animated.View)<{ isFocused: boolean }>(
  ({ isFocused, theme }) => ({
    alignSelf: 'baseline',
    backgroundColor: isFocused
      ? theme.colors.background.white
      : theme.colors.background.black,
    padding: theme.spacings.small,
    borderRadius: scaledPixels(12),
    minWidth: theme.sizes.button.minWidth,
    paddingVertical: theme.sizes.button.paddingVertical,
    paddingHorizontal: theme.sizes.button.paddingHorizontal,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: scaledPixels(2),
    borderColor: theme.colors.background.white,
    flexDirection: 'row',
    gap: theme.spacings.small,
  }),
);
