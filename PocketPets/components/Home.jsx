import {
    View,
    Text,
    SafeAreaView,
    Pressable,
    Image,
    ScrollView,
    StyleSheet,
  } from "react-native";
  import React, { useState } from "react";
  import { Ionicons } from "@expo/vector-icons";
  import { MaterialIcons } from "@expo/vector-icons";
  import { MaterialCommunityIcons } from "@expo/vector-icons";
  import { useNavigation } from "@react-navigation/native";
  //import { useFonts } from 'expo-font';

export default function Home() {

  return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.center_text}>
          <Text style={styles.title}> Hello world! </Text>
          <View style={styles.rectangle}>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#D9C6C7",
      height: '100%',
      width: '100%',
    },
  title: {
    fontSize: 18,
    fontFamily: "Sans-Serif",
    fontWeight: 400,
  },
  center_text: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  rectangle: {
    width: 200,
    height: 100,
    backgroundColor: "#FFF",
  }
  })