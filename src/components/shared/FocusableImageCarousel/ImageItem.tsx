import { memo, Ref } from 'react';
import { TAvatar } from '@/types';
import { View } from 'react-native';
import {
  useFocusAnimation,
} from '@/hooks';
import { ItemContainer } from '../FocusableCarousel/Item/ItemContainer';
import { ItemImage } from '../FocusableCarousel/Item/ItemImage';
import { ItemLabel } from '../FocusableCarousel/Item/ItemLabel';

interface ImageItemProps {
  avatar: TAvatar;
  isFocused?: boolean;
  label?: string;
  ref?: Ref<View>;
  isItemBadges?: boolean;
}

export const ImageItem = memo(
  ({
    isFocused = false,
    avatar,
    label,
    ref,
  }: ImageItemProps) => {
    const image = avatar.image;
    const scaleAnimation = useFocusAnimation(isFocused);

    return (
      <ItemContainer isFocused={isFocused} ref={ref} style={scaleAnimation}>
        <ItemImage source={image} accessible />
        {label && <ItemLabel label={label} isFocused={isFocused} />}
      </ItemContainer>
    );
  },
);
