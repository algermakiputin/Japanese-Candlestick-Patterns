import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function AbandonedBaby() {

    return (
        
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bearish/evening_star.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>The Evening Star pattern is viewed as a bearish reversal pattern in technical analysis. It usually occurs at the top of an uptrend. Whereas, The Morning Star is a candlestick pattern that appears at the end of the downtrend and signals upside reversal. Traders should be aware of these different trading patterns, and the Evening Star is an important one to pay attention to. As the Evening Star indicates that the uptrend is going to end, the appearance of it is a red flag to traders and gives a sign that it is time to book profits.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>

            {styles.bullet("Consist of 3 candlestick pattern.")}
            {styles.bullet("The first candle is a large bullish candle.")}
            {styles.bullet("The second candle is a small candle above the first candlestick.")}
            {styles.bullet("The third candle opening price gaps down and continue to drop and closes within the middle of the first candlestick’s body.")}
            <Text style={styles.div}></Text>
            <Text style={styles.subHeading}>How to trade?</Text>
            <Text style={styles.p}>The pattern is very easy to spot and can be used in any time frame, although it is most commonly seen on daily charts. </Text>
            <Text style={styles.p}>The Bearish Evening Star pattern can be a very profitable pattern to trade, but it is important to remember that it is a relatively rare pattern. If you see this pattern forming, make sure to wait for confirmation before taking any action.</Text>
            <Text style={styles.p}>The key to trading this pattern is to wait for the third candle to close below the midpoint of the first candle. This is your signal to enter a short position. Your stop loss should be placed just above the high of the father candle.</Text>
        </View>
         
    )
}

