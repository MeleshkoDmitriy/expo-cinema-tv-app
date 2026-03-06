import { BlurView } from 'expo-blur';
import { VideoPlayerButton } from './VideoPlayerButton';
import styled from '@emotion/native';
import { TMovie } from '@/types';
import { Box, LikeButton, WatchButton } from '@/components/shared';
import { SpatialRow } from '@/components/navigation';
import { scaledPixels } from '@/utils';

interface VideoPlayerControlsProps {
  isPlaying: boolean;
  onSelect: () => void;
  movie: TMovie;
}

export const VideoPlayerControls = ({
  isPlaying,
  onSelect,
  movie,
}: VideoPlayerControlsProps) => {
  return (
    <Box direction='horizontal' justifyContent='center'>
      <ControlsContainer intensity={20} tint='dark'>
        <SpatialRow direction='horizontal'>
          <VideoPlayerButton isPlaying={isPlaying} onSelect={onSelect} />
          <LikeButton movie={movie} />
          <WatchButton movie={movie} />
        </SpatialRow>
      </ControlsContainer>
    </Box>
  );
};

const ControlsContainer = styled(BlurView)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacings.big,
  paddingVertical: theme.spacings.medium,
  paddingHorizontal: theme.spacings.big,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: scaledPixels(30),
  overflow: 'hidden',
}));
