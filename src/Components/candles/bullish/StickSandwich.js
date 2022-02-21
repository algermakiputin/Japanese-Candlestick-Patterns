import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function StickSandwhich() {

    return (
        <View>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bullish/stick_sandwhich.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>As its name implies this candlestick pattern resembles a sandwich on the chart. This pattern rarely appears on the chart and supposably act as a bullish reversal, but more often than not acts as a bearish continuation. The next candle after this pattern forms usually signals trader if it will continue its current trend or reverse. The first and third candles of this pattern must be in the same color and the second color is opposite from the first and second candlestick that then forms a pattern that looks like a sandwich. </Text>
            <br/>
            <Text style={styles.subHeading}>How to recognise?</Text>
            <ul>
                <li>It consists of 3 candlestick</li>
                <li>Appears at a down-trending market</li>
                <li>The color of the second candlestick of this pattern is opposite to the first and third candle</li>
            </ul>
        </View>
    )
}

