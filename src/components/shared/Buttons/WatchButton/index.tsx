import {
  useWatchlistActions,
  useWatchlistStore,
} from '@/features/video-player/store';
import { TMovie } from '@/types';
import { Button } from '../Button';
import { useTranslation } from 'react-i18next';

interface WatchButtonProps {
  movie: TMovie;
}

export const WatchButton = ({ movie }: WatchButtonProps) => {
  const { t } = useTranslation();

  const isInWatchlist = useWatchlistStore((state) =>
    state.watchlist.some((m) => m.id === movie.id),
  );
  const { toggleWatchlistMovie } = useWatchlistActions();
  const watchlistButtonText = isInWatchlist
    ? t('common.removeWatchlist')
    : t('common.addWatchlist');

  return (
    <Button iconName='WatchLater' onSelect={() => toggleWatchlistMovie(movie)}>
      {watchlistButtonText}
    </Button>
  );
};
