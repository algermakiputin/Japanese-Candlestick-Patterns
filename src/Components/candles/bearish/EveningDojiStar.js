import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function AbandonedBaby() {

    return (
        
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bearish/evening_doji_star.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>An Evening Doji Star consists of a long bullish candle, followed by a Doji that gaps up, then a third bearish candle that gaps down and closes well within the body of the first candle. The evening star pattern is considered a reliable indicator that a downward trend has begun. However, it can be difficult to discern amidst the noise of stock-price data. To help identify it reliably, traders often use price oscillators and trendlines to confirm whether an evening star pattern has in fact occurred.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>

            {styles.bullet("The first candle is a long bullish candle.")}
            {styles.bullet("The second candle is a Doji candle.")}
            {styles.bullet("The third candle opens below the second candle’s body and then close below the midpoint of the first candlestick body.")}
            <Text style={styles.div}></Text>
            <Text style={styles.subHeading}>How to trade?</Text>
            <Text style={styles.p}>When trading this pattern, you will want to look for a bearish candlestick to form on the third day. This will confirm the pattern and give you a signal to enter a short position. You can place a stop loss just above the high of the second candle, and target the low of the first candle.</Text>
        </View>
        
    )
}

