import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import {useState, useEffect} from "react";
import { useNavigation } from "@react-navigation/native";
import { getFirestore, doc, getDoc, onSnapshot } from "firebase/firestore";
import { app, db } from '../firebase_config.js';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
//import firestore from "@react-native-firebase/firestore";

export default function Home() {
  const navigation = useNavigation();
  const [myData, setMyData] = useState();
  const [update, setUpdate] = useState(true);

  const db = getFirestore();

  useEffect(() => {
    const fetchData = async () => {
    try {
      const docRef = doc(db, "data", "data");
      const docSnap = await getDoc(docRef);
      console.log('here');

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setMyData(docSnap.data());
        setUpdate(false);
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error getting document:", error);
    }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/pets_logo.png")}
        style={styles.topImage}
      />

      <View style={styles.centerRectangle}>
        <View style={styles.innerRectangle}>
          <Image
            source={require("../assets/images/MostRecentCatch.png")}
            style={styles.additionalImage}
          />

          <Image
            source={require("../assets/images/cat.png")}
            style={styles.smallerRectangleImage}
          />
        </View>
      </View>

      <View style={styles.bottomButtonsContainer}>
        <Pressable onPress={() => navigation.navigate('CameraPage')} style={styles.circleButton}>
          <Image
            source={require("../assets/images/camera.png")}
            style={styles.circleImage}
          />
        </Pressable>
        <Pressable style={styles.circleButton} onPress={() => navigation.navigate('ViewPage' , { unlocked: myData })}>
          <Image
            source={require("../assets/images/viewphotos.png")}
            style={styles.circleImage}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9C6C7",
  },
  topImage: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
    marginTop: 80,
  },
  centerRectangle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerRectangle: {
    width: 320,
    height: 450,
    backgroundColor: "#44AA99",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  additionalImage: {
    width: 200,
    height: 85,
    resizeMode: "contain",
    position: "absolute",
    top: 30,

  },
  smallerRectangleImage: {
    width: 230,
    height: 260,
    resizeMode: "cover",
    borderRadius: 10,
    marginTop: 80,
  },
  bottomButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    //padding: -10,
  },
  circleButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#44AA99",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40, 
  },
  circleImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    borderRadius: 0.01,
  },
});
