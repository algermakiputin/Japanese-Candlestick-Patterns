import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function ThreeInsideUp() {

    return (
        <View>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bullish/ThreeInsideUp.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>Bullish Three inside up is a 3 bar pattern that indicates that the current bearish trend is weakening and shows a potential trend reversal. The first candle of this pattern is a long bearish candle that shows the current trend, followed by a short green candle that opens and closes within the body of the first and the third is a bullish large candle that closes above the first candle. This type of pattern is generally short-term and may not always result in a trend reversal. That is why when using this pattern it is important to determine the overall trend, like for example during a pullback of the long-term bullish trend.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>
            <ul>
                <li>The first candle of this pattern is a red candle indicating the current trend</li>
                <li>The second candle is a small bullish candle that opens and closes within the middle of the first candle</li>
                <li>The third candle is bullish and closes above the first candle</li>
            </ul>
           
        </View>
    )
}

