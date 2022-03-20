import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function MorningStar() {

    return (
         
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bullish/morning_star.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>Morning star is a three day candlestick pattern that signals a bullish trend reversal. The first candlestick of this pattern is a bearish candle indicating a bearish trend, the next day candle can be a bearish or bullish candle with a small body, indicating that the sellers and buyers has balanced out during the trading session. The third day of candle of this pattern long bullish candlestick that confirms that the trend may reverse soon. It also important to combine with other indicators to make this pattern make more meaningful.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>

            {styles.bullet("Day 1 is a long bearish candlestick.")}
            {styles.bullet("The second day can be a red or green candlestick with a small body.")}
            {styles.bullet("The third day is a large bullish candlestick.")}
            <Text style={styles.div}></Text>
            <Text style={styles.subHeading}>How to trade?</Text> 
            <Text style={styles.p}>The key to trading the Morning Star pattern is to wait for the third candlestick to confirm the reversal. The third candlestick should close above the midpoint of the first candlestick. This confirms that the buyers are in control and that the downtrend has reversed.</Text>
            <Text style={styles.p}>Once the third candlestick closes, you can enter a long position. Place a stop loss just below the low of the third candlestick. The target for this trade can be the previous highs or a 1:1 risk to reward ratio.</Text>
        </View>
       
    )
}

