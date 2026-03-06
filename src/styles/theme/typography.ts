import { scaledPixels } from '@/utils';

export const typography = {
  hero: {
    regular: {
      fontSize: scaledPixels(40),
      fontWeight: 500,
      textTransform: 'uppercase',
    },
    strong: {
      fontSize: scaledPixels(40),
      fontWeight: 800,
      textTransform: 'uppercase',
    },
  },
  title: {
    regular: {
      fontSize: scaledPixels(32),
      fontWeight: 500,
    },
    strong: {
      fontSize: scaledPixels(32),
      fontWeight: 800,
    },
  },
  body: {
    regular: {
      fontSize: scaledPixels(24),
      fontWeight: 500,
    },
    strong: {
      fontSize: scaledPixels(24),
      fontWeight: 800,
    },
  },
  caption: {
    regular: {
      fontSize: scaledPixels(18),
      fontWeight: 500,
    },
    strong: {
      fontSize: scaledPixels(18),
      fontWeight: 800,
    },
  },
} as const;

export type TTypographyVariant = keyof typeof typography;
export type TTypographyWeight = 'regular' | 'strong';
