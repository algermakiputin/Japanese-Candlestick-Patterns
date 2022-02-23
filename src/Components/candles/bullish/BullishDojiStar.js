import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function BullishDojiStar() {

    return (
       
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bullish/doji_cross.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>Doji Star is a two-day candlestick pattern that appears at the bottom of a downtrend and signals a trend reversal. On the first day is a normal bearish candlestick. On the next day, the opening price should gap down, and the closing price is near to its opening price forming a Doji candle, this indicates that the market is not sure whether to continue going lower or to go higher. To trade this pattern it should be confirmed by a bullish candle on the next trading period.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>
            {styles.bullet("Two day candlestick pattern")}
            {styles.bullet("The first candle is a normal bearish candle")}
            {styles.bullet("Second day price gaps down and close near its opening price forming a doji candlestick.")} 
        </View>
        
    )
}

