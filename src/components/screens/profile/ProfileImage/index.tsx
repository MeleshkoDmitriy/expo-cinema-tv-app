import FastImage from 'react-native-fast-image';
import styled from '@emotion/native';
import { scaledPixels } from '@/utils';
import { SpatialNavigationFocusableView } from 'react-tv-space-navigation';
import { Box, Icon, Spacer, Typography } from '@/components/shared';
import { TAvatar } from '@/types';
import { useTheme } from '@emotion/react';
import { BlurView } from 'expo-blur';

interface ProfileImageProps {
  avatar: TAvatar;
  onSelect: () => void;
}

export const ProfileImage = ({ avatar, onSelect }: ProfileImageProps) => {
  const { image, name } = avatar;
  const theme = useTheme();

  return (
    <SpatialNavigationFocusableView onSelect={onSelect}>
      {({ isFocused, isRootActive }) => (
        <Box alignItems='center' justifyContent='center'>
          <Wrapper>
            <Container isFocused={isFocused && isRootActive}>
              <StyledFastImage
                source={image}
                resizeMode={FastImage.resizeMode.cover}
              />
            </Container>
            <BlurCircle isVisible={isFocused && isRootActive}>
              <Icon icon='Edit' color={theme.colors.primary.mainHover} />
            </BlurCircle>
          </Wrapper>
          <Spacer gap='medium' />

          <Typography
            variant='title'
            fontWeight='strong'
            isUpperCase
            color={
              isFocused && isRootActive
                ? theme.colors.primary.mainHover
                : theme.colors.background.white
            }
          >
            {name}
          </Typography>
        </Box>
      )}
    </SpatialNavigationFocusableView>
  );
};

const Wrapper = styled.View(() => ({
  width: scaledPixels(350),
  height: scaledPixels(350),
  position: 'relative',
}));

const Container = styled.View<{ isFocused: boolean }>(
  ({ theme, isFocused }) => ({
    width: scaledPixels(350),
    height: scaledPixels(350),
    borderWidth: scaledPixels(3),
    borderColor: isFocused
      ? theme.colors.primary.mainHover
      : theme.colors.background.white,
    borderRadius: '50%',
    overflow: 'hidden',
    padding: scaledPixels(3),
  }),
);

const StyledFastImage = styled(FastImage)(() => ({
  width: scaledPixels(350),
  height: scaledPixels(350),
  borderRadius: scaledPixels(175),
}));

const BlurCircle = styled(BlurView)<{ isVisible: boolean }>(
  ({ isVisible = false }) => ({
    display: isVisible ? 'flex' : 'none',
    width: scaledPixels(50),
    height: scaledPixels(50),
    borderRadius: scaledPixels(25),
    overflow: 'hidden',
    position: 'absolute',
    bottom: 30,
    right: 30,
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  }),
);
