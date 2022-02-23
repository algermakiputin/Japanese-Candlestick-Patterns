import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function BullishEngulfing() {

    return (
        
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bullish/bullish_engulfing.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>This is a two day reversal pattern with bullish implications. The first day of this pattern is a red candlestick, the next day is a larger green candlestick that opens lower than the previous candle and closes above the first candle.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>
            {styles.bullet("The first candle  of this pattern has a smaller body.")}
            {styles.bullet("The second candlestick completely engulf the first candlestick.")}
            {styles.bullet("The second candlestick price opens lower than the first day and closes above the first day.")} 
        </View>
     
    )
}

