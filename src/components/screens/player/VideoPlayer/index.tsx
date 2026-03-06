import { useVideoPlayer, VideoView } from 'expo-video';
import { useEvent } from 'expo';
import { StyleSheet } from 'react-native';
import styled from '@emotion/native';
import { TMovie } from '@/types';
import { Loader, Typography } from '@/components/shared';
import {
  ProgressBar,
  SupportBar,
  VideoFormatBadge,
  VideoPlayerControls,
} from '@/features';
import { useTranslation } from 'react-i18next';

interface VideoPlayerProps {
  movie: TMovie;
}

export const VideoPlayer = ({ movie }: VideoPlayerProps) => {
  const { t } = useTranslation();

  const player = useVideoPlayer(movie.video_url, (player) => {
    player.loop = false;
    player.timeUpdateEventInterval = 0.05;
    player.play();
  });

  const { isPlaying } = useEvent(player, 'playingChange', {
    isPlaying: player.playing,
  });

  const { status, error } = useEvent(player, 'statusChange', {
    status: player.status,
  });

  const { bufferedPosition, currentTime } = useEvent(player, 'timeUpdate', {
    bufferedPosition: player.bufferedPosition,
    currentTime: player.currentTime,
    currentLiveTimestamp: player.currentLiveTimestamp,
    currentOffsetFromLive: player.currentOffsetFromLive,
  });

  const { muted } = useEvent(player, 'mutedChange', {
    muted: player.muted,
  });

  const toggleMute = () => {
    player.muted = !player.muted;
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      player.pause();
    } else {
      player.play();
    }
  };

  if (error) {
    return (
      <Container style={styles.centerContainer}>
        <VideoFormatBadge videoUrl={movie.video_url} />
        <Typography fontWeight='strong' variant='hero'>
          {t('screens.player.errorMessage')}
        </Typography>
      </Container>
    );
  }

  if (status === 'idle' || status === 'loading') {
    return (
      <Container style={styles.centerContainer}>
        <Loader />
      </Container>
    );
  }

  return (
    <Container>
      <VideoView
        player={player}
        nativeControls={false}
        // allowsFullscreen
        //@ts-ignore
        fullscreenOptions
        allowsPictureInPicture
        style={styles.video}
      />
      <VideoPlayerControls
        movie={movie}
        onSelect={handlePlayPause}
        isPlaying={isPlaying}
      />
      <VideoFormatBadge videoUrl={movie.video_url} />
      <SupportBar
        currentTime={player.currentTime}
        duration={player.duration}
        isMuted={muted}
        toggleMute={toggleMute}
      />
      <ProgressBar
        currentTime={currentTime}
        bufferedPosition={bufferedPosition}
        duration={player.duration}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  video: {
    flex: 1,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Container = styled.View(({}) => ({
  flex: 1,
}));
