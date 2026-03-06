import {
  ProfileScreen,
  SearchScreen,
  HomeScreen,
  SettingsScreen,
} from '@/screens';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { Menu } from '@/components';

export type RootTabParamList = {
  Home: undefined;
  Search: undefined;
  Profile: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const RenderMenu = (props: BottomTabBarProps) => <Menu {...props} />;

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='Home'
      tabBar={RenderMenu}
    >
      <Tab.Screen name='Profile' component={ProfileScreen} />
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Search' component={SearchScreen} />
      <Tab.Screen name='Settings' component={SettingsScreen} />
    </Tab.Navigator>
  );
};
