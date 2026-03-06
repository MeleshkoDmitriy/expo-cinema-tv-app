import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TMovie } from '@/types';
import { theme } from '@/styles/index';
import { TabNavigator } from './RootTab';
import { EditAvatarScreen, InterstitialScreen, PlayerScreen } from '@/screens';

export type RootStackParamList = {
  TabNavigator: undefined;
  Interstitial: { movieInfo: TMovie };
  Player: { movieInfo: TMovie };
  EditAvatar: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme.colors.background.main,
        },
      }}
      initialRouteName='TabNavigator'
    >
      <Stack.Screen name='TabNavigator' component={TabNavigator} />
      <Stack.Screen name='Interstitial' component={InterstitialScreen} />
      <Stack.Screen name='Player' component={PlayerScreen} />
      <Stack.Screen name='EditAvatar' component={EditAvatarScreen} />
    </Stack.Navigator>
  );
};
