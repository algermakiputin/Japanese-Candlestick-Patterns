import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function AbandonedBaby() {

    return (
        
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bullish/tri_star.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>A bullish Tri-Star candlestick pattern consists of three consecutive Doji candlesticks that appear in a downtrend and may signal a potential trend reversal. A Doji candlestick signals traders' market indecision, that is why it is important to use other technical indicators to make this pattern more meaningful. A three consecutive Doji candlestick is rare but usually followed by a strong upside movement of price.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>

            {styles.bullet("Three candle pattern.")}
            {styles.bullet("The main trend is a downtrend.")}
            {styles.bullet("The first, second, and third candle is a Doji candlestick.")}
        
        </View>
        
    )
}

