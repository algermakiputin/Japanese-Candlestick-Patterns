import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function HaramiCross() {

    return (
        
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bearish/bearish_harami_cross.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>The Bearish Harami Cross is a  two-candle bearish reversal pattern. The first candle engulfs the second one, being a Doji candle, including shadows. The Bearish Harami Cross appears in an uptrend and predicts its reversal. The patterns should be confirmed on the nearest following candles. A Doji candle appearing as the second line indicates the market indecision. Interestingly, in order to recognize the pattern as valid, its first line needs to be a long white candle, which may become an important support zone. For this reason, one should be careful when such a pattern is formed on the chart.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>

            {styles.bullet("The current trend must be uptrend.")}
            {styles.bullet("The first candle is a bearish candle.")}
            {styles.bullet("The second candle is a doji candle that open and closes within the middle of the first candlestick body.")}
            <Text style={styles.div}></Text>
            <Text style={styles.subHeading}>How to trade?</Text>
            <Text style={styles.p}>This pattern is a strong indication that the previous uptrend is over and that a new downtrend is about to begin. When you see this pattern forming, it's time to start looking for short-selling opportunities.</Text>
            <Text style={styles.p}>There are a few things to keep in mind when trading this pattern. First, you want to make sure that the bearish candlestick has a small body and a long upper shadow. This indicates that there is still some bearish pressure in the market. Secondly, you want to make sure that the bullish candlestick has a small body and a long lower shadow. This indicates that the bulls are starting to gain some traction.</Text>
            <Text style={styles.p}>Finally, you want to make sure that the two candlesticks are of relatively equal size. This indicates that the market is still undecided and that there is still room for the trend to reverse.</Text>
            <Text style={styles.p}>When you see this pattern, you want to enter a short position. You can place a stop loss just above the high of the bearish candlestick. Your target should be the same as your stop loss.</Text>
        </View>
        
    )
}

