
import { Stack } from 'expo-router';
import { createContext, useState } from 'react';
import type { MenuItem } from '../data/menuData';

type MenuContextType = {
  menuItems: MenuItem[];
  setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
};

export const MenuContext = createContext<MenuContextType | undefined>(
  undefined
);

export default function RootLayout() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  return (
    <MenuContext.Provider value={{ menuItems, setMenuItems }}>
      <Stack />
    </MenuContext.Provider>
  );
}