import { ReactNode } from 'react';
import { ScreenConfig } from './ScreenConfig';
import { ScreenContainer } from './ScreenContainer';

interface ScreenProps {
  children: ReactNode;
  isPlayer?: boolean;
  isSidebarMenuMargin?: boolean;
}

export const Screen = ({
  children,
  isPlayer = false,
  isSidebarMenuMargin = true,
}: ScreenProps) => {
  return (
    <ScreenContainer
      isPlayer={isPlayer}
      isSidebarMenuMargin={isSidebarMenuMargin}
    >
      <ScreenConfig>{children}</ScreenConfig>
    </ScreenContainer>
  );
};
