import { createContext, useMemo, useState } from 'react';

export interface MenuContextValue {
  isOpen: boolean;
  toggleMenu: (isOpen: boolean) => void;
}

export const MenuContext = createContext<MenuContextValue>({
  isOpen: false,
  toggleMenu: () => {},
});

interface MenuProviderProps {
  children: React.ReactNode;
}

export const MenuProvider = ({ children }: MenuProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const value = useMemo(() => {
    return { isOpen, toggleMenu: setIsOpen };
  }, [isOpen, setIsOpen]);

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
