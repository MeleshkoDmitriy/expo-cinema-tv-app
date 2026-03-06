import '@/config';
import { NavigationContainer } from '@react-navigation/native';
import { useWindowDimensions } from 'react-native';
import { useTVPanEvent } from './src/hooks/PanEvent';
import { StackNavigator } from './src/navigation';
import { AppProvider } from './src/providers';
import { Wrapper } from './src/components';


export default function App() {
  useTVPanEvent();
  const { height, width } = useWindowDimensions();

  return (
    <AppProvider>
      <NavigationContainer>
        <Wrapper width={width} height={height}>
          <StackNavigator />
        </Wrapper>
      </NavigationContainer>
    </AppProvider>
  );
}

