import { useTheme } from '@emotion/react';
import { BlurBox } from '../../BlurBox';
import { Icon, TIconName } from '../../Icon';
import { FlatList } from 'react-native';
import { TIsMovieInList } from '@/types';
import { Spacer } from '../../Spacer';
import { STYLES } from '@/styles';

interface ItemBadgesProps {
  isLikedlistMovie: TIsMovieInList;
  isWatchlistMovie: TIsMovieInList;
  isFocused: boolean;
}

export const ItemBadges = ({
  isLikedlistMovie,
  isWatchlistMovie,
  isFocused,
}: ItemBadgesProps) => {
  const theme = useTheme();

  const badges: TIconName[] = [];
  if (isLikedlistMovie) badges.push('Like');
  if (isWatchlistMovie) badges.push('WatchLater');
  if (badges.length === 0) return null;

  const iconsColor = isFocused
    ? theme.colors.primary.mainHover
    : theme.colors.background.white;

  return (
    <FlatList
      data={badges}
      renderItem={({ item }) => (
        <BlurBox isFocused={isFocused}>
          <Icon icon={item} color={iconsColor} />
        </BlurBox>
      )}
      ItemSeparatorComponent={() => (
        <Spacer direction='horizontal' gap='small' />
      )}
      keyExtractor={(item) => item}
      horizontal
      scrollEnabled={false}
      style={STYLES.blurbox.position.cardBadges}
    />
  );
};
