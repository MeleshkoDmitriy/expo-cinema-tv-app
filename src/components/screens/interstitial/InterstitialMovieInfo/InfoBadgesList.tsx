import { TMovie } from '@/types';
import styled from '@emotion/native';
import { InfoBadge } from './InfoBadge';

type TBadgesList = TMovie['tags'] | TMovie['genres'];

interface InfoBadgesList {
  badges: TBadgesList;
}

export const InfoBadgesList = ({ badges }: InfoBadgesList) => {
  return (
    <Container>
      {badges.map((badge) => (
        <InfoBadge item={badge} key={badge} />
      ))}
    </Container>
  );
};

const Container = styled.View(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacings.medium,
}));
