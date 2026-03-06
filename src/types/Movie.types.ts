import { ImageSourcePropType } from 'react-native';

export type TMovie = {
  id: string,
  title: string,
  description: string,
  image_url: ImageSourcePropType,
  video_url: string,
  duration: number;
  release_date: string;
  genres: string[];
  tags: string[];
}