import React, { useEffect } from 'react'
import { SafeAreaView, Text, StyleSheet, View, Image, TouchableOpacity, ScrollView} from 'react-native'; 
import LinearGradient from 'react-native-linear-gradient';
import AdMobBanner from 'react-native-admob/RNAdMobBanner';
import { AdMobInterstitial } from 'react-native-admob';   
import './Global';

const moduleImages = [
    require('../../assets/images/bullcandles.png'),
    require('../../assets/images/bearcandles.png'),
    require('../../assets/images/continuationcandles.png')
]
const modules = require('../modules.json');

const Module = (props) => {
 
    return (
        <TouchableOpacity 
            style={styles.moduleContainer}
            onPress={() => {
                
                if (props.showAd == true) {
                    AdMobInterstitial.showAd(); 
                }
                    
                props.navigation.navigate('Lesson', { 
                    title: props.title, 
                    module:props.trend,
                    modules: modules
                });
            }}
            > 
            <View style={styles.image}>
                <Image source={moduleImages[props.image]} />
            </View>
            <View style={styles.description}>
                <Text style={styles.lessonTitle}>{props.title}</Text>
                <Text style={styles.lessonSub}>{Object.keys(modules[props.trend].candles).length} Lessons</Text>
            </View>
        </TouchableOpacity>
    )
}

const IntroductionModule = (props) => {

    return (
        <TouchableOpacity 
            style={styles.moduleContainer}
            onPress={() => {  
                props.navigation.navigate('Introduction');
            }}
            > 
            <View style={styles.image}>
                <Image source={require('../../assets/images/introduction.png')} />
            </View>
            <View style={styles.description}>
                <Text style={styles.lessonTitle}>Basics of candlestick</Text>
                <Text style={styles.lessonSub}>Introduction</Text>
            </View>
        </TouchableOpacity>
    )
}
const HomeScreen = ({navigation}) => {

    useEffect(() => { 
        AdMobInterstitial.setAdUnitID('ca-app-pub-4118987136087583/2259798849'); 
        AdMobInterstitial.requestAd();
        
    },[]);
     
    return (
        <SafeAreaView >  
            <ScrollView >
                <View style={styles.container}>
                    <LinearGradient 
                        start={{x:0.1,y:1}} 
                        end={{x:1,y:0}}
                        colors={['#8250D5', '#304FFE']} 
                        style={styles.linearGradient}
                    >
                        <View style={styles.flexContainer}>
                    
                            <View style={styles.flexItem1}>
                                <Image source={require('../../assets/images/stockbg.png')} style={{width:'100%',height:150}} />
                            </View>
                            <View style={styles.flexItem2}>
                                <Text style={styles.hl}>Trade Smarter</Text> 
                                <Text style={styles.hl}>Trade Better</Text> 
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate('Lesson', { 
                                            title: "Bullish Reversal Patterns", 
                                            module:"bullish",
                                            modules: modules
                                        });
                                    }}
                                >
                                    <Text style={styles.btn}>Learn Now</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </LinearGradient>
                    <Text style={styles.lessonsHeading}>All Lessons</Text>
                    <Text style={styles.p}>Candlestick patterns are used by technical traders to predict the future movement of a stock. Learn the different types of cadlestick patterns and become a stronger trader.</Text>
                    <IntroductionModule
                        navigation={navigation}
                    />
                    <Module 
                        title="Bullish reversal patterns"
                        image={1}
                        trend="bullish"
                        navigation={navigation}
                    />
                    <Module 
                        title="Bearish reversal patterns"
                        image={0}
                        trend="bearish"
                        navigation={navigation}
                        showAd={true}
                    />
                    <Module 
                        title="Continuation patterns"
                        image={2}
                        trend="continuation"
                        navigation={navigation} 
                    />
                </View>
                <AdMobBanner
                    adSize="smartBannerLandscape"
                    adUnitID="ca-app-pub-4118987136087583/5074181363" 
                    onAdFailedToLoad={error => console.error(error)}
                />
            </ScrollView>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:20 
    },
    linearGradient: {
        borderRadius:20,
        marginBottom:24
    }, 
    btn: {
        backgroundColor:'#FFB800',
        width:116,
        textAlign:'center',
        paddingTop:8,
        paddingBottom:8,
        borderRadius:25,
        color:'#fff',
        fontFamily:'SourceSansPro-SemiBold',
        fontSize:global.scaleFontSize(16),
        marginTop:10
    }, 
    hl: {
        fontSize:global.scaleFontSize(24),
        fontFamily:'SourceSansPro-Bold',
        color:'#fff',
        marginBottom:2
    },
    flexContainer: { 
        display:'flex',
        flexDirection:'row', 
        justifyContent:'center',
        alignItems:'center',
        paddingTop:35,
        paddingBottom:35,
        paddingLeft:20,
        paddingRight:20
    },
    flexItem1: {
        width:'50%',
        paddingRight:5
    },
    flexItem2: {
        width:'50%', 
        paddingLeft:5
    },
    lessonsHeading: { 
        color:'#394452',
        fontSize:global.scaleFontSize(26),
        fontFamily:'SourceSansPro-SemiBold',
        lineHeight:36,
        marginBottom:22
    },
    p: { 
        fontSize:global.scaleFontSize(18),
        lineHeight:24,
        marginBottom:30
    },
    moduleContainer: { 
        borderRadius:20,
        padding:20, 
        backgroundColor:'#fff',
        display:'flex',
        flexDirection:'row', 
        justifyContent:'flex-start', 
        alignItems:'center',
        marginBottom:20, 
        shadowColor:'rgba(90, 108, 234, 0.5)',
        shadowOffset:{width:0,height:1},
        elevation:24, 
        borderWidth:1,
        shadowRadius:16,
        borderColor:'#F4F6F9' 
    },
    image: {
        width:60,
        height:60
    },
    description: { 
        marginLeft:10,
        overflow:'hidden',
        flexWrap:'wrap'
    },
    lessonTitle: {
        fontSize:global.scaleFontSize(22),
        overflow:'hidden',
        maxWidth:260,
        fontFamily:'SourceSansPro-SemiBold',
    
    },
    lessonSub: {
        fontSize:global.scaleFontSize(14),
    }
    
});

export default HomeScreen;