import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function MeetingLines() {

    return (
        <View>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bearish/meeting_lines.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>The Bearish Meeting Lines is a very rarely occurring candlestick pattern on the candlestick charts. Low frequency is a consequence of a very specific configuration of the candles: the first candle closes exactly on the level of the next candle. The first line of the pattern appears as a long line having a white body, whereas the second candle has a black body. The pattern is classified as a bearish reversal one. Hence, it needs to appear in an uptrend. It should be confirmed on the following candles that break out of the nearest support zone or a trendline.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>
            <ul>
                <li> The market is in an upward trend.</li>
                <li>The first candle is a long white candle.</li>
                <li>The third candle is a bearish candle that opens above the previous candle and closes equal to the price of the second candle.</li>
            </ul>
           
        </View>
    )
}

