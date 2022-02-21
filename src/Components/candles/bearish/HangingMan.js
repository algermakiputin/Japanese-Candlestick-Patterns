import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function HangingMan() {

    return (
        <View>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bearish/hanging_man.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>Hanging man is a bearish reversal pattern that signifies a potential reversal of an uptrend. A hanging man is a one candle pattern that forms after a relative price advance. This pattern tells traders that there is a sell-off during the trading session and the bull was not able to regain control and close the price lower. This signals traders that a potential trend reversal would likely occur.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>
            <ul>
                <li>Occurs at an uptrend </li>
                <li>A Hanging Man pattern can either be a green or red candle, although a red candle provides a better indication that the bullish trend is weakening.</li>
                <li>Can have a small upper shadow and a long lower shadow.</li>
            </ul>
           
        </View>
    )
}

