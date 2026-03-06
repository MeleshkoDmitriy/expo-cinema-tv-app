import { ViewStyle } from 'react-native';
import { scaledPixels } from '@/utils';
import { theme } from '../theme';

export const blurbox = {
  position: {
    cardTitle: {
      position: 'absolute',
      top: scaledPixels(12),
      left: scaledPixels(12),
    } satisfies ViewStyle,
    cardBadges: {
      position: 'absolute',
      bottom: scaledPixels(12),
      left: scaledPixels(12),
    } satisfies ViewStyle,
    timeIndicator: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    } satisfies ViewStyle,
    videoFormatBadge: {
      position: 'absolute',
      top: theme.spacings.medium,
      left: theme.spacings.medium,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    } satisfies ViewStyle,
    muteButton: {
      position: 'absolute',
      top: theme.spacings.medium,
      right: theme.spacings.medium,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    } satisfies ViewStyle,
    supportBar: {
      position: 'absolute',
      bottom: theme.spacings.medium,
      right: theme.spacings.medium,
      flexDirection: 'row',
      gap: theme.spacings.small,
    } satisfies ViewStyle,
  },
};
