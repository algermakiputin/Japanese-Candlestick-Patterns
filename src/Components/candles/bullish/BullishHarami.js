import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function BullishHarami() {

    return (
        <View>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bullish/harami.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>The Bullish Harami candlestick pattern is a reversal pattern appearing at the bottom of a downtrend. The first day of this pattern is a bearish candle with a large body, the next day is a bullish candle with a small body enclosed within the body of the prior candle. As a sign of changing momentum, the small bullish candle ‘gaps’ up to open near the mid-range of the previous candle. Some investors may look at a bullish harami as a good sign that they should enter a long position on an stock.</Text>
            <br/>
            <Text style={styles.subHeading}>How to recognise?</Text>
            <ul>
                <li>The first candle of this pattern is a bearish candle showing bearish implications</li>
                <li>The second candle of this pattern the price jump up from the low of the previous candle for the price to open slightly higher</li>
                <li>The second candle is not more than 25% the size of the first day bearish candle.</li>
            </ul>   
        </View>
    )
}

