import { Box, Spacer } from '@/components/shared';
import { STYLES } from '@/styles';
import { MuteButton } from '../MuteButton';
import { TimeIndicator } from '../TimeIndicator';

interface SupportBarProps {
  isMuted: boolean;
  toggleMute: () => void;
  currentTime: number;
  duration: number;
}

export const SupportBar = ({
  isMuted,
  toggleMute,
  currentTime,
  duration,
}: SupportBarProps) => {
  return (
    <Box direction='horizontal' style={STYLES.blurbox.position.supportBar}>
      <MuteButton isMuted={isMuted} onSelect={toggleMute} />
      <Spacer gap='medium' />
      <TimeIndicator currentTime={currentTime} duration={duration} />
    </Box>
  );
};
