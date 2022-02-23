import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function ThreeWhiteSoldiers() {

    return (
       
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bullish/three_white_soldiers.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>Three white soldiers is a 3-day candlestick pattern that represents a strong trend reversal from a bear market to a bull market. This pattern is one of the most popular patterns and should not be ignored, it helps to confirm that a market has bottomed and the market sentiment has turned positive.</Text>
            <Text style={styles.div}></Text>
            <Text style={styles.subHeading}>How to recognise?</Text>

            {styles.bullet("Appears at a downtrend.")}
            {styles.bullet("Three consecutive normal bullish candles like a staircase.")}
            {styles.bullet("Each candle price must close higher to the previous candle.")}
        
        </View>
         
    )
}

