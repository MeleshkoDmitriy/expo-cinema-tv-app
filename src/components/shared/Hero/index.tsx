import styled from '@emotion/native';
import { Typography } from '../Typography';
import { useTheme } from '@emotion/react';

interface HeroProps {
  title: string;
}

export const Hero = ({ title }: HeroProps) => {
  const theme = useTheme();

  return (
    <Container>
      <Typography
        variant='hero'
        fontWeight='strong'
        color={theme.colors.background.white}
        isUpperCase
      >
        {title}
      </Typography>
    </Container>
  );
};

const Container = styled.View(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacings.medium,
}));
