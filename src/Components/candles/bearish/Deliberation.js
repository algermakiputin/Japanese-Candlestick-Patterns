import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function Deliberation() {

    return (
       
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bearish/deliberation.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>The deliberation pattern can occur in both bull and bear markets. This pattern is formed by two long white (or green) bodies that are then followed by a small white (or green) candle. The deliberation pattern can resemble two other candlestick patterns, depending upon whether it is bullish or bearish in nature. The bearish deliberation pattern resembles the three black crows and the bullish deliberation pattern resembles the three white soldiers' formation. It is important to note that the bullish deliberation pattern is a weaker pattern and is less popular than its counterpart, the bearish deliberation pattern. Many don’t use the bullish deliberation as a true reversal pattern but rather to signify a short-term price change indicator.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>
            { styles.bullet("Market is characterized by a prevailing uptrend.") }
            { styles.bullet("A white candlestick appears on the first day.") }
            { styles.bullet("The next day is another white candlestick, which opens within the range of the previous day’s body and closes above the previous day’s close.") }
            { styles.bullet("The final day is a short white candlestick, a spinning top or a Doji that gaps up above the second day.") }
            <Text style={styles.div}></Text>
            <Text style={styles.subHeading}>How to trade?</Text>
            <Text style={styles.p}>The bearish deliberation candlestick pattern is a great way to trade the markets! This pattern is created when the market is in a period of consolidation and the bulls and bears are fighting for control. The pattern is formed by two candlesticks, the first candle is white and the second candle is black. The second candle must close below the midpoint of the first candle for the pattern to be valid.</Text>
            <Text style={styles.p}>This pattern is a great way to trade the markets because it shows that the bears are in control and that the market is likely to continue to move lower. If you see this pattern form, you should look to enter a short position.</Text>
        </View>
       
    )
}

