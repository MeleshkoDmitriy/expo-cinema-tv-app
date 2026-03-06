import { BlurBox, Typography } from '@/components/shared';
import { STYLES } from "@/styles";
import { formatPlayerTime } from "../../utils";


interface TimeIndicatorProps {
  currentTime: number;
  duration: number;
}

export const TimeIndicator = ({
  currentTime,
  duration,
}: TimeIndicatorProps) => {
  const current = formatPlayerTime(currentTime);
  const total = formatPlayerTime(duration);

  return (
    <BlurBox styles={STYLES.blurbox.position.timeIndicator}>
      <Typography fontWeight='strong'>{current}</Typography>
      <Typography fontWeight='strong'>{' | '}</Typography>
      <Typography fontWeight='strong'>{total}</Typography>
    </BlurBox>
  );
};
