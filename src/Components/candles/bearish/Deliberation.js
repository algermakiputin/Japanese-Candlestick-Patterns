import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function Deliberation() {

    return (
        <View>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bullish/abandoned_baby.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>The deliberation pattern can occur in both bull and bear markets. This pattern is formed by two long white (or green) bodies that are then followed by a small white (or green) candle. The deliberation pattern can resemble two other candlestick patterns, depending upon whether it is bullish or bearish in nature. The bearish deliberation pattern resembles the three black crows and the bullish deliberation pattern resembles the three white soldiers' formation. It is important to note that the bullish deliberation pattern is a weaker pattern and is less popular than its counterpart, the bearish deliberation pattern. Many don’t use the bullish deliberation as a true reversal pattern but rather to signify a short-term price change indicator.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>
            <ul>
                <li>Market is characterized by a prevailing uptrend.</li>
                <li>A white candlestick appears on the first day.</li>
                <li>The next day is another white candlestick, which opens within the range of the previous day’s body and closes above the previous day’s close.</li>
                <li>The final day is a short white candlestick, a spinning top or a Doji that gaps up above the second day.</li>
            </ul>
           
        </View>
    )
}

