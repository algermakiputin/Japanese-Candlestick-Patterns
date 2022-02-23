import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function Harami() {

    return (
         
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bearish/bearish_harami.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>A bearish harami is a two candlestick pattern that suggests prices may soon reverse to the downside. The pattern consists of a long white candle followed by a small black candle. The opening and closing prices of the second candle must be contained within the body of the first candle. An uptrend precedes the formation of a bearish harami.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>

            {styles.bullet("The opening price of the second candle is lower than the closing price of the first bullish candle, so the day starts with a gap down and sellers are gaining control.")}
            {styles.bullet("The rest of the trading session, buyers and sellers more or less keep each other in balance. A slightly negative closing price is a sign that sellers, after the initial gap down, have maintained control. However, there was not yet enough momentum to lower the price below the opening price of the previous day. As a result, we see an 'inside candle.")}
        
        
        </View>
        
    )
}

