import { SpatialNavigationFocusableView } from 'react-tv-space-navigation';
import { MenuButtonContent } from './MenuButtonContent';
import { TIconName } from '@/components/shared';

interface MenuButtonProps {
  icon: TIconName;
  isMenuOpen: boolean;
  isActive: boolean;
  onSelect?: () => void;
}

export const MenuButton = ({ icon, isMenuOpen, isActive, onSelect }: MenuButtonProps) => {
  return (
    <SpatialNavigationFocusableView onSelect={onSelect}>
      {({ isFocused }) => (
        <MenuButtonContent
          icon={icon}
          isFocused={isFocused}
          isMenuOpen={isMenuOpen}
          isActive={isActive}
        />
      )}
    </SpatialNavigationFocusableView>
  );
};
