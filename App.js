/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { setCustomText } from 'react-native-global-props';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';
 
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/Components/HomeScreen';
import LessonScreen from './src/Components/LessonScreen';
import PatternScreen from './src/Components/PatternScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
const Stack = createNativeStackNavigator();
const customTextProps = { 
  style: { 
    fontFamily: 'SourceSansPro-Regular',
    color:'#09101D',
    fontSize:18
  }
}
setCustomText(customTextProps);
const theme = {
  colors: {
    background:'#fff'
  }
}
const App: () => Node = () => {
  
  return (
    <NavigationContainer theme={theme}> 
      <Stack.Navigator 
        initialRouteName='Home' 
      >
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor:'#fff',
              color:"#000"
            },
            headerTitleStyle: {
              color:'#09101D'
            },
            title:'Candlestick Patterns', 
            headerRight:() => {return <Image style={{marginRight:5}} source={require('./assets/images/share.png')} />},
            headerTitleAlign: 'left',
            headerLeft: () => { return <Image style={{marginRight:20}} source={require('./assets/images/logo.png')} /> },
            headerShadowVisible:false,
          }}
        />
        <Stack.Screen 
          name='Lesson'
          component={LessonScreen}
          options={{
            headerStyle: {
              backgroundColor:'#fff',
              color:"#000"
            },
            headerTitleStyle: {
              color:'#09101D'
            },
          }} 
        />
        <Stack.Screen 
          name='Pattern'
          component={PatternScreen}
          options={{
            headerStyle: {
              backgroundColor:'#fff',
              color:"#000"
            },
            headerTitleStyle: {
              color:'#09101D'
            },
            title:'Pattern Details'
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
