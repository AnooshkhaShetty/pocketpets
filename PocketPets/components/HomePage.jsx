import React, { useState } from "react";
import axios from "axios";
import { View, Text, Image, TouchableOpacity,  
    StyleSheet, Alert } from "react-native"; 
import * as ImagePicker from "expo-image-picker"; 

export default function Home() {
  // Stores the selected image URI 
  const [file, setFile] = useState(null); 
  
  // Stores any error message 
  const [error, setError] = useState(null); 

  const [resultData, setResultData] = useState(null);

  // Function to pick an image from  
  //the device's media library 
  const pickImage = async () => {
    // Request permission to access media library
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permission Denied", "Sorry, we need camera roll permission to upload images.");
    } else {
      // Launch image picker
      const result = await ImagePicker.launchImageLibraryAsync();

      if (!result.cancelled) {
        setFile(result.uri);

        // Create FormData object to send the image to the backend
        const formData = new FormData();
        formData.append("file", {
          uri: result.uri,
          type: "image/jpeg",
          name: "image.jpg"
        });

        // Send the image data to the backend using Axios
        try {
          const response = await axios.post("http://localhost:5000", formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          });
          // Store the result data in state
          setResultData(response.data);
          setError(null); // Clear any previous errors
        } catch (error) {
          // Handle error
          setError(error.message);
          setResultData(null); // Clear result data
        }
      }
    }
  };

  return ( 
      <View style={styles.container}> 
          <Text style={styles.header}> 
              Add Image: 
          </Text> 

          {/* Button to choose an image */} 
          <TouchableOpacity style={styles.button} 
              onPress={pickImage}> 
              <Text style={styles.buttonText}> 
                  Choose Image 
              </Text> 
          </TouchableOpacity> 

          {/* Conditionally render the image  
          or error message */} 
          {file && <Image source={{ uri: file }} style={styles.image} />}

          {resultData && <Text style={styles.resultText}>{resultData.message}</Text>}
          {error && <Text style={styles.errorText}>{error}</Text>}
      </View> 
  ); 
} 

const styles = StyleSheet.create({ 
  container: { 
      flex: 1, 
      justifyContent: "center", 
      alignItems: "center", 
      padding: 16, 
  }, 
  header: { 
      fontSize: 20, 
      marginBottom: 16, 
  }, 
  button: { 
      backgroundColor: "#007AFF", 
      padding: 10, 
      borderRadius: 8, 
      marginBottom: 16, 
      shadowColor: "#000000", 
      shadowOffset: { width: 0, height: 2 }, 
      shadowOpacity: 0.4, 
      shadowRadius: 4, 
      elevation: 5, 
  }, 
  buttonText: { 
      color: "#FFFFFF", 
      fontSize: 16, 
      fontWeight: "bold", 
  }, 
  imageContainer: { 
      borderRadius: 8, 
      marginBottom: 16, 
      shadowColor: "#000000", 
      shadowOffset: { width: 0, height: 2 }, 
      shadowOpacity: 0.4, 
      shadowRadius: 4, 
      elevation: 5, 
  }, 
  image: { 
      width: 200, 
      height: 200, 
      borderRadius: 8, 
  }, 
  errorText: { 
      color: "red", 
      marginTop: 16, 
  }, 
});