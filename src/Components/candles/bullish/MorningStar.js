import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function MorningStar() {

    return (
        <View>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bullish/morning_star.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>Morning star is a three day candlestick pattern that signals a bullish trend reversal. The first candlestick of this pattern is a bearish candle indicating a bearish trend, the next day candle can be a bearish or bullish candle with a small body, indicating that the sellers and buyers has balanced out during the trading session. The third day of candle of this pattern long bullish candlestick that confirms that the trend may reverse soon. It also important to combine with other indicators to make this pattern make more meaningful.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>
            <ul>
                <li>Day 1 is a long bearish candlestick</li>
                <li>The second day can be a red or green candlestick with a small body</li>
                <li>The third day is a large bullish candlestick</li>
            </ul>
           
        </View>
    )
}

