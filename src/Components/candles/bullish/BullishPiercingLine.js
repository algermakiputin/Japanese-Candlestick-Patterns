import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function BullishPiercingLine() {

    return (
        <View>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bullish/piercing_line.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>The piercing line is a two day candlestick pattern that indicates a potential bullish reversal of trend. The first day of this pattern consist of a long red candle indicating a bearish trend, the next day it gaps down and closes the price within the middle of the previous candle body. This patterns tells us that buyers are confident to enter the market and push the prices higher, indicates a potential trend reversal.</Text>
            <br/>
            <Text style={styles.subHeading}>How to recognise?</Text>
            <ul>
                <li>Occurs at a downtrend</li>
                <li>The first candle of this pattern is a bearish candlestick signifying the current market trend</li>
                <li>The second candle opens below the closing price of the previous candle. The buyers gain momentum and manage to close the price higher within the middle of the previous candle.</li>
            </ul> 
        </View>
    )
}

