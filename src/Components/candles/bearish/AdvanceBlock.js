import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function AdvanceBlock() {

    return (
         
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bearish/advance_block.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>The advance block is the name given to a candlestick trading pattern. The pattern is a three-candle bearish setup that is considered to be a reversal pattern—a suggestion that price action is about to change from what had been an upward trend to a downward trend in relatively short time frames. Some authors suggest that in practice the formation often leads to a bullish continuation instead of a reversal.</Text>
    
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>

            {styles.bullet("The advance block candlestick pattern is a 3-bar bearish reversal pattern. ")}
            {styles.bullet("It has three long green candles with consecutively higher closes than the previous candles.")}
            {styles.bullet("Each candle has a shorter body than the previous one.")}
        
        </View>
        
    )
}

