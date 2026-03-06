import {
  DefaultFocus,
  SpatialNavigationScrollView,
} from 'react-tv-space-navigation';
import { Box, FocusableCarousel, Hero, Screen, Spacer } from '@/components';
import { Fragment } from 'react';
import { useLikedlist, useWatchlist } from '@/features';
import { mockRokuData } from '@/constants';
import { useTranslation } from 'react-i18next';

export const HomeScreen = () => {
  const { t } = useTranslation();

  const watchlist = useWatchlist();
  const likedlist = useLikedlist();

  const data = [
    {
      content: mockRokuData.shorts,
      title: t('content.shortsRoku'),
    },
    {
      content: watchlist,
      title: t('content.watchLater'),
    },
    {
      content: likedlist,
      title: t('content.likedContent'),
    },
    {
      content: mockRokuData.series,
      title: t('content.rokuSeries'),
    },
    {
      content: mockRokuData.movies,
      title: t('content.rokuMovies'),
    },
  ];

  return (
    <Screen>
      <Hero title={t('screens.home.heroTitle')} />
      <DefaultFocus>
        <SpatialNavigationScrollView offsetFromStart={140}>
          <Box padding='small'>
            {data.map((item) => (
              <Fragment key={item.title}>
                <FocusableCarousel data={item.content} title={item.title} />
                {item.content.length > 0 && <Spacer gap='big' />}
              </Fragment>
            ))}
          </Box>
        </SpatialNavigationScrollView>
      </DefaultFocus>
    </Screen>
  );
};
