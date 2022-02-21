import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function ThreeOutsideUp() {

    return (
        <View>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bullish/ThreeOutsideUp.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>Three outside up is a three candle reversal pattern that can be bullish or bearish depending on the formation of the chart. The bullish implication on this pattern is if the second and third candle creates two successive higher closing price. The first candle on this pattern is a bearish confirming the negative market sentiment. The second candle gaps down during the trading session, but the buyers manage to close the price higher than the previous candle. If the third candle creates a new high, this signals a buying point for traders and could signal a potential bullish reversal.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>
            <ul>
                <li>The first candle of this pattern is a bearish candle</li>
                <li>The second candle gaps down, but manage to engulf the first candle completely at the end of the trading session</li>
                <li>The third candle is a bullish candle must close above the second candle</li>
            </ul>
           
        </View>
    )
}

