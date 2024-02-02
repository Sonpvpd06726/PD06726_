// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from './src/screens/lab6/MainScreen';
import DetailScreen from './src/screens/lab6/DetailScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="MainScreen">
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="MainStack">
        <Drawer.Screen name="MainStack" component={MainStack} />
        <Drawer.Screen name="Home" component={MainStack} />
        <Drawer.Screen name="Chat" component={MainStack} />
        <Drawer.Screen name="Setting" component={MainStack} />
        <Drawer.Screen name="Help" component={MainStack} />
        
        {/* Add additional Drawer.Screen components for other screens if needed */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
