import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function Breakaway() {

    return (
        <View>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bullish/breakaway.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>A bullish breakaway is a five-price bar pattern that signals a potential trend reversal. The first candlestick of this pattern is a large bearish candlestick indicating the current market sentiment followed by three small candlesticks that signify the bears are losing their momentum and finally buyers come into the market and pushes the price higher and forms the fifth bullish large candlestick that contains the three previous candles, which forms the bullish breakaway.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>
            <ul>
                <li>This pattern is consist of 5 candlestick </li>
                <li>The first candle is a large bearish candlestick, followed by a three small candlestick, the second candlestick creates a gap in the direction of the main trend.</li>
                <li>The fifth candlestick is a large bullish candlestick that fully contains the three previous candlesticks and closes the gap between the first and second candlestick.</li>
            </ul>
           
        </View>
    )
}

