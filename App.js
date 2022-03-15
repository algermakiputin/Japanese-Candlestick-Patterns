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
  StyleSheet, 
  View,
  Image,
  TouchableOpacity,
  Share
} from 'react-native';
 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Components/HomeScreen';
import LessonScreen from './src/Components/LessonScreen';
import Introduction from './src/Components/Introduction';
import PatternScreen from './src/Components/PatternScreen';
import QuizScreen from './src/Components/QuizScreen';
import './src/Components/Global';
 
const Stack = createNativeStackNavigator();
const customTextProps = { 
  style: { 
    fontFamily: 'SourceSansPro-Regular',
    color:'#09101D',
    fontSize:global.scaleFontSize(18)
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
          'The most complete candlestick pattern learning mobile app | Become a stronger trader download now! https://play.google.com/store/apps/details?id=com.candlestickpatterns',
        title: 
          'Candlestick Patterns Mobile App'
      }).then(({action, activityType}) => {
        if(action === Share.sharedAction)
          console.log('Share was successful');
        else
          console.log('Share was dismissed');
        }); 
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

const homeScreenOptions = {
  headerStyle: {
    backgroundColor:'#fff',
    color:"#000"
  },
  headerTitleStyle: {
    color:'#09101D',
    fontSize:global.scaleFontSize(22)
  },
  title:'Candlestick Patterns', 
  headerRight: shareBtn,
  headerTitleAlign: 'left',
  headerLeft: () => { return <Image style={{marginRight:20}} source={require('./assets/images/logo.png')} /> },
  headerShadowVisible:false,
}

const HeaderLeft = (navigation) => {
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
}

const headerStyle = {
  backgroundColor:'#fff',
  color:"#000"
}

const headerTitleStyle = {
  color:'#09101D',
  fontSize:global.scaleFontSize(22)
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
          options={homeScreenOptions}
        />
        <Stack.Screen 
          name='Lesson'
          component={LessonScreen}
          options={({navigation}) => ({
            headerStyle: headerStyle,
            headerTitleStyle: headerTitleStyle,
            headerShadowVisible:false,
            headerLeft:() => HeaderLeft(navigation),
            headerRight: shareBtn
          })} 
        />
        <Stack.Screen 
          name='Pattern'
          component={PatternScreen}
          options={({navigation}) => ({
            headerStyle: headerStyle,
            headerTitleStyle: headerTitleStyle,
            headerShadowVisible:false,
            title:'Pattern Details',
            headerLeft:() => HeaderLeft(navigation),
            headerRight: shareBtn
          })} 
          />
          <Stack.Screen 
          name='Introduction'
          component={Introduction}
          options={({navigation}) => ({
            headerStyle: headerStyle,
            headerTitleStyle: headerTitleStyle,
            headerShadowVisible:false,
            title:'Basics of candlestick chart',
            headerLeft:() => HeaderLeft(navigation),
            headerRight: shareBtn
          })} 
          />
          <Stack.Screen 
          name='Quiz'
          component={QuizScreen}
          options={({navigation}) => ({
            headerStyle: headerStyle,
            headerTitleStyle: headerTitleStyle,
            headerShadowVisible:false,
            title:'Take a Quiz!',
            headerLeft:() => HeaderLeft(navigation),
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
    fontSize: global.scaleFontSize(24),
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: global.scaleFontSize(18),
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
