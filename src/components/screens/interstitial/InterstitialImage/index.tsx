import styled from '@emotion/native';
import { scaledPixels } from '@/utils';
import { TMovie } from '@/types';

interface InterstitialImageProps {
  image: TMovie['image_url'];
}

export const InterstitialImage = ({ image }: InterstitialImageProps) => {
  return (
    <Container>
      <Image source={image} />
    </Container>
  );
};

const Container = styled.View({
  width: '50%',
  height: '100%',
  overflow: 'hidden',
  borderRadius: scaledPixels(20),
});

const Image = styled.Image({
  width: '100%',
  height: '100%',
  resizeMode: 'cover',
});
