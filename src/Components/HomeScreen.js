import React, { useEffect } from 'react'
import { SafeAreaView, Text, StyleSheet, View, Image, TouchableOpacity, ScrollView} from 'react-native'; 
import LinearGradient from 'react-native-linear-gradient';
import AdMobBanner from 'react-native-admob/RNAdMobBanner';  
import Module from './Module';
import './Global';
 
const images = [
    require('../../assets/images/introduction.png'),
    require('../../assets/images/quiz.png')
];
const HomeModule = (props) => {

    return (
        <TouchableOpacity 
            style={styles.moduleContainer}
            onPress={() => {  
                global.counter++;
                global.showAd(); 
                props.navigation.navigate(props.location);
                
            }}
            > 
            <View style={styles.image}>
                <Image source={images[props.image]} />
            </View>
            <View style={styles.description}>
                <Text style={styles.lessonTitle}>{props.title}</Text>
                <Text style={styles.lessonSub}>{props.subTitle}</Text>
            </View>
        </TouchableOpacity>
    )
}
const HomeScreen = ({navigation}) => {
    
    useEffect(() => {
        global.requestAd();
    })
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
                                        navigation.navigate('Introduction');
                                    }}
                                >
                                    <Text style={styles.btn}>Learn Now</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </LinearGradient>
                    <Text style={styles.lessonsHeading}>All Lessons</Text>
                    <Text style={styles.p}>Candlestick patterns are used by technical traders to anticipate the future movement of a stock. Learn the different types of cadlestick patterns and become a stronger trader.</Text>
                    <HomeModule
                        navigation={navigation}
                        location="Introduction"
                        image={0}
                        title="Basics of candlestick"
                        subTitle="Introduction"
                    />
                    <Module 
                        title="Bullish reversal patterns"
                        image={0}
                        trend="bullish"
                        navigation={navigation}
                    />
                    <Module 
                        title="Bearish reversal patterns"
                        image={1}
                        trend="bearish"
                        navigation={navigation}
                        showAd={true}
                    /> 
                    <HomeModule
                        navigation={navigation}
                        location="Quiz"
                        image={1}
                        title="Guess the pattern"
                        subTitle="Exercise your brain"
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
        paddingRight:20,
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
        fontSize:global.scaleFontSize(26),
        fontFamily:'SourceSansPro-SemiBold',
        lineHeight:36,
        marginBottom:22,
        color: global.headerColor
    },
    p: { 
        fontSize:global.scaleFontSize(19),
        lineHeight:24,
        marginBottom:30,
        color: global.paragraphColor
    },
    moduleContainer: { 
        borderRadius:20,
        padding:20, 
        backgroundColor:'#2e2d2e',
        display:'flex',
        flexDirection:'row', 
        justifyContent:'flex-start', 
        alignItems:'center',
        marginBottom:20,  
        elevation:24,  
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
        color:global.headerColor
    },
    lessonSub: {
        fontSize:global.scaleFontSize(14),
        color: global.paragraphColor
    }
    
});

export default HomeScreen;