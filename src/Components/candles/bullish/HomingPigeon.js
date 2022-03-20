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
            <Text style={styles.div}></Text>
            <Text style={styles.subHeading}>How to trade?</Text> 
            <Text style={styles.p}>When it comes to trading the Bullish Homing Pigeon candlestick pattern, there are a few things you need to keep in mind. First and foremost, this pattern indicates that the market is about to make a major move to the upside. So, if you see this pattern forming on your charts, be prepared to enter a long position.</Text>
            <Text style={styles.p}>Another thing to keep in mind is that the Bullish Homing Pigeon is a fairly rare pattern. So, if you do see it forming, make sure to pay close attention to the market conditions to make sure that a major move is indeed about to take place.</Text>
            <Text style={styles.p}>Finally, when trading the Bullish Homing Pigeon, it's important to use a tight stop loss. This is because the pattern is relatively short-lived and you don't want to get caught in a false move.</Text>
            <Text style={styles.p}>If you keep these things in mind, trading the Bullish Homing Pigeon can be a highly profitable endeavor. So, keep your eyes peeled for this pattern and be ready to take advantage when it forms.</Text>
        </View>
        
    )
}

