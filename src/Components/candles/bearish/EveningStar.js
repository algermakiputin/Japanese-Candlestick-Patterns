import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function AbandonedBaby() {

    return (
        <View>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bearish/evening_star.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>The Evening Star pattern is viewed as a bearish reversal pattern in technical analysis. It usually occurs at the top of an uptrend. Whereas, The Morning Star is a candlestick pattern that appears at the end of the downtrend and signals upside reversal. Traders should be aware of these different trading patterns, and the Evening Star is an important one to pay attention to. As the Evening Star indicates that the uptrend is going to end, the appearance of it is a red flag to traders and gives a sign that it is time to book profits.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>
            <ul>
                <li>Consist of 3 candlestick pattern. </li>
                <li>The first candle is a large bullish candle.</li>
                <li>The second candle is a small candle above the first candlestick.</li>
                <li>The third candle opening price gaps down and continue to drop and closes within the middle of the first candlestick’s body.</li>
            </ul>
           
        </View>
    )
}

