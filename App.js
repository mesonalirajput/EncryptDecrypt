import React from 'react';
import {StyleSheet} from 'react-native';
import EncryptScreen from './Screens/EncryptScreen';
import DecryptScreen from './Screens/DecryptScreen';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useState} from 'react/cjs/react.development';

const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Drawerr />
    </NavigationContainer>
  );
};

const Drawerr = () => {
  return (
    <Drawer.Navigator initialRouteName="Encrypt">
      <Drawer.Screen name="Encrypt" options={{headerShown: false}}>
        {props => <EncryptScreen {...props} />}
      </Drawer.Screen>
      <Drawer.Screen name="Decrypt" options={{headerShown: false}}>
        {props => <DecryptScreen {...props} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};
const styles = StyleSheet.create({});

export default App;
