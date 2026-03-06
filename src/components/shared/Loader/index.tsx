import { useTheme } from '@emotion/react';
import { ActivityIndicator } from 'react-native';

export const Loader = () => {
  const theme = useTheme();

  return <ActivityIndicator color={theme.colors.primary.main} size='large' />;
};
