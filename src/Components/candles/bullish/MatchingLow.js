import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function MatchingLow() {

    return (
     
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bullish/matching_low.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>Matching low is a two candle pattern that shows a potential bullish reversal, both candles have no lower shadow and must have equal closing price. It’s not every day you can see two candlesticks with matching low and no lower shadows. Therefore, this candlestick pattern belongs to the pattern that you rarely see on the chart. The second candle of this pattern signifies that sellers failed to close the price below the first candle, this signals that the bearish sentiment is weakening and there could be a potential price rebound. Traders could see potential in this pattern and use the previous low as support or cut loss point. As a general rule, it is ideal to wait for confirmation before acting with every pattern.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>
            
            {styles.bullet("Current trend must be a downtrend.")}
            {styles.bullet("This pattern is consist of two candlestick.")}
            {styles.bullet("As its name suggest both candle closing price is equal.")}
            {styles.bullet("The body size of both candles does not matter as long as both candle closing price is equal.")}
        
        </View>
         
    )
}

