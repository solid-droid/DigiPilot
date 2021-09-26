import React, { useEffect } from 'react';
import { StyleSheet} from 'react-native';

import { Provider } from 'react-redux';
import store from './redux/store';


import {SafeAreaProvider} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack';

import MapScreens from './screens/MapScreens';
import HomeScreen from './screens/HomeScreen';
import NavigateScreen from './screens/NavigateScreen';
import { initSearch, addAllItems } from './services/search';

export default function App() {

  const Stack = createStackNavigator();

  useEffect(() => {
    initSearch();
    addAllItems();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
        <Stack.Navigator>
            <Stack.Screen
              name="Home" 
              component={HomeScreen} 
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Map" 
              component={MapScreens} 
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Nav" 
              component={NavigateScreen} 
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
