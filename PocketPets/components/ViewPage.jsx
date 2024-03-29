import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const initialImages = [
  require("../assets/images/dark1.png"),
  require("../assets/images/dark2.png"),
  require("../assets/images/dark3.png"),
  require("../assets/images/dark4.png"),
  require("../assets/images/dark5.png"),
  require("../assets/images/dark6.png"),
  require("../assets/images/dark7.png"),
  require("../assets/images/dark8.png"),
  require("../assets/images/dark9.png"),
  require("../assets/images/dark10.png"),
  require("../assets/images/dark11.png"),
  require("../assets/images/dark12.png"),
  require("../assets/images/dark13.png"),
  require("../assets/images/dark14.png"),
  require("../assets/images/dark15.png"),
];

const caughtImages = [
  require("../assets/images/caught1.png"),
  require("../assets/images/caught2.png"),
  require("../assets/images/caught3.png"),
  require("../assets/images/caught4.png"),
  require("../assets/images/caught5.png"),
  require("../assets/images/caught6.png"),
  require("../assets/images/caught7.png"),
  require("../assets/images/caught8.png"),
  require("../assets/images/caught9.png"),
  require("../assets/images/caught10.png"),
  require("../assets/images/caught11.png"),
  require("../assets/images/caught12.png"),
  require("../assets/images/caught13.png"),
  require("../assets/images/caught14.png"),
  require("../assets/images/caught15.png"),
];

export default function ViewPage({route}) {  
  const { unlocked } = route.params;
  console.log('view info: ' + unlocked);
  const navigation = useNavigation();

  const [vision, setVision] = useState(unlocked.unlocked);
  console.log(vision);
  const [caught, setCaught] = useState(Array(initialImages.length).fill(false));

  useEffect(() => {
    // change caught based on vision indices
      const newCaught = [...caught];
      for (let i = 0; i <= vision.length; i++) {
        console.log(vision[i]);
        newCaught[vision[i] - 1] = true;
      }
      setCaught(newCaught);
  }, [])

  const handleCatch = (index) => {
/*     if (index == 0) {
      const newCaught = [...caught];
      newCaught[3] = true;
      newCaught[7] = true;
      setCaught(newCaught);
    } */
    if (caught[index] == false) {
      return;
    }
    else if (caught[index]){
      navigation.navigate('InfoPage', { unlockedCats: vision, clickedCat: index+1 });
    }

    /* const newCaught = [...caught];
    newCaught[index] = true;
    setCaught(newCaught); */ // changes to caught are made after camera and model work
  };

  return (
    <View style={styles.container}>
      <Pressable style={{paddingTop: '15%',}} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size="50" color="#000"> </Ionicons>
      </Pressable>
      <View style={styles.gridContainer}>
        {initialImages.map((image, index) => (
          <TouchableOpacity
            key={index}
            style={styles.gridItem}
            onPress={() => handleCatch(index)}
          >
            <Image source={caught[index] ? caughtImages[index] : image} style={styles.gridImage} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9C6C7",
    padding: 10,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    //paddingTop: '15%',
  },
  gridItem: {
    width: "30%", // Adjust as needed
    aspectRatio: 1, // Maintain aspect ratio
    margin: 5,
    backgroundColor: "#44AA99",
    borderRadius: 10,
    overflow: "hidden",
  },
  gridImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
