export const getVideoFormat = (url: string): string => {
  const lastDot = url.lastIndexOf('.');
  const lastEquals = url.lastIndexOf('=');

  const index = Math.max(lastDot, lastEquals);

  return index !== -1 ? url.slice(index + 1) : 'Unknown';
};
