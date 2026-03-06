export const getProgressBarPercentage = (
  current: number,
  total: number,
): string => {
  if (!total || total <= 0) return '0%';
  const percentage = (current / total) * 100;
  return `${Math.min(100, Math.max(0, percentage))}%`;
};
