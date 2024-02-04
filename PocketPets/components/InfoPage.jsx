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
    const [currentCat, setCurrentCat] = useState(1); //change to props later
    const navigation = useNavigation();

    function getCat() {
        if (currentCat == 1) {
            return (
                <Image
                    source={require('../assets/images/abyss_rect.png')}  // Replace with the actual path to your image
                    style={styles.image}
                />
            )
        }
        else if (currentCat == 2) {
            return (
                <Image
                    source={require('../assets/images/am_bob_info.png')}  // Replace with the actual path to your image
                    style={styles.image}
                />
            )
        }
        else if (currentCat == 3) {
            return (
                <Image
                    source={require('../assets/images/am_shorthair_3.png')}  // Replace with the actual path to your image
                    style={styles.image}
                />
            )
        }
        else if (currentCat == 4) {
            return (
                <Image
                    source={require('../assets/images/bengal_4.png')}  // Replace with the actual path to your image
                    style={styles.image}
                />
            )
        }
        else if (currentCat == 5) {
            return (
                <Image
                    source={require('../assets/images/birman_5.png')}  // Replace with the actual path to your image
                    style={styles.image}
                />
            )
        }
        else if (currentCat == 6) {
            return (
                <Image
                    source={require('../assets/images/bombay_6.png')}  // Replace with the actual path to your image
                    style={styles.image}
                />
            )
        }
        else if (currentCat == 7) {
            return (
                <Image
                    source={require('../assets/images/brit_shorthair_7.png')}  // Replace with the actual path to your image
                    style={styles.image}
                />
            )
        }
        else if (currentCat == 8) {
            return (
                <Image
                    source={require('../assets/images/egypt_8.png')}  // Replace with the actual path to your image
                    style={styles.image}
                />
            )
        }
        else if (currentCat == 9) {
            return (
                <Image
                    source={require('../assets/images/maine_9.png')}  // Replace with the actual path to your image
                    style={styles.image}
                />
            )
        }
        else if (currentCat == 10) {
            return (
                <Image
                    source={require('../assets/images/persian_10.png')}  // Replace with the actual path to your image
                    style={styles.image}
                />
            )
        }
        else if (currentCat == 11) {
            return (
                <Image
                    source={require('../assets/images/ragdoll_11.png')}  // Replace with the actual path to your image
                    style={styles.image}
                />
            )
        }
        else if (currentCat == 12) {
            return (
                <Image
                    source={require('../assets/images/russian_12.png')}  // Replace with the actual path to your image
                    style={styles.image}
                />
            )
        }
        else if (currentCat == 13) {
            return (
                <Image
                    source={require('../assets/images/siamese_13.png')}  // Replace with the actual path to your image
                    style={styles.image}
                />
            )
        }
        else if (currentCat == 14) {
            return (
                <Image
                    source={require('../assets/images/sphynx_14.png')}  // Replace with the actual path to your image
                    style={styles.image}
                />
            )
        }
        else if (currentCat == 15) {
            return (
                <Image
                    source={require('../assets/images/tuxedo_15.png')}  // Replace with the actual path to your image
                    style={styles.image}
                />
            )
        }
    }

    function onForward() {
        if (currentCat == 15) {
            setCurrentCat(1);
        }
        else {
            setCurrentCat(currentCat + 1);
        }
    }

    function onBack() {
        if (currentCat == 1) {
            setCurrentCat(15);
        }
        else {
            setCurrentCat(currentCat - 1);
        }
    }


    return(
        <SafeAreaView style={styles.container}> 

            
                {getCat()}
            

            <View style={{backgroundColor: "#44AA99", width: '100%', height: 100, position: 'absolute', top: 0}}>
                <Pressable style={{marginTop: 8, marginLeft: 8, }} onPress={() => navigation.goBack()}>
                    <Ionicons name="close" size="40" color="#FFF"/>
                </Pressable>

                
                <Image
                    source={require('../assets/images/pocket_pets_info.png')}
                    style={{width: 150, height: 20, marginLeft: 15, marginTop: 60, position: 'absolute'}}
                />

                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 15,}}>
                    <Pressable onPress={onBack} style={{marginLeft: 320,}}>
                        <Ionicons name="chevron-back" size="40" color="#FFF"/>
                    </Pressable>
                    <Pressable onPress={onForward}>
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