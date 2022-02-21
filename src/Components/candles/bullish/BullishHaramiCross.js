import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function BullishHaramiCross() {

    return (
        <View>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bullish/harami_cross.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>Harami Cross is a two day candlestick pattern that consist of a large bearish candlestick, followed by a small doji candlestick. Bullish Harami Cross appears when the original trend and candlestick is downtrend, indicates that the price may turn up and the trend may reverse soon. </Text>
            <br/>
            <Text style={styles.subHeading}>How to recognise?</Text>
            <ul>
                <li>This is a two price candle pattern</li>
                <li>The first candlestick of this pattern completely engulf the next day candle</li>
                <li>The second candle is a Doji candle with lower and upper shadows, about the same size on both shadows.</li>
                <li>The current trend must be a downtrend</li>
            </ul>
        </View>
    )
}

