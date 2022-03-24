import React from 'react';
import { SafeAreaView, Image, View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import './Global';

const images = [
    require('../../assets/images/bullcandles.png'),
    require('../../assets/images/bearcandles.png'),
];

const HomeModule = (props) => {

    return (
        <TouchableOpacity 
            style={styles.moduleContainer}
            onPress={() => {  
                global.counter++;
                global.showAd(); 
                props.navigation.navigate(props.location, {
                    title: props.title,
                    quizChallenge: props.quizChallenge
                });
                
            }}
            > 
            <View>
                <Image  style={styles.image} source={images[props.image]} />
            </View>
            <View style={styles.description}>
                <Text style={styles.lessonTitle}>{props.title}</Text>
                <Text style={styles.lessonSub}>{props.subTitle}</Text>
            </View>
        </TouchableOpacity>
    )
}

const QuizScreen = function({navigation}) {

    return (
        <ScrollView>
            <SafeAreaView style={{padding:20}}>
                <Image 
                    style={styles.banner}
                    source={require('./../../assets/images/quizbanner.png')} />
                <Text style={styles.heading}>Candlestick Quiz Challenege</Text>
                <Text style={styles.quizDescription}>Exercise your brain, test your knowledge and conquere the candlestick quiz challenge!</Text>
                <HomeModule
                    navigation={navigation}
                    location="Challenge"
                    image={0}
                    title="Bullish Patterns Quiz"
                    quizChallenge="bullish"
                    subTitle="Quiz Challenge #1"
                />
                <HomeModule
                    navigation={navigation}
                    location="Challenge"
                    image={1}
                    quizChallenge="bearish"
                    title="Bearish Patterns Quiz"
                    subTitle="Quiz Challenge #2"
                />
                <View style={{marginBottom:20}}></View>
            </SafeAreaView>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    heading: {
        fontSize:global.scaleFontSize(24), 
        fontFamily:'SourceSansPro-SemiBold',
        marginBottom:10,
        color:"#fff"
    },
    banner: {
        width:'100%',
        height:258, 
        margin:'auto', 
        marginBottom:20,  
        borderRadius:5,
        shadowColor:'rgba(90, 108, 234, 0.5)',
        shadowOffset:{width:0,height:1},
        borderWidth:1,
        shadowRadius:16,
        borderColor:'#F4F6F9'
    },
    quizDescription: {
        marginBottom:20,
        color:"#fff"
    },
    moduleContainer: { 
        borderRadius:20,
        padding:20, 
        backgroundColor:'#2e2d2e',
        display:'flex',
        flexDirection:'row', 
        justifyContent:'flex-start', 
        alignItems:'center',
        marginBottom:20
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
        color:"#fff"
    },
    lessonSub: {
        fontSize:global.scaleFontSize(14),
        color:"#fff"
    }
})

export default QuizScreen;