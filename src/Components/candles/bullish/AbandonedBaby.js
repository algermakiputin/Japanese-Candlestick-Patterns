import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function AbandonedBaby() {

    return (
       
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bullish/abandoned_baby.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>A bullish Abandoned baby is a very reliable three-price bar candlestick reversal pattern that appears after a sharp decline in price indicating bearish market sentiment. The first bar of this pattern is a long bearish candle indicating the current trend, the second bar gaps down in the direction of the primary trend, and then the next bar gaps up and pushes the price higher. After a share price advance, this pattern is usually followed by a strong upside move. As you can see.</Text>
            <Text style={styles.p}>As you can see this pattern is similar to morning star and evening star, the only main difference is that the body and its shadow cannot overlap with the other candle. </Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>
                
            {styles.bullet("Three bar reversal pattern, the first candle is a long bearish candlestick")}
            {styles.bullet("The second candle gaps down in the direction of the primary trend, the first bar and the third bar body and shadow cannot overlap with the second candle.")}
            {styles.bullet("Third candle gaps up, forming a large bullish candlestick.")}
            <Text style={styles.div}></Text>
            <Text style={styles.subHeading}>How to trade?</Text> 
            <Text style={styles.p}>Here’s how you can trade the Bullish Abandoned Baby candlestick pattern:</Text>
            <Text style={styles.p}>1. Look for the pattern to form after a downtrend.</Text>
            <Text style={styles.p}>2. Enter a long position when the third candlestick closes above the midpoint of the first candlestick.</Text>
            <Text style={styles.p}>3. Place a stop loss below the low of the second candlestick.</Text>
            <Text style={styles.p}>4. Exit the trade when the price hits your profit target or the pattern fails.</Text>
          
        </View>
      
    )
}

