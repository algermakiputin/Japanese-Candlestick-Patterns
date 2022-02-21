import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function UniqueThreeRiverBottom() {

    return (
        <View>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bullish/unique_three_river_bottom.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>As its name implies, this three-price candlestick pattern is very unique in that it extremely appears on the chart. If it appears on a bearish trend and the price moves higher after the pattern then it’s a sign of a bullish reversal. The first candle of this pattern is a long bearish candle, the second candle is a hammer with a long lower shadow and the third candle is a short green candle, its opening price must be lower than the second candle and the open and close price must stay within the range of the second candle.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>
            <ul>
                <li>The First is a long red candle that shows the current trend</li>
                <li>The second candle is a hammer candle with a long shadow that sets a new low price</li>
                <li>The third candle is a short green candle that does not exceed the high or low of the second candle</li>
            </ul>
           
        </View>
    )
}

