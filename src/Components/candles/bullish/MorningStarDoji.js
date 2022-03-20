import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function MorningStarDoji() {

    return (
        
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bullish/morning_star_doji.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>Morning Star Doji is a bullish reversal three-day candlestick pattern similar to Morning Star, the only difference is that the Morning Star Doji must contain a Doji candlestick on the second day of the pattern. The first day of this pattern is a bearish candle indicating a bearish sentiment, the second day of this pattern is the Doji candle signifying indecisive price movement. The next day the bulls come in and push the price higher forming a bearish long candle indicating a possible trend reversal.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>

            {styles.bullet("The first day of this pattern is a long bearish candlestick.")}
            {styles.bullet("The second day is a doji candlestick signifying market indecision.")}
            {styles.bullet("The third day is a large bullish candle, above the second day candle and closes at the midpoint of the first candlestick.")}
            <Text style={styles.div}></Text>
            <Text style={styles.subHeading}>How to trade?</Text> 
            <Text style={styles.p}>When it comes to trading the Bullish Morning Star Doji, there are a few things you need to keep in mind. First, you want to wait for the pattern to complete itself. Once it does, you can enter a long position at the opening of the fourth day. Your stop loss should be placed below the low of the third day, and your target profit should be based on your own personal risk/reward ratio.</Text>
        </View>
        
    )
}

