import styled from '@emotion/native';

export const Wrapper = styled.View<{ width: number; height: number }>(
  ({ width, height }) => ({
    width,
    height,
  }),
);
