import { Dimensions } from 'react-native';

export const screen = Dimensions.get('window');
const scale = (screen.width || 1920) / 1920;

export const scaledPixels = (pixels: number) => pixels * scale;