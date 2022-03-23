/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { useRef } from 'react';
import type { Node } from 'react';
import { setCustomText } from 'react-native-global-props';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Share,
  DrawerLayoutAndroid,
  Text
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { 
  createDrawerNavigator, 
  DrawerContent,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem 
} from '@react-navigation/drawer';
import HomeScreen from './src/Components/HomeScreen';
import LessonScreen from './src/Components/LessonScreen';
import Introduction from './src/Components/Introduction';
import PatternScreen from './src/Components/PatternScreen';
import QuizScreen from './src/Components/QuizScreen';
import ChallengeScreen from './src/Components/ChallengeScreen';
import CongratulationsScreen from './src/Components/CongratulationsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import './src/Components/Global'; 

const Drawer = createDrawerNavigator(); 
const Stack = createNativeStackNavigator();

const customTextProps = {
  style: {
    fontFamily: 'SourceSansPro-Regular',
    color: '#09101D',
    fontSize: global.scaleFontSize(18)
  }
}

setCustomText(customTextProps);
const theme = {
  colors: {
    background: '#fff'
  }
}

const shareBtn = (navigation) => {

  return (
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <View style={styles.shareContainer}>
        <Image
          style={{ width: 17, opacity: 0.7, height: 17 }}
          source={require('./assets/images/menu.png')} />
      </View>
    </TouchableOpacity>
  )
}

const homeScreenOptions = (navigation) => {
  return {
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTitleStyle: {
      color: '#09101D',
      fontSize: global.scaleFontSize(22),
    },
    title: 'Candlestick Patterns',
    headerRight: () => shareBtn(navigation),
    headerTitleAlign: 'left',
    headerLeft: () => { return <Image style={{ marginLeft: 20 }} source={require('./assets/images/logo.png')} /> },
    headerShadowVisible: false 
  }
}

const HeaderLeft = (navigation) => {
  return (
    <TouchableOpacity
      onPress={() => { navigation.goBack(null) }}
      style={{ marginLeft: 20, marginRight: 0 }}
    >
      <View style={styles.imageContainer}>
        <Image
          style={{
            margin: 'auto',
            width: 19,
            height: 19,
          }}
          source={require('./assets/images/back.png')} />
      </View>
    </TouchableOpacity>
  )
}

const headerStyle = {
  backgroundColor: '#fff',
}

const headerTitleStyle = {
  color: '#09101D',
  fontSize: global.scaleFontSize(22),
  marginLeft: -15
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => alert('Link to help')} />
    </DrawerContentScrollView>
  );
}

const App: () => Node = ({ navigation }) => {

  return (
    <NavigationContainer>
      
      <Drawer.Navigator 
        initialRouteName='Home' 
        drawerContent={(props) => <DrawerContent {...props} />}
        screenOptions={{
          drawerStatusBarAnimation:'fade'
        }}
        >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => homeScreenOptions(navigation)}
          
        />
        <Stack.Screen
          animationEnabled={true}
          name='Lesson'
          component={LessonScreen}
          options={({ navigation }) => ({
            headerStyle: headerStyle,
            headerTitleStyle: headerTitleStyle,
            headerShadowVisible: false,
            headerLeft: () => HeaderLeft(navigation),
            headerRight: () => shareBtn(navigation) 
          })} 
        />
        <Stack.Screen
          name='Pattern'
          component={PatternScreen}
          options={({ navigation }) => ({
            headerStyle: headerStyle,
            headerTitleStyle: headerTitleStyle,
            headerShadowVisible: false,
            title: 'Pattern Details',
            headerLeft: () => HeaderLeft(navigation),
            headerRight: () => shareBtn(navigation),
            
          })}
        />
        <Stack.Screen
          name='Introduction'
          component={Introduction}
          options={({ navigation }) => ({
            headerStyle: headerStyle,
            headerTitleStyle: headerTitleStyle,
            headerShadowVisible: false,
            title: 'Basics of candlestick chart',
            headerLeft: () => HeaderLeft(navigation),
            headerTitleAlign: 'left',
            headerRight: () => shareBtn(navigation) 
          })}
        />
        <Stack.Screen
          name='Quiz'
          component={QuizScreen}
          options={({ navigation }) => ({
            headerStyle: headerStyle,
            headerTitleStyle: headerTitleStyle,
            headerShadowVisible: false,
            headerTitleAlign: 'left',
            title: 'Take a Quiz #Challenge!',
            headerLeft: () => HeaderLeft(navigation),
            headerRight: () => shareBtn(navigation), 
          })} 
        />
        <Stack.Screen
          name='Challenge'
          component={ChallengeScreen}
          options={({ navigation }) => ({
            headerStyle: headerStyle,
            headerTitleStyle: headerTitleStyle,
            headerShadowVisible: false,
            title: 'Challenge!',
            headerLeft: () => HeaderLeft(navigation),
            headerRight: () => shareBtn(navigation) 
          })}
        />
        <Stack.Screen
          name='Congratulations'
          component={CongratulationsScreen}
          options={({ navigation }) => ({
            headerStyle: headerStyle,
            headerTitleStyle: headerTitleStyle,
            headerShadowVisible: false,
            title: 'Congratulations!',
            headerLeft: () => HeaderLeft(navigation),
            headerRight: () => shareBtn(navigation) 
          })}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  menu: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    fontSize: global.scaleFontSize(18),
    // fontFamily:'SourceSansPro-SemiBold'
  },
  menuHeader: {
    borderBottomWidth: 1,
    borderBottomColor: '#F4F6F9',
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    height: global.scaleFontSize(13),
    width: global.scaleFontSize(13)
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
    backgroundColor: 'rgba(48, 79, 254, 0.1)',
    height: 36,
    width: 36,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9,
    marginRight: 15
  },
  shareContainer: {
    backgroundColor: 'rgba(48, 79, 254, 0.1)',
    height: 36,
    width: 36,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9,
    marginRight: 20

  }
});

export default App;
