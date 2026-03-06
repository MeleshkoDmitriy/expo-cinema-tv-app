import { SpatialNavigationFocusableView } from 'react-tv-space-navigation';
import { ButtonContent } from './ButtonContent';
import { ReactNode } from 'react';
import { TIconName } from '../../Icon';

interface ButtonProps {
  children: ReactNode | string;
  onSelect?: () => void;
  iconName?: TIconName;
}

export const Button = ({ children, onSelect, iconName }: ButtonProps) => {
  return (
    <SpatialNavigationFocusableView onSelect={onSelect}>
      {({ isFocused, isRootActive }) => (
        <ButtonContent
          isFocused={isFocused && isRootActive}
          iconName={iconName}
        >
          {children}
        </ButtonContent>
      )}
    </SpatialNavigationFocusableView>
  );
};
