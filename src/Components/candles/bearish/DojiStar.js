import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function DojiStar() {

    return (
         
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bearish/bearish_doji_star.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>The Bearish Doji Star is a bearish reversal pattern represented by two candles. First comes a long green candle, followed by a Doji candle that opens above the body of the first one, creating a gap. It is considered a reversal signal with confirmation during the next trading day. This pattern represents how an uptrend fades out and leads to a bearish reversal. The Doji at the end of the uptrend reflects how the bears have suddenly appeared to stop the trend and, very likely, push the price down.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>
            
            { styles.bullet("Current trend must be uptrend.") }
            { styles.bullet("The first candle is a long white candle.") }
            { styles.bullet("The second candle is a Doji candle above the first candlestick body.") } 
            <Text style={styles.div}></Text>
            <Text style={styles.subHeading}>How to trade?</Text>
            <Text style={styles.p}>The key to trading this pattern is to wait for the confirmation of the bearish reversal on the following candlestick. This candlestick should ideally be a black candlestick that closes below the lows of the doji candlestick.</Text>
            <Text style={styles.p}>Once you have confirmation of the bearish reversal, you can enter a short position with a stop-loss just above the highs of the Doji candlestick.</Text>
        </View>
       
    )
}

