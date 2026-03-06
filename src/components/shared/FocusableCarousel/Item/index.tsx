import { memo, Ref } from 'react';
import { TMovie } from '@/types';
import { View } from 'react-native';
import {
  useFocusAnimation,
} from '@/hooks';
import { ItemContainer } from './ItemContainer';
import { ItemImage } from './ItemImage';
import { ItemLabel } from './ItemLabel';
import { ItemBadges } from './ItemBadges';
import { useLikedlistActions, useWatchlistActions } from '@/features/video-player/store';

interface ItemProps {
  movie: TMovie;
  isFocused?: boolean;
  label?: string;
  ref?: Ref<View>;
  isItemBadges?: boolean;
}

export const Item = memo(
  ({
    isFocused = false,
    movie,
    label,
    ref,
    isItemBadges = true,
  }: ItemProps) => {
    const image = movie.image_url;
    const scaleAnimation = useFocusAnimation(isFocused);

    const { isInWatchlist } = useWatchlistActions();
    const { isInLikedlist } = useLikedlistActions();

    const isWatchlistMovie = isInWatchlist(movie.id);
    const isLikedlistMovie = isInLikedlist(movie.id);

    return (
      <ItemContainer isFocused={isFocused} ref={ref} style={scaleAnimation}>
        <ItemImage source={image} accessible />
        {label && <ItemLabel label={label} isFocused={isFocused} />}
        {isItemBadges && (
          <ItemBadges
            isWatchlistMovie={isWatchlistMovie}
            isLikedlistMovie={isLikedlistMovie}
            isFocused={isFocused}
          />
        )}
      </ItemContainer>
    );
  },
);
