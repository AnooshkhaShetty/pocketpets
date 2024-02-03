import {
    View,
    Text,
    SafeAreaView,
    Pressable,
    Image,
    ScrollView,
    StyleSheet,
    Dimensions,
  } from "react-native";
  import React, { useState } from "react";
  import { Ionicons } from "@expo/vector-icons";
  import { MaterialIcons } from "@expo/vector-icons";
  import { MaterialCommunityIcons } from "@expo/vector-icons";
  import { useNavigation } from "@react-navigation/native";


export default function InfoPage() {
    const [currentCat, setCurrentCat] = useState(1);

    function getCatInfo() {
        return(
            <View>
                
            </View>
        )
    }


    return(
        <SafeAreaView style={styles.container}> 

            
                <Image
                    source={require('../assets/images/abyss_rect.png')}  // Replace with the actual path to your image
                    style={styles.image}
                />
            

            <View style={{backgroundColor: "#44AA99", width: '100%', height: 100, position: 'absolute', top: 0}}>
                <Image
                    source={require('../assets/images/pocket_pets_info.png')}
                    style={{width: 150, height: 20, marginLeft: 15, marginTop: 20,}}
                />

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Pressable style={{marginLeft: 320,}}>
                        <Ionicons name="chevron-back" size="40" color="#FFF"/>
                    </Pressable>
                    <Pressable>
                        <Ionicons name="chevron-forward" size="40" color="#FFF"/>
                    </Pressable>
                </View>
            </View>


        </SafeAreaView>
    )
}

const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
    info_tabs: {
        width: 200,
        height: 40,
        backgroundColor: "#CC6777",
        position: 'absolute',
        right: 30,
        top: 150,
        //justifyContent: 'flex-end',
    },
    image: {
        width: width,  // Set the width to the screen width
        height: height,  // Set the height to the screen height
        resizeMode: 'contain',  // Adjust the resizeMode as needed (cover, contain, stretch, etc.)
      },
})