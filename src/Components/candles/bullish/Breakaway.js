import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function Breakaway() {

    return (
         
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bullish/breakaway.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>A bullish breakaway is a five-price bar pattern that signals a potential trend reversal. The first candlestick of this pattern is a large bearish candlestick indicating the current market sentiment followed by three small candlesticks that signify the bears are losing their momentum and finally buyers come into the market and pushes the price higher and forms the fifth bullish large candlestick that contains the three previous candles, which forms the bullish breakaway.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>
            
            {styles.bullet("This pattern is consist of 5 candlestick")}
            {styles.bullet("The first candle is a large bearish candlestick, followed by a three small candlestick, the second candlestick creates a gap in the direction of the main trend.")}
            {styles.bullet("The fifth candlestick is a large bullish candlestick that fully contains the three previous candlesticks and closes the gap between the first and second candlestick.")} 
            <Text style={styles.div}></Text>
            <Text style={styles.subHeading}>How to trade?</Text> 
            <Text style={styles.p}>The bullish breakaway candlestick pattern is a powerful signal that reversal is imminent. Here's how to trade it:</Text>
            <Text style={styles.p}>1. Look for a candlestick with a long real body and very little or no upper shadow.</Text>
            <Text style={styles.p}>2. The candlestick should close near the high of the session.</Text>
            <Text style={styles.p}>3. The pattern is most effective when it appears after a period of consolidation or a sharp decline.</Text>
            <Text style={styles.p}>4. Enter a long position when the next candlestick opens above the high of the breakaway candlestick.</Text>
            <Text style={styles.p}>5. Place a stop-loss order below the low of the breakaway candlestick.</Text>
            <Text style={styles.p}>6. Target the same amount of profit as the stop loss.</Text>
        </View>
         
    )
}

