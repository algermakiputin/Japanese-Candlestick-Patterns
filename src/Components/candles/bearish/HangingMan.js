import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function HangingMan() {

    return (
      
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bearish/hanging_man.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>Hanging man is a bearish reversal pattern that signifies a potential reversal of an uptrend. A hanging man is a one candle pattern that forms after a relative price advance. This pattern tells traders that there is a sell-off during the trading session and the bull was not able to regain control and close the price lower. This signals traders that a potential trend reversal would likely occur.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>

            {styles.bullet("Occurs at an uptrend.")}
            {styles.bullet("A Hanging Man pattern can either be a green or red candle, although a red candle provides a better indication that the bullish trend is weakening.")}
            {styles.bullet("Can have a small upper shadow and a long lower shadow.")}
            <Text style={styles.div}></Text>
            <Text style={styles.subHeading}>How to trade?</Text>
            <Text style={styles.p}>The key to trading the Bearish Hanging Man Candlestick pattern is to wait for confirmation. The confirmation comes in the form of a bearish candlestick that closes below the real body of the Bearish Hanging Man. This signals that the bears have taken control of price and that the uptrend is over.</Text>
            <Text style={styles.p}>Once you have confirmation, you can enter a short position with a stoploss just above the high of the Bearish Hanging Man Candlestick. The target for the trade is typically the same as the height of the Bearish Hanging Man Candlestick.</Text>
        </View>
       
    )
}

