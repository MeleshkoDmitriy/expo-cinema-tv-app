import styled from '@emotion/native';
import { useWindowDimensions } from 'react-native';
import { ProgressLine } from './ProgressLine';
import { useTheme } from '@emotion/react';
import { getProgressPercents } from '../../utils';
import { scaledPixels } from '@/utils';

interface ProgressBarProps {
  bufferedPosition: number;
  currentTime: number;
  duration: number;
}

export const ProgressBar = ({
  bufferedPosition,
  currentTime,
  duration,
}: ProgressBarProps) => {
  const theme = useTheme();
  const { width: maxWidth } = useWindowDimensions();
  const currentTimePercents = getProgressPercents(duration, currentTime);
  const bufferTimePercents = getProgressPercents(duration, bufferedPosition);

  return (
    <Bar maxWidth={maxWidth}>
      <Track>
        <ProgressLine
          widthPercents={currentTimePercents}
          zIndex={2}
          color={theme.colors.primary.main}
        />
        <ProgressLine
          widthPercents={bufferTimePercents}
          zIndex={1}
          color={theme.colors.primary.light}
        />
      </Track>
    </Bar>
  );
};

const Bar = styled.View<{ maxWidth: number }>(({ maxWidth }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  maxWidth: maxWidth,
  width: '100%',
}));

const Track = styled.View(({}) => ({
  height: scaledPixels(5),
  width: '100%',
  position: 'relative',
}));
