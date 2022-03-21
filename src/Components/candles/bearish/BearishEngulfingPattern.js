import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function BearishEngulfingPattern() {

    return (
         
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bearish/bearish_engulfing.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>The Bearish Engulfing pattern is a two-candlestick pattern that consists of an up (white or green) candlestick followed by a large down (black or red) candlestick that surrounds or “engulfs” the smaller up candle. Basically, the pattern gets its name because the second candle engulfs the first candle. The Bearish Engulfing candlestick pattern is considered to be a bearish reversal pattern, usually occurring at the top of an uptrend.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>

            {styles.bullet("There should be a definite uptrend in progress.")}
            {styles.bullet("The first candle must be a white (bullish) candlestick.")}
            {styles.bullet("The second candlestick must be black (bearish).")}
            {styles.bullet("The black candlestick must completely cover the white candle (i”engulf” it). This means that the top of the black candle’s body must be above the top of the white candle’s body, and its bottom must be below the bottom of the white candle’s body.")} 
            <Text style={styles.div}></Text>
            <Text style={styles.subHeading}>How to trade?</Text>
            <Text style={styles.p}>When trading the Bearish Engulfing Candlestick pattern, it is important to wait for the pattern to form before entering into a short position. The pattern is not valid unless the second candlestick completely engulfs the first candlestick. Once the pattern is formed, traders can enter into a short position at the opening of the next candlestick. The stop loss should be placed above the high of the second candlestick. The target for the trade can be placed at previous support levels.</Text>
        </View>
        
    )
}

