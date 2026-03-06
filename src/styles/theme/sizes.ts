import { scaledPixels } from '@/utils';

export const sizes = {
  carouselItem: {
    width: scaledPixels(450),
    height: scaledPixels(250),
  },
  menu: {
    open: scaledPixels(400),
    closed: scaledPixels(120),
    icon: scaledPixels(30),
  },
  button: {
    minWidth: scaledPixels(250),
    paddingVertical: scaledPixels(15),
    paddingHorizontal: scaledPixels(30),
  }
};
