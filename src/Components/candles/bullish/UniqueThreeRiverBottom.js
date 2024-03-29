import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function UniqueThreeRiverBottom() {

    return (
         
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bullish/unique_three_river_bottom.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>As its name implies, this three-price candlestick pattern is very unique in that it extremely appears on the chart. If it appears on a bearish trend and the price moves higher after the pattern then it’s a sign of a bullish reversal. The first candle of this pattern is a long bearish candle, the second candle is a hammer with a long lower shadow and the third candle is a short green candle, its opening price must be lower than the second candle and the open and close price must stay within the range of the second candle.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>

            {styles.bullet("The First is a long red candle that shows the current trend.")}
            {styles.bullet("The second candle is a hammer candle with a long shadow that sets a new low price.")}
            {styles.bullet("The third candle is a short green candle that does not exceed the high or low of the second candle.")}
            <Text style={styles.div}></Text>
            <Text style={styles.subHeading}>How to trade?</Text> 
            <Text style={styles.p}>To trade this pattern, you would buy when the white candlestick closes above the midpoint of the first black candlestick. Your stop loss would go below the low of the white candlestick, and your target would be the high of the first black candlestick.</Text>
        </View>
         
    )
}

