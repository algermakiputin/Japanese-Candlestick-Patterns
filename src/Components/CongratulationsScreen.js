import React, {useEffect} from 'react';
import {SafeAreaView, View, Image, StyleSheet,Text, Dimensions,TouchableOpacity } from 'react-native';
import { AdMobInterstitial } from 'react-native-admob';

const height = Dimensions.get('window').height;
const CongratulationsScreen = ({navigation, route}) => {
    
    const {score} = route.params;

    useEffect(() => {
        AdMobInterstitial.setAdUnitID('ca-app-pub-4118987136087583/2259798849'); 
        AdMobInterstitial.requestAd();
    })
    
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image style={styles.image} source={require('./../../assets/images/award.png')} />
                <Text style={styles.heading}>Congratulations!</Text>
                <Text style={styles.p}>You did a great job on the challenge</Text>
                <Text style={styles.p}>Your Final Score is <Text style={styles.bold}>{score}</Text></Text>
                <TouchableOpacity
                    onPress={() => {AdMobInterstitial.showAd(); navigation.navigate('Home')}}
                    style={styles.button}>
                    <Text style={styles.text}>Continue</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        height:height - 200
    },  
    button: {
        width:180,
        backgroundColor:'#58CC02',
        paddingTop:10,
        paddingBottom:10,
        paddingRight:20,
        paddingLeft:20,
        borderRadius:10,
        marginTop:20
    },  
    text: {
        textAlign:'center',
        fontFamily:'SourceSansPro-SemiBold',
        color:'#fff'
    },
    bold: {
        fontFamily: 'SourceSansPro-Semibold',
        color:"#fff",
        fontSize:global.scaleFontSize(20)
    },
    heading: {
        fontFamily:'SourceSansPro-SemiBold',
        fontSize: global.scaleFontSize(28),
        marginTop:20,
        marginBottom:10,
        color:"#fff"
    },  
    p: {
        color:"#abb1be"
    },
    image: {
        width:100,
        height:100, 
        margin:'auto'
    }
});

export default CongratulationsScreen;