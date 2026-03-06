export const getProgressPercents = (
  duration: number,
  value: number,
): number => {
  return duration > 0 ? (value / duration) * 100 : 0;
};
