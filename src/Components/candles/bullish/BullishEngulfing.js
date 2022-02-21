import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function BullishEngulfing() {

    return (
        <View>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bullish/bullish_engulfing.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>This is a two day reversal pattern with bullish implications. The first day of this pattern is a red candlestick, the next day is a larger green candlestick that opens lower than the previous candle and closes above the first candle.</Text>
            <br/>
            <Text style={styles.subHeading}>How to recognise?</Text>
            <ul>
                <li>The first candle  of this pattern has a smaller body</li>
                <li>The second candlestick completely engulf the first candlestick</li>
                <li>The second candlestick price opens lower than the first day and closes above the first day.</li>
            </ul> 
        </View>
    )
}

