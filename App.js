/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef} from 'react';
import type {Node} from 'react';
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
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Components/HomeScreen';
import LessonScreen from './src/Components/LessonScreen';
import Introduction from './src/Components/Introduction';
import PatternScreen from './src/Components/PatternScreen';
import QuizScreen from './src/Components/QuizScreen';
import ChallengeScreen from './src/Components/ChallengeScreen';
import CongratulationsScreen from './src/Components/CongratulationsScreen'; 
import './src/Components/Global'; 
import Rate, { AndroidMarket } from 'react-native-rate'
 
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

const shareBtn = (drawer) => {

  return (
    <TouchableOpacity onPress={() => drawer.current.openDrawer()}>
      <View style={styles.shareContainer}>
          <Image 
            style={{width:17,opacity:0.7, height:17}} 
            source={require('./assets/images/menu.png')} />
      </View>
    </TouchableOpacity>
  )
}

const homeScreenOptions = (drawer) => {
  return {
    headerStyle: {
      backgroundColor:'#fff',
      color:"#000"
    },
    headerTitleStyle: {
      color:'#09101D',
      fontSize:global.scaleFontSize(22)
    },
    title:'Candlestick Patterns', 
    headerRight: () => shareBtn(drawer),
    headerTitleAlign: 'left',
    headerLeft: () => { return <Image style={{marginRight:20}} source={require('./assets/images/logo.png')} /> },
    headerShadowVisible:false,
  }
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
 

const navigationView = () => (
  
  <View style={{marginTop:10}}>
    <View style={styles.menuHeader}>
      <Image source={require('./assets/images/logo.png')} />
      <Text style={{fontFamily:'SourceSansPro-SemiBold'}}> Candlestick Patterns - Stocks</Text>
    </View> 
    <TouchableOpacity
        onPress={() => { 
          const options = { 
            GooglePackageName:"com.candlestickpatterns",  
            preferredAndroidMarket: AndroidMarket.Google,
            preferInApp:false,
            openAppStoreIfInAppFails:true,
            fallbackPlatformURL:"https://play.google.com/store/apps/details?id=com.candlestickpatterns",
          }

          Rate.rate(options, (success, errorMessage)=>{
            if (success) {
              // this technically only tells us if the user successfully went to the Review Page. Whether they actually did anything, we do not know.
             
            }
            if (errorMessage) {
              // errorMessage comes from the native code. Useful for debugging, but probably not for users to view
              console.error(`Example page Rate.rate() error: ${errorMessage}`)
            }
          })
        }}
      >
      <Text style={styles.menu}><Image style={styles.icon} source={require('./assets/images/star.png')} /> Rate Us</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => onShare()}>
      <Text style={styles.menu}><Image style={styles.icon} source={require('./assets/images/share.png')} />  Share</Text>
    </TouchableOpacity>
  </View>
);

const App: () => Node = ({navigation}) => {

  const drawer = useRef(null);
  return (
    <NavigationContainer theme={theme}> 
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition='left'
        renderNavigationView={() => navigationView()}
      >   
        <Stack.Navigator 
        initialRouteName='Home' 
      >
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={homeScreenOptions(drawer)}
        />
      
        <Stack.Screen 
          name='Lesson'
          component={LessonScreen}
          options={({navigation}) => ({
            headerStyle: headerStyle,
            headerTitleStyle: headerTitleStyle,
            headerShadowVisible:false,
            headerLeft:() => HeaderLeft(navigation),
            headerRight: () => shareBtn(drawer)
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
            headerRight: () => shareBtn(drawer)
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
            headerRight: () => shareBtn(drawer)
          })} 
          />
          <Stack.Screen 
          name='Quiz'
          component={QuizScreen}
          options={({navigation}) => ({
            headerStyle: headerStyle,
            headerTitleStyle: headerTitleStyle,
            headerShadowVisible:false,
            title:'Take a Quiz #Challenge!',
            headerLeft:() => HeaderLeft(navigation),
            headerRight: () => shareBtn(drawer)
          })} 
          />
          <Stack.Screen 
          name='Challenge'
          component={ChallengeScreen}
          options={({navigation}) => ({
            headerStyle: headerStyle,
            headerTitleStyle: headerTitleStyle,
            headerShadowVisible:false,
            title:'Challenge!',
            headerLeft:() => HeaderLeft(navigation),
            headerRight: () => shareBtn(drawer)
          })} 
          />
          <Stack.Screen 
          name='Congratulations'
          component={CongratulationsScreen}
          options={({navigation}) => ({
            headerStyle: headerStyle,
            headerTitleStyle: headerTitleStyle,
            headerShadowVisible:false,
            title:'Congratulations!',
            headerLeft:() => HeaderLeft(navigation),
            headerRight: () => shareBtn(drawer)
          })} 
          />
      </Stack.Navigator>
      </DrawerLayoutAndroid>
      
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  menu: {  
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:15,
    display:'flex',
    alignContent:'center',
    justifyContent:'center',
    fontSize:global.scaleFontSize(18),
   // fontFamily:'SourceSansPro-SemiBold'
  },
  menuHeader: {
    borderBottomWidth:1,
    borderBottomColor:'#F4F6F9',
    paddingBottom:20,
    paddingTop:20,
    paddingLeft:15, 
    display:'flex', 
    flexDirection:'row',
    alignItems:'center'
  },
  icon: {
    height:global.scaleFontSize(13),
    width:global.scaleFontSize(13)
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
