import * as React from 'react';
import { View, Text } from 'react-native';
// import * as Reanimated from 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Screen/Splash';
import HomeScreen from '../Screen/HomeScreen';
import Homesecond from '../Screen/Homesecond';
import Order from '../Screen/Order';
import Menu from '../Screen/Menu';



import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}


const Stack = createNativeStackNavigator();
function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Order" component={Order} options={{ headerShown: false }} />
        <Stack.Screen name="MyDrawer" component={MyDrawer} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;