import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,StatusBar } from 'react-native';
import { Camera } from 'expo-camera';
import { Dimensions } from 'react-native';

export default function CameraDemo() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ratio={"4:3"}>
        
      </Camera>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
    camera: {
      minHeight: Dimensions.get('window').height - 300,
      width : Dimensions.get('window').width > 768 ? '50%' : Dimensions.get('window').width
    },
    button: {
      backgroundColor: 'white',
      padding : 20,
      alignSelf: 'flex-end'
    },
    text : {
      textAlign : "center"

    },
  });
  