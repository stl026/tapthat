import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Button,
} from 'react-native';


const Tap =()=>{
  const [timer, setTimer] = useState(30);
  const [tapTimes, setTapTimes] = useState(0);
  const [kiss, setKiss] = useState([]);
  const [usePic, setUsePic] =useState('susan');

  useEffect(()=>{
    if(timer > 0) {
      setTimeout(()=>setTimer(timer-1),1000)
    }
  },[timer])

  const position = () => {
    const num1 = Math.floor(Math.random() * 500);
    const num2 = Math.floor(Math.random() * 500);
    const arr = [...kiss, {top:num1, left:num2}];
    setKiss(arr);
  }
  console.log(kiss)
  console.log('as')
  return (
    <SafeAreaView>
      <Text> TapTimes: {tapTimes} times</Text>
      <Text> Timer: {timer} sec</Text>
      <Button title='Susan' onPress={()=>{setUsePic('susan')}}/>
      {/* <Button title='Kate'onPress={()=>{setUsePic('kate')}}/> */}
      <TouchableWithoutFeedback onPress={timer>0?()=>{setTapTimes(tapTimes+1); position()}: ()=>{}}>
        <ImageBackground
          source={require(`./assets/${usePic}.png`)}
          style={{width: '500px', height: '500px', postion:'relative',overflow:'hidden'}}
        >
          {kiss.map(i=>{
            return (
              <ImageBackground
                source={require('./assets/Kiss-Icon.png')}
                style={{width: '50px', height: '50px',position: 'absolute', top:`${i.top}px`, left:`${i.left}px`}}
              />
            )
          })}
        </ImageBackground>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}

export default Tap;