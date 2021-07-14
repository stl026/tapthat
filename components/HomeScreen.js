import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import { Button, Slider, Icon } from 'react-native-elements';

const HomeScreen = () => {
  const [tempo, setTempo] = useState(60);
  const [duration, setDuration] = useState(30000);

  return (
    <View>
      <View>
        {/* <Text>Set your tempo</Text> */}
        <Slider
        value = {tempo}
        onValueChange={(tempo) => setTempo(tempo)}
        maximumValue={200}
        minimumValue={60}
        step={2}
        minimumTrackTintColor="#595555"
        maximumTrackTintColor="white"
        trackStyle={{ height: 10, backgroundColor: 'transparent' }}
        thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
        thumbProps={{
          children: (
            <Icon
              name="music"
              type="font-awesome"
              size={10}
              reverse
              containerStyle={{ bottom: 10, right: 10 }}
              color="#f50"
            />
          ),
        }}
        />
        <Text>Tempo: {tempo}</Text>
      </View>
      <View>
        {/* <Text>Set your duration</Text> */}
        <Slider style={styles.sliders}
        value = {duration}
        onValueChange={(duration) => setDuration(duration)}
        maximumValue={60000}
        minimumValue={10000}
        step={5000}
        minimumTrackTintColor="#595555"
        maximumTrackTintColor="white"
        trackStyle={{ height: 10, backgroundColor: 'transparent' }}
        thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
        thumbProps={{
          children: (
            <Icon
              name="music"
              type="font-awesome"
              size={10}
              reverse
              containerStyle={{ bottom: 10, right: 10 }}
              color="#f50"
            />
          ),
        }}
        />
        <Text>{`${(duration/1000)} seconds`}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    sliders: {
      minWidth: '60%',
      color: '#fff'
    }
}
);
export default HomeScreen;
