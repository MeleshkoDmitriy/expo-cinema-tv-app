import { TIconName } from '@/components/shared';
import { RootTabParamList } from "@/navigation";

export interface MenuItems {
  labelKey: string;
  icon: TIconName;
}

export const menuItems: Record<keyof RootTabParamList, MenuItems> = {
  Home: { labelKey: 'common.home', icon: 'Home' },
  Search: { labelKey: 'common.search', icon: 'Search' },
  Profile: { labelKey: 'common.profile', icon: 'Profile' },
  Settings: { labelKey: 'common.settings', icon: 'Settings' },
};
