import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function BullishHammer() {

    return (
        <View>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bullish/hammer.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>A bullish hammer is a one-day candlestick pattern that signals a market turning point to bullish trends. A Hammer occurs after a stock price has been declining, suggesting that the market is attempting to reach the bottom. </Text>
            <Text style={styles.p}>A Hammer is formed after the sellers drive the prices down during the trading session, followed by a strong buying pressure and drive prices back up. </Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>
            <ul>
                <li>Looks like a letter T</li>
                <li>The opening price and closing price are very close to each other forming a very small candlestick body</li>
                <li>The lower shadow is at least twice of its body size</li>
            </ul>
        </View>
    )
}

