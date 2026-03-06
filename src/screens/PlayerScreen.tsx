import { View } from 'react-native';
import { Screen, VideoPlayer } from '@/components';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@/navigation';
import styled from '@emotion/native';
import { DefaultFocus } from 'react-tv-space-navigation';
import { useHistorylistActions } from '@/store';
import { useEffect } from 'react';

interface PlayerScreenProps {
  route: RouteProp<RootStackParamList, 'Player'>;
}

export const PlayerScreen = ({ route }: PlayerScreenProps) => {
  const { movieInfo: movie } = route.params;
  const { setHistorylist } = useHistorylistActions();

  useEffect(() => {
    setHistorylist(movie);
  }, [movie]);

  return (
    <Screen isPlayer isSidebarMenuMargin={false}>
      <PlayerContainer>
        <DefaultFocus>
          <VideoPlayer movie={movie} />
        </DefaultFocus>
      </PlayerContainer>
    </Screen>
  );
};

const PlayerContainer = styled(View)({
  flex: 1,
});
