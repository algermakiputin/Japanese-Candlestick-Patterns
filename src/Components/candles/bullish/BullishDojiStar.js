import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function BullishDojiStar() {

    return (
        <View>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bullish/doji_cross.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>Doji Star is a two-day candlestick pattern that appears at the bottom of a downtrend and signals a trend reversal. On the first day is a normal bearish candlestick. On the next day, the opening price should gap down, and the closing price is near to its opening price forming a Doji candle, this indicates that the market is not sure whether to continue going lower or to go higher. To trade this pattern it should be confirmed by a bullish candle on the next trading period.</Text>
            <br/>
            <Text style={styles.subHeading}>How to recognise?</Text>
            <ul>
                <li>Two day candlestick pattern</li>
                <li>The first candle is a normal bearish candle</li>
                <li>Second day price gaps down and close near its opening price forming a doji candlestick.</li>
            </ul>
        </View>
    )
}

