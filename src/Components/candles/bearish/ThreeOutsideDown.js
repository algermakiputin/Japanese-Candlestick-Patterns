import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function ThreeOutsideDown() {

    return (
        
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bearish/three_outside_down.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>Three Outside Down Candlestick Chart Pattern is a bearish trend reversal pattern of strong reliability. It is formed at an uptrend or at a possible resistance. This pattern is just the opposite of the Three Outside Up Pattern. This pattern is a three day candlestick pattern or one can say it takes three days for this pattern to be formed. If see deeply into the pattern, its a further extension of Bearish Engulfing Candlestick pattern or its a confirmation of Bullish Engulfing Pattern.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>

            {styles.bullet("The first candle is a small bullish candlestick, which is mere a n the continuation of the uptrend, as shown in the Figure.")}
            {styles.bullet("The second candlestick a larger bearish candlestick that completely engulf the first candle.")}
            {styles.bullet("The third candle is also a bearish candlestick that closes below the second candle.")}
            <Text style={styles.div}></Text>
            <Text style={styles.subHeading}>How to trade?</Text>
            <Text style={styles.p}>The Bearish Three Outside Down Candlestick Pattern is a reliable way to trade the markets. This pattern occurs when the market is in a downtrend and the candlesticks form a bearish three outside down pattern. This pattern is a great way to trade the markets because it is a reliable way to pick market reversals. The key to trading this pattern is to enter the market when the candlestick closes below the support line. The stop loss should be placed above the resistance line.</Text>
        </View>
        
    )
}

