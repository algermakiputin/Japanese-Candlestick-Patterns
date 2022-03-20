import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function Kicking() {

    return (
       
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bullish/Kicking.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>Bullish Kicking is a two-bar candlestick pattern that indicates a potential trend reversal. This pattern is consists of two long opposite candlesticks separated by a price gap, the second candle is a sharp upward move representing that the sellers have been exhausted and now buyers are taking over the market, when this pattern appears at a downtrend usually suggest a change of market sentiment.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>

            {styles.bullet("The current trend must be a downtrend.")}
            {styles.bullet("Consist of two long opposite candlesticks separated by price gap.")}
            {styles.bullet("The first candlestick is a long bullish candlestick followed by a bullish candlestick that gaps up and closes above the first candle.")}
            <Text style={styles.div}></Text>
            <Text style={styles.subHeading}>How to trade?</Text> 
            <Text style={styles.p}>To trade the Bullish Kicking candlestick pattern, you would look to enter a long position on the third candle, with a stop loss placed below the low of the second candle.</Text>
        </View>
         
    )
}

