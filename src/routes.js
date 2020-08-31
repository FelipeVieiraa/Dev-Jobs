import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import List from './pages/List';
import Detail from './pages/Detail';
import WebGit from './pages/WebGit';

export default function Routes() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="List"
          component={List}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="Detail"
          component={Detail}
          options={{
            headerShown: true,
            title: 'VAGAS',
            headerStyle: {
              backgroundColor: '#416FD9',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen 
          name="WebGit"
          component={WebGit}
          options={{
            headerShown: true,
            title: 'Web Git',
            headerStyle: {
              backgroundColor: '#416FD9',
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}