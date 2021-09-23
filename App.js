import React from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack';
import MapScreens from './screens/MapScreens';


export default function App() {

  const Stack = createStackNavigator();
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
