import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function IdenticalThreeCrows() {

    return (
        <View>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bearish/identical_three_crows.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>Identical Three Crows is a three candlestick bearish reversal pattern occuring during an uptrend. The first candle is long-bodied and black. The second and third candles open at the close of the previous candle in the series.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>
            <ul>
                <li>The identical three crows candlestick pattern is a 3-bar bearish reversal pattern.</li>
                <li>It occurs during an uptrend.</li>
                <li>It is made of three consecutive bearish candlesticks.</li>
            </ul>
           
        </View>
    )
}

