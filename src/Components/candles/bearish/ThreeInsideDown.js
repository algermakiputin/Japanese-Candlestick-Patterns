import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function ThreeInsideDown() {

    return (
      
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bearish/three_inside_down.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>The Bearish Three Inside Down pattern is another name for the Confirmed Bearish Harami Pattern. It's a bearish reversal pattern. In this pattern, the first candle is a long white candle, which closes near its high. The second candle is a small black candle, which gaps away from the first candle and closes inside the body of the first candle, thus creating a harami pattern. The third candle exceeds the lows of the first two candles.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>

            {styles.bullet("The first candle is a long bullish candlestick, which is another candle in continuation of an uptrend. It has little significance by its own.")}
            {styles.bullet("The second candle is a small bearish candlestick, which lies within the body of the candlestick body formed on day 1. This first two day candle forms bearish harami candlestick pattern.")}
            {styles.bullet("The third candle is a bearish candlestick, which closes below the close price of the candlestick formed on day 2.This further confirmed the bearish harami pattern formed on Day 2 and, all the three candle together forms a Three Inside Down Pattern.")}
            <Text style={styles.div}></Text>
            <Text style={styles.subHeading}>How to trade?</Text>
            <Text style={styles.p}>When trading this pattern, you should look for bearish reversal signals such as a bearish engulfing pattern or a bearish reversal candlestick pattern.</Text>
            <Text style={styles.p}>If you see this pattern forming, it's a good idea to get out of any long positions you may have and look to short the market.</Text>
        </View>
         
    )
}

