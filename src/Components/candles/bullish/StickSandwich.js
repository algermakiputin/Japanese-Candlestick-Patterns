import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function StickSandwhich() {

    return (
       
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bullish/stick_sandwhich.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>As its name implies this candlestick pattern resembles a sandwich on the chart. This pattern rarely appears on the chart and supposably act as a bullish reversal, but more often than not acts as a bearish continuation. The next candle after this pattern forms usually signals trader if it will continue its current trend or reverse. The first and third candles of this pattern must be in the same color and the second color is opposite from the first and second candlestick that then forms a pattern that looks like a sandwich. </Text>
            <Text style={styles.div}></Text>
            <Text style={styles.subHeading}>How to recognise?</Text>

            {styles.bullet("It consists of 3 candlestick.")}
            {styles.bullet("Appears at a down-trending market.")}
            {styles.bullet("The color of the second candlestick of this pattern is opposite to the first and third candle.")}
            <Text style={styles.div}></Text>
            <Text style={styles.subHeading}>How to trade?</Text> 
            <Text style={styles.p}>If you see a Bullish Stick Sandwich pattern forming, it is a good idea to enter a long position. Place a stop loss just below the lows of the pattern. If the pattern is valid, the market should reverse and head higher. Target the previous swing high for your profit target.</Text>
        </View>
        
    )
}

