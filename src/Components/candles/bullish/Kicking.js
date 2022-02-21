import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function Kicking() {

    return (
        <View>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bullish/Kicking.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>Bullish Kicking is a two-bar candlestick pattern that indicates a potential trend reversal. This pattern is consists of two long opposite candlesticks separated by a price gap, the second candle is a sharp upward move representing that the sellers have been exhausted and now buyers are taking over the market, when this pattern appears at a downtrend usually suggest a change of market sentiment.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>
            <ul>
                <li>The current trend must be a downtrend</li>
                <li>Consist of two long opposite candlesticks separated by price gap</li>
                <li>The first candlestick is a long bullish candlestick followed by a bullish candlestick that gaps up and closes above the first candle.</li>
            </ul>
           
        </View>
    )
}

