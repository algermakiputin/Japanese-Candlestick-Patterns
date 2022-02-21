import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function HaramiCross() {

    return (
        <View>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bearish/bearish_harami_cross.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>The Bearish Harami Cross is a  two-candle bearish reversal pattern. The first candle engulfs the second one, being a Doji candle, including shadows. The Bearish Harami Cross appears in an uptrend and predicts its reversal. The patterns should be confirmed on the nearest following candles. A Doji candle appearing as the second line indicates the market indecision. Interestingly, in order to recognize the pattern as valid, its first line needs to be a long white candle, which may become an important support zone. For this reason, one should be careful when such a pattern is formed on the chart.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>
            <ul>
                <li>The current trend must be uptrend. </li>
                <li>The first candle is a bearish candle.</li>
                <li>The second candle is a doji candle that open and closes within the middle of the first candlestick body.</li>
            </ul>
           
        </View>
    )
}

