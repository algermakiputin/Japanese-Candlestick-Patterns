import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function ShootingStar() {

    return (
        
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bearish/shooting_star.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>A shooting star is a one candle pattern that is interpreted as a bearish reversal. The shooting star looks exactly like an Inverted Hammer pattern, but instead, it is found during an uptrend. Just like an Inverted Hammer, it is made up of a short candlestick body and a long upper shadow about thrice or more of its body size. The shooting star pattern indicates that the bear tries to push higher during the trading session but the sellers manage to take control and close the price down near its opening price. This signals traders that a potential trend reversal may occur.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>

            {styles.bullet("Looks like an Inverted Hammer, but instead, it can be found at an uptrend.")}
            {styles.bullet("Candle body can either be bullish or bearish.")}
            {styles.bullet("Has a long upper shadow, about thrice its body size.")}
        
        </View>
        
    )
}

