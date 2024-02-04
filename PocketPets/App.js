//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import InfoPage from './components/InfoPage';
import HomePage from './components/HomePage';
import CameraPage from './components/CameraPage';
import ViewPage from './components/ViewPage';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";

//import StackNavigator from "./StackNavigator";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer> 
      <Stack.Navigator
        screenOptions={{headerShown: false}}
      >
        {/* <Stack.Screen name='HomePage' component={HomePage}/>
        <Stack.Screen name='CameraPage' component={CameraPage}/> */}
        <Stack.Screen name='InfoPage' component={InfoPage}/>
        <Stack.Screen name='ViewPage' component={ViewPage}/>
      </Stack.Navigator>

    </NavigationContainer>

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
 