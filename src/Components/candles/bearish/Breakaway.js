import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function Breakaway() {

    return (
        <View>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bearish/breakaway.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>The bearish breakaway pattern consists of five candles. It is a reversal formation that occurs during an uptrend. The first candle in the formation is long and white. The second candle is also a white candle the price opens higher creating a gap. The third candle can be both black and white but does not cut off the rise of the stock price. The fourth candle continues in the direction of the preceding trend. The fifth candlestick has a long black body, changes the direction of the trend, and continues in that direction to close the gap.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>
            <ul>
                <li>The breakaway candlestick pattern is a five bar reversal candlestick pattern. </li>
                <li>It can be bullish or bearish.</li>
                <li>The first candle must be a long candle. </li>
                <li>The next three candles must be spinning tops. </li>
                <li>The second candle must also create a gap between the first and itself. </li>
                <li>The fifth candle must be a long candle closing within the body gap of the first two candles.</li>
            </ul>
           
        </View>
    )
}

