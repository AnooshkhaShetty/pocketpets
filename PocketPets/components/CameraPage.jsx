import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Button, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


const CameraPage = () => {

    return(
    <View>
            <Pressable onPress={openCamera}>
                <Text> Open Camera </Text>
            </Pressable>

    </View>
  )
};

const styles = StyleSheet.create({

});

export default CameraPage;