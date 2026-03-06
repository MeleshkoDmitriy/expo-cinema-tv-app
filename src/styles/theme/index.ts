import { colors } from './colors';
import { sizes } from './sizes';
import { spacings } from './spacing';
import { typography } from './typography';

export const theme = {
  colors,
  sizes,
  spacings,
  typography,
};

export type TTheme = typeof theme;
