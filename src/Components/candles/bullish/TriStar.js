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
            <Text style={styles.div}></Text>
            <Text style={styles.subHeading}>How to trade?</Text> 
            <Text style={styles.p}>The bullish tri-star candlestick pattern is a great pattern to trade because it can be easily identified and it has a very high success rate. The pattern is also relatively easy to trade because it only requires the trader to enter a long position when the third small bullish candle closes above the midpoint of the first large bearish candle.</Text>
            <Text style={styles.p}>The stop loss for this trade should be placed just below the low of the third small bullish candle. The target for this trade should be placed at a level where the trader believes the stock is likely to find support.</Text>
        </View>
        
    )
}

