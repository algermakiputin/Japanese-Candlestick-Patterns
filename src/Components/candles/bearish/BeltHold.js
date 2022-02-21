import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function BeltHold() {

    return (
        <View>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bearish/belt_hold.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>A bearish belt hold is a pattern that often signals a reversal in investor sentiment from bullish to bearish. However, the bearish belt hold is not considered very reliable as it occurs frequently and is often incorrect in predicting future share prices. As with any other candlestick charting method, more than two days of trading should be considered when making predictions about trends.</Text>
            <Text style={styles.p}>A Bearish Belt Hold candlestick pattern consists of two candlesticks in which the first candlestick is bullish while the second one is bearish. For a bearish hold to form, two conditions need to be fulfilled. the first candle should be bullish while in an up-trending market. The next candle gaps up and then close at/near to the close of the previous candle.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>
            <ul>
                <li>This is a two candle pattern that appears in an uptrend</li>
                <li>The first candle is a normal bullish candle indicating the current market sentiment</li>
                <li>The second candle opening price gaps up with no upper shadow and then closes near at the first candle's body</li>
            </ul>
           
        </View>
    )
}

