import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const TapCounter = () => {
  const [taps, setTaps] = useState([]);
  return (
    <View>
      <TouchableOpacity
        onPress={() => console.log(Date.now())}
        style={styles.hugeButton}
      >

      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  hugeButton: {
    minWidth: '100%',
    minHeight: '100%',

  }
})