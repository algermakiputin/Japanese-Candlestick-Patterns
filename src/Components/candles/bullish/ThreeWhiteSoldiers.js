import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function ThreeWhiteSoldiers() {

    return (
        <View>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bullish/three_white_soldiers.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>Three white soldiers is a 3-day candlestick pattern that represents a strong trend reversal from a bear market to a bull market. This pattern is one of the most popular patterns and should not be ignored, it helps to confirm that a market has bottomed and the market sentiment has turned positive.</Text>
            <br/>
            <Text style={styles.subHeading}>How to recognise?</Text>
            <ul>
                <li>Appears at a downtrend</li>
                <li>Three consecutive normal bullish candles like a staircase</li>
                <li>Each candle price must close higher to the previous candle</li>
            </ul>
           
        </View>
    )
}

