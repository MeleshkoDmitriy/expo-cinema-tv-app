import { Direction } from '@bam.tech/lrud';
import { useIsFocused } from '@react-navigation/native';
import { ReactNode, useCallback } from 'react';
import { SpatialNavigationRoot } from 'react-tv-space-navigation';
import { useMenu } from '@/hooks';
import { SpatialNavigationKeyboardLocker } from './SpatialNavigationKeyboardLocker';
import { GoBack } from '../../navigation/GoBack';

interface ScreenConfigProps {
  children: ReactNode;
}

export const ScreenConfig = ({ children }: ScreenConfigProps) => {
  const isFocused = useIsFocused();
  const { isOpen: isMenuOpen, toggleMenu } = useMenu();

  const isActive = isFocused && !isMenuOpen;

  const onDirectionHandledWithoutMovement = useCallback(
    (movement: Direction) => {
      if (movement === 'left') {
        toggleMenu(true);
      }
    },
    [toggleMenu],
  );

  return (
    <SpatialNavigationRoot
      isActive={isActive}
      onDirectionHandledWithoutMovement={onDirectionHandledWithoutMovement}
    >
      <GoBack />
      <SpatialNavigationKeyboardLocker />
      {children}
    </SpatialNavigationRoot>
  );
};
