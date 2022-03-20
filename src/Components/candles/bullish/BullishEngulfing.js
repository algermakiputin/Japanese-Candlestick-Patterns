import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function BullishEngulfing() {

    return (
        
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bullish/bullish_engulfing.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>This is a two day reversal pattern with bullish implications. The first day of this pattern is a red candlestick, the next day is a larger green candlestick that opens lower than the previous candle and closes above the first candle.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>
            {styles.bullet("The first candle  of this pattern has a smaller body.")}
            {styles.bullet("The second candlestick completely engulf the first candlestick.")}
            {styles.bullet("The second candlestick price opens lower than the first day and closes above the first day.")} 
            <Text style={styles.div}></Text>
            <Text style={styles.subHeading}>How to trade?</Text>
            <Text>The bullish engulfing pattern is one of the most reliable candlestick patterns out there. It's a strong signal that the bears are losing control and the bulls are taking over. Here's how you can trade it:</Text>
            {styles.bullet("Look for the pattern to form after a period of bearishness. The engulfing candle should be a big, bold candle that completely engulfs the previous candle.")}
            {styles.bullet("Enter a long position when the pattern is confirmed. The pattern is confirmed when the next candle closes above the engulfing candle's high.")}
            {styles.bullet("Place a stop loss just below the low of the engulfing candle.")}
            {styles.bullet("Profit targets can be set at previous resistance levels or Fibonacci levels.")}
        </View>
     
    )
}

