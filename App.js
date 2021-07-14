import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from './assets/tapthatlogo.jpeg';
import { ThemeProvider, Button } from 'react-native-elements';
import Overlay from './components/Overlay.js';
import HomeScreen from './components/HomeScreen.js';

const theme = {
  Button: {
    type: 'solid',
    titleStyle: {
      color: 'lightblue',
    }
  }
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image resizeMode={'cover'} source={logo} style={styles.logo} />

      <Text style={styles.instructions}>How well can you maintain a rhythm?</Text>
      {/* <ThemeProvider theme={theme}>
        <Button title="Some Button"/>
      </ThemeProvider>
      <Overlay /> */}
      <HomeScreen />
      <TouchableOpacity
        onPress={() => alert('Sike this hasn\'t been made yet')}
        style={styles.button}>
        <Text style={styles.buttonText}>Play</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f39766',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    maxWidth: '100%',
    maxHeight: '40%',
    borderRadius: 10
  },
  instructions: {
    color: '#fff',
    fontSize: 20,
    marginHorizontal: 15,
  },
  button: {
    backgroundColor: "#fff",
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
    minWidth: '30%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#595555',
  },
});