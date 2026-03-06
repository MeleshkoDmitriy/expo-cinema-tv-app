import type { TTheme } from '@/styles';

declare module '@emotion/react' {
  export interface Theme extends TTheme {}
}
