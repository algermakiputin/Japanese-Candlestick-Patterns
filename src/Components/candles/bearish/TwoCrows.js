import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function TwoCrows() {

    return (
        <View>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bearish/two_crows.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>The two crows candlestick pattern is a bearish reversal pattern that forms during an uptrend. In the two crows pattern, the market closes lower after an opening gap up during an uptrend. It is a popular pattern that gives an early signal of uptrend deterioration and a potential reversal of the trend. </Text>
            <Text style={styles.p}>The two crows candlestick pattern has three candles. The first candle is a long white candle that closes nears its high. The second candle is a small black candle that tends to create a gap by moving away from the previous day’s candle and closing near its low. However, its closing point is still above the high of the first candle. The third candle fills the gap between the first two candles and opens inside the body of the second candle. </Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>
            <ul>
                <li> Candle 1: A bullish candle that continues the uptrend, represented by a long white (or green) candlestick that indicates a closing price well above the open price. </li>
                <li>Candle 2: A bearish candle despite the security gapping higher at the open. Therefore, this candle gaps up from the prior candle, and is black with a close below the open.</li>
                <li>Candle 3: A second bearish candle. The candle opens higher than the Candle 2 open, and closes below the Candle 2 close but above the Candle 1 close. This is visually represented by a bigger down candle that "engulfs" Candle 2.</li>
            </ul>
           
        </View>
    )
}

