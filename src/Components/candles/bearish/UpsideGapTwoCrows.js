import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function UpsideGapTwoCrows() {

    return (
      
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bearish/upside_gap_two_crows.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>The Upside Gap Two Crows pattern is a rare candlestick pattern that is similar to the evening star pattern and the engulfing pattern, but with a few significant differences. As the Evening Star pattern, the Upside Gap Two Crows pattern is a bearish top reversal pattern that consists of three candlesticks. The first candlestick in the pattern must be a bullish candlestick with a large real body and must be light in color. This bullish candlestick is followed by two smaller bearish candlesticks that almost form an engulfing pattern, except that they are both bearish and hence dark in color. The first bearish candlestick that follows the bullish candlestick must have an upside gap between its real body and the real body of the bullish candlestick, as is the case with the evening star pattern. However, the last candlestick in the pattern must open above the real body of the middle candlestick and must close below it to completely engulf the real body of the second candlestick. Where the upside-gap two crows pattern differs from the evening star pattern is in the last candlestick, which need not penetrate and close well into the real body of the first candlestick.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>

            {styles.bullet("The first candle is a bearish candle.")}
            {styles.bullet("The second candle is a bearish candle that opens and closes above the previous candle.")}
            {styles.bullet("The third candle is a bearish candle that completely engulf the previous candle.")}
        
        </View>
     
    )
}

