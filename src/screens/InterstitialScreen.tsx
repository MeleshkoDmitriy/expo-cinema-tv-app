import {
  Box,
  Button,
  FocusableCarousel,
  InterstitialImage,
  InterstitialMovieInfo,
  LikeButton,
  Screen,
  Spacer,
  Typography,
  WatchButton,
} from '@/components';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigation';
import styled from '@emotion/native';
import { DefaultFocus } from 'react-tv-space-navigation';
import { mockRokuData } from '@/constants';
import { useTranslation } from 'react-i18next';

interface InterstitialScreenProps {
  route: RouteProp<RootStackParamList, 'Interstitial'>;
}

export const InterstitialScreen = ({ route }: InterstitialScreenProps) => {
  const { t } = useTranslation();

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { movieInfo: movie } = route.params;
  const {
    description,
    title,
    duration,
    genres,
    image_url,
    release_date,
    tags,
  } = movie;

  const youMayAlsoLike = [
    ...mockRokuData.series,
    ...mockRokuData.shorts,
    ...mockRokuData.movies,
  ];

  return (
    <Screen isSidebarMenuMargin={false}>
      <Box padding='medium'>
        <Container direction='horizontal'>
          <InterstitialImage image={image_url} />

          <DefaultFocus>
            <InfoContainer>
              <Typography variant='hero' fontWeight='strong'>
                {title}
              </Typography>
              <Spacer gap='medium' />

              <Typography variant='body'>{description}</Typography>
              <Spacer gap='medium' />

              <InterstitialMovieInfo
                duration={duration}
                genres={genres}
                release_date={release_date}
                tags={tags}
              />
              <Spacer gap='medium' />

              <Button
                iconName='Play'
                onSelect={() => navigation.push('Player', { movieInfo: movie })}
              >
                {t('screens.player.play')}
              </Button>
              <Spacer gap='medium' />

              <LikeButton movie={movie} />
              <Spacer gap='medium' />

              <WatchButton movie={movie} />
              <Spacer gap='medium' />
            </InfoContainer>
          </DefaultFocus>
        </Container>

        <Spacer gap='medium' />
        <FocusableCarousel data={youMayAlsoLike} title='You may also like' />
      </Box>
    </Screen>
  );
};

const Container = styled(Box)(({ theme }) => ({
  height: '60%',
  gap: theme.spacings.medium,
}));

const InfoContainer = styled(Box)(({ theme }) => ({
  width: '50%',
}));
