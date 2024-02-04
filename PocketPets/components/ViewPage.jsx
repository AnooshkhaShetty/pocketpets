import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

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

export default function ViewPage() {
  const [caught, setCaught] = useState(Array(initialImages.length).fill(false));

  const handleCatch = (index) => {
    const newCaught = [...caught];
    newCaught[index] = true;
    setCaught(newCaught);
  };

  return (
    <View style={styles.container}>
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
    paddingTop: '15%',
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
