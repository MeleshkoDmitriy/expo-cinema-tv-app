import styled from '@emotion/native';
import { scaledPixels } from '@/utils';

export const ProgressLine = styled.View<{
  widthPercents: number;
  zIndex: number;
  color: string;
}>(({ widthPercents, zIndex, color }) => ({
  position: 'absolute',
  left: 0,
  top: 0,
  height: '100%',
  width: `${widthPercents}%`,
  maxWidth: '100%',
  backgroundColor: color,
  borderRadius: scaledPixels(30),
  zIndex: zIndex,
}));
