import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function ThreeInsideUp() {

    return (
       
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bullish/ThreeInsideUp.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>Bullish Three inside up is a 3 bar pattern that indicates that the current bearish trend is weakening and shows a potential trend reversal. The first candle of this pattern is a long bearish candle that shows the current trend, followed by a short green candle that opens and closes within the body of the first and the third is a bullish large candle that closes above the first candle. This type of pattern is generally short-term and may not always result in a trend reversal. That is why when using this pattern it is important to determine the overall trend, like for example during a pullback of the long-term bullish trend.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>

            {styles.bullet("The first candle of this pattern is a red candle indicating the current trend.")}
            {styles.bullet("The second candle is a small bullish candle that opens and closes within the middle of the first candle.")}
            {styles.bullet("The third candle is bullish and closes above the first candle.")}
            <Text style={styles.div}></Text>
            <Text style={styles.subHeading}>How to trade?</Text> 
            <Text style={styles.p}>The Three Inside Up pattern is a good indicator that the market is ready to reverse and move higher. This pattern can be used to trade a variety of markets, including stocks, forex, and commodities. When trading this pattern, it is important to wait for the pattern to complete before entering a trade. This means waiting for the third candlestick in the pattern to close. </Text>
            <Text style={styles.p}>Once the Three Inside Up pattern has been completed, you can enter a long position at the market price. A stop-loss can be placed below the low of the third candlestick in the pattern. A target can be placed above the high of the first candlestick in the pattern. </Text>
        </View>
       
    )
}

