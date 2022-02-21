import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function LatterTop() {

    return (
        <View>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bearish/latter_top.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>This is a five candlestick pattern that starts with three strong white candlesticks. The uptrend continues with the fourth higher close. The next day's gaps are lower and close much lower than the previous day or two. This may imply a bearish reversal.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>
            <ul>
                <li>The market is characterized by a prevailing uptrend.</li>
                <li>Three strong white candlesticks occur much like the Three White Soldiers pattern.</li>
                <li>The fourth white candlestick closes also higher but has a long lower shadow. </li>
                <li>The fifth day is a strong black with an open below the previous day’s body.</li>
            </ul>
           
        </View>
    )
}

