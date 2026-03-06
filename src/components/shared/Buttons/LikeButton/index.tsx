import { useLikedlistActions, useLikedlistStore } from '@/features/video-player/store';
import { TMovie } from '@/types';
import { Button } from '../Button';
import { useTranslation } from 'react-i18next';

interface LikeButtonProps {
  movie: TMovie;
}

export const LikeButton = ({ movie }: LikeButtonProps) => {
  const { t } = useTranslation();

  const isInLikedlist = useLikedlistStore((state) =>
    state.likedlist.some((m) => m.id === movie.id),
  );
  const { toggleLikedlistMovie } = useLikedlistActions();
  const likedlistButtonText = isInLikedlist ? t('common.like') : t('common.liked');

  return (
    <Button iconName='Like' onSelect={() => toggleLikedlistMovie(movie)}>
      {likedlistButtonText}
    </Button>
  );
};
