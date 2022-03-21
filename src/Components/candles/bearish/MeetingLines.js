import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function MeetingLines() {

    return (
        
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bearish/meeting_lines.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>The Bearish Meeting Lines is a very rarely occurring candlestick pattern on the candlestick charts. Low frequency is a consequence of a very specific configuration of the candles: the first candle closes exactly on the level of the next candle. The first line of the pattern appears as a long line having a white body, whereas the second candle has a black body. The pattern is classified as a bearish reversal one. Hence, it needs to appear in an uptrend. It should be confirmed on the following candles that break out of the nearest support zone or a trendline.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>

            {styles.bullet("The market is in an upward trend.")}
            {styles.bullet("The first candle is a long white candle.")}
            {styles.bullet("The third candle is a bearish candle that opens above the previous candle and closes equal to the price of the second candle.")}
            <Text style={styles.div}></Text>
            <Text style={styles.subHeading}>How to trade?</Text>
            <Text style={styles.p}>The bearishness of the pattern is confirmed when the second candlestick closes below the midpoint of the first candlestick. The pattern can be found on any time frame but is most commonly found on daily charts.</Text>
            <Text style={styles.p}>To trade the Bearish Meeting Line Candlestick pattern, you would look to enter a short position after the pattern has been confirmed. Your stop loss would be placed just above the high of the second candlestick. Your target would be the same as if you were trading a bearish engulfing pattern, which would be the low of the previous candlestick.</Text>
        </View>
         
    )
}

