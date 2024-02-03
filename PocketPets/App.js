//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import InfoPage from './components/InfoPage';
import HomePage from './components/HomePage';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";

//import StackNavigator from "./StackNavigator";

export default function App() {
  const Stack = createNativeStackNavigator();

  {/* <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View> */}
  return (

    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen name='InfoPage' component={InfoPage}/>
        <Stack.Screen name='Home' component={Home}/>
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
 