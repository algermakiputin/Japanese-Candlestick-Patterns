import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function Kicking() {

    return (
        <View>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bearish/kicking.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>A bearish Kicking (also known as Kicker) pattern signals a reversal for a new downtrend. The pattern consists of two candles and highlights candles where a fast price reversal can be seen. The first candlestick is a bullish marubozu. The second day gaps down extensively and opens below the opening price of the day before. There is a gap between day one and two’s bearish candlesticks.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>
            <ul>
                <li>The current trend must be uptrend. </li>
                <li>The first candle is a bearish green candle.</li>
                <li>The second candle opening price gaps downward and closes below its opening price.</li>
            </ul>
           
        </View>
    )
}

