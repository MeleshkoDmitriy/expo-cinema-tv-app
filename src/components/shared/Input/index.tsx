import { useSearchActions, useSearchQuery } from '@/store';
import { scaledPixels } from '@/utils';
import styled from '@emotion/native';
import { SpatialNavigationFocusableView } from 'react-tv-space-navigation';
import { Typography } from '../Typography';
import { useEffect } from 'react';

export const Input = () => {
  const searchString = 'BrightScript';
  // const searchQuery = useSearchQuery();
  const { setSearchQuery } = useSearchActions();

  useEffect(() => {
    setSearchQuery(searchString);
  }, []);

  return (
    <SpatialNavigationFocusableView>
      {({ isFocused }) => (
        <Container isFocused={isFocused}>
          <StyledInput
          // value={searchQuery}
          // onChangeText={setSearchQuery}
          // placeholder='Search by title and description'
          // focusable={!isFocused}
          // editable={isFocused}
          >
            <Typography variant='hero' fontWeight='strong'>
              {searchString}
            </Typography>
          </StyledInput>
        </Container>
      )}
    </SpatialNavigationFocusableView>
  );
};

const Container = styled.View<{ isFocused: boolean }>(
  ({ theme, isFocused }) => ({
    backgroundColor: theme.colors.background.lightHover,
    width: '100%',
    height: scaledPixels(100),
    borderRadius: scaledPixels(20),
    borderWidth: scaledPixels(3),
    borderColor: isFocused
      ? theme.colors.primary.mainHover
      : theme.colors.background.white,
  }),
);

const StyledInput = styled.View(({ theme }) => ({
  height: '100%',
  width: '100%',
  backgroundColor: theme.colors.background.mainHover,
  fontSize: scaledPixels(50),
  borderColor: 'transparent',
  borderRadius: scaledPixels(20),
  justifyContent: 'center',
  alignItems: 'flex-start',
  paddingLeft: scaledPixels(30),
}));
