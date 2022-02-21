import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function MatchingHigh() {

    return (
        <View>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bearish/matching_high.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>This pattern occurs when two white days appear with equal closes in an uptrend. It indicates a top has been reached, even though the new high was tested and there was no follow-through, which is indicative of a good resistance price.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>
            <ul>
                <li>The market is characterized by a prevailing uptrend. </li>
                <li>A white body is observed on the first day.</li>
                <li>The second day follows with another white candlestick whose closing price is exactly equal to the closing price of the first day.</li>
            </ul>
           
        </View>
    )
}

