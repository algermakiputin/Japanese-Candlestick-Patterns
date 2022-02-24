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
  Image,
  TouchableOpacity,
  Share
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

const shareBtn = () => {

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'The most complete candlestick pattern learning mobile app | Become a stronger trader',
        url:
          '',
        title: 
          ''
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.shareContainer}>
      <TouchableOpacity onPress={onShare}>
        <Image 
          style={{width:17,opacity:0.7, height:17}} 
          source={require('./assets/images/share.png')} />
      </TouchableOpacity>
    </View>
  )
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
            headerRight: shareBtn,
            headerTitleAlign: 'left',
            headerLeft: () => { return <Image style={{marginRight:20}} source={require('./assets/images/logo.png')} /> },
            headerShadowVisible:false,
          }}
        />
        <Stack.Screen 
          name='Lesson'
          component={LessonScreen}
          options={({navigation}) => ({
            headerStyle: {
              backgroundColor:'#fff',
              color:"#000"
            },
            headerTitleStyle: {
              color:'#09101D'
            },
            headerShadowVisible:false,
            headerLeft:() => {
              return (
                <TouchableOpacity
                  onPress={() => {navigation.goBack(null)}}
                >
                  <View style={styles.imageContainer}>
                    <Image 
                      style={{ 
                        margin:'auto',
                        width:19,
                        height:19, 
                      }}
                      source={require('./assets/images/back.png')} />
                  </View>
                </TouchableOpacity>
              )
            },
            headerRight: shareBtn
          })} 
        />
        <Stack.Screen 
          name='Pattern'
          component={PatternScreen}
          options={({navigation}) => ({
            headerStyle: {
              backgroundColor:'#fff',
              color:"#000"
            },
            headerTitleStyle: {
              color:'#09101D'
            },
            headerShadowVisible:false,
            title:'Pattern Details',
            headerLeft:() => {
              return (
                <TouchableOpacity
                  onPress={() => {navigation.goBack(null)}}
                >
                  <View style={styles.imageContainer}>
                    <Image 
                      style={{ 
                        margin:'auto',
                        width:19,
                        height:19
                      }}
                      source={require('./assets/images/back.png')} />
                  </View>
                </TouchableOpacity>
              )
            },
            headerRight: shareBtn
          })} 
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
  imageContainer: {
    backgroundColor:'rgba(48, 79, 254, 0.1)',
    height:36,
    width:36,
    display:'flex', 
    justifyContent:'center',
    alignItems:'center',
    borderRadius:9,
    marginRight: 15
  },
  shareContainer: {
   
    backgroundColor:'rgba(48, 79, 254, 0.1)',
    height:36,
    width:36,
    display:'flex', 
    justifyContent:'center',
    alignItems:'center',
    borderRadius:9 
     
  }
});

export default App;
