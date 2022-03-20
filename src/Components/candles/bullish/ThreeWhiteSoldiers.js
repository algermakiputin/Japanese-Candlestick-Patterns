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
            <Text style={styles.div}></Text>
            <Text style={styles.subHeading}>How to trade?</Text> 
            <Text style={styles.p}>If you're looking to trade the Bullish Three White Soldiers candlestick pattern, here are a few things you should keep in mind:</Text>
            <Text style={styles.p}>1. This pattern is typically seen as a reversal of a downtrend, so you'll want to look for it after a period of negative price action.</Text>
            <Text style={styles.p}>2. The three white candlesticks should have consecutively higher closes, and each should open within the body of the previous candle.</Text>
            <Text style={styles.p}>3. The pattern is completed when the third white candle closes above the midpoint of the first candle's body.</Text>
            <Text style={styles.p}>4. Once the pattern is formed, you can enter a long position at the opening of the fourth candlestick.</Text>
            <Text style={styles.p}>5. Your stop loss should be placed below the low of the third candle.</Text>
            <Text style={styles.p}>6. Your target profit can be taken at the next major resistance level.</Text>
        </View>
         
    )
}

