import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function ThreeOutsideUp() {

    return (
       
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bullish/ThreeOutsideUp.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>Three outside up is a three candle reversal pattern that can be bullish or bearish depending on the formation of the chart. The bullish implication on this pattern is if the second and third candle creates two successive higher closing price. The first candle on this pattern is a bearish confirming the negative market sentiment. The second candle gaps down during the trading session, but the buyers manage to close the price higher than the previous candle. If the third candle creates a new high, this signals a buying point for traders and could signal a potential bullish reversal.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>

            {styles.bullet("The first candle of this pattern is a bearish candle.")}
            {styles.bullet("The second candle gaps down, but manage to engulf the first candle completely at the end of the trading session.")}
            {styles.bullet("The third candle is a bullish candle must close above the second candle.")}
            <Text style={styles.div}></Text>
            <Text style={styles.subHeading}>How to trade?</Text> 
            <Text style={styles.p}>To trade this pattern, look for a candlestick with a lower shadow that is at least twice the size of the body, and an upper shadow that is small or nonexistent. The real body should be white or bullish, and the pattern should occur in a downtrend.</Text>
            <Text style={styles.p}>If these conditions are met, then you can enter a long position at the opening of the next candlestick. Your stop loss should be placed just below the low of the Three Outside Up candlestick.</Text>
            <Text style={styles.p}>This pattern can be a very profitable way to trade the markets, so make sure you keep an eye out for it!</Text>
        </View>
        
    )
}

