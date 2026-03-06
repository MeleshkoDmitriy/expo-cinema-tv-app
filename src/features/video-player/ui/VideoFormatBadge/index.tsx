import { memo } from 'react';
import { getVideoFormat } from '../../utils';
import { STYLES } from '@/styles';
import { BlurBox, Typography } from '@/components/shared';

interface VideoFormatBadgeProps {
  videoUrl: string;
}

export const VideoFormatBadge = memo(({ videoUrl }: VideoFormatBadgeProps) => {
  const format = getVideoFormat(videoUrl);

  return (
    <BlurBox styles={STYLES.blurbox.position.videoFormatBadge}>
      <Typography fontWeight='strong' isUpperCase>
        {format}
      </Typography>
    </BlurBox>
  );
});
