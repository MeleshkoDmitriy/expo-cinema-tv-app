import { TMovie } from '@/types';
import { Box, Typography } from '@/components/shared';
import styled from '@emotion/native';
import { InfoBadgesList } from './InfoBadgesList';
import { formatDuration } from '@/features/video-player/utils';
import { useTranslation } from 'react-i18next';

type InterstitialMovieInfoProps = Pick<
  TMovie,
  'duration' | 'genres' | 'release_date' | 'tags'
>;

export const InterstitialMovieInfo = ({
  duration,
  genres,
  release_date,
  tags,
}: InterstitialMovieInfoProps) => {
  const formattedDuration = formatDuration(duration);
  const { t } = useTranslation();

  return (
    <Container>
      <Box direction='horizontal'>
        <Typography fontWeight='strong'>{formattedDuration}</Typography>
        <Typography>{' | '}</Typography>
        <Typography>{t('screens.interstitial.releaseDate')}</Typography>
        <Typography> : </Typography>
        <Typography>{release_date}</Typography>
      </Box>
      <Box>
        <InfoBadgesList badges={[...genres, ...tags]} />
      </Box>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => ({
  flexDirection: 'column',
  gap: theme.spacings.medium,
}));
