import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function HomingPigeon() {

    return (
        
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bullish/homing_pigeon.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>Bullish Homing Pigeon is a two candles pattern that signifies a potential turn to positive market sentiment. This pattern is consist of two bearish candle and forms in a bearish trend. The first candle of this pattern is a long bearish candle that confirms the current bearish trend. In the second candle, buying pressure begins to return which enables the second candle to stays within the range of the first candle. The buying pressure may not be enough but it holds the price and manage to close the price higher than the previous candle. This signals traders that the price is bottoming and it cannot go any lower that may result to potential trend reversal.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>

            {styles.bullet("The current trend must be a downtrend, consisting of two candle.")}
            {styles.bullet("The first candle is a long bearish candlestick.")}
            {styles.bullet("The second candle gaps up and the closing and opening price is within the middle range of the first candle.")}
        
        </View>
        
    )
}

