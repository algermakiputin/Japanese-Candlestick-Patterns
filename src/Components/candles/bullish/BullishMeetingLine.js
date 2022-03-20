import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function BullishMeetingLine() {

    return (
         
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bullish/meeting_line.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>A bullish meeting line is a two-day candlestick pattern that appears at the bottom of a downtrend and indicates a possible trend reversal. The first day of this pattern consists of a long bearish candlestick, the next day price gaps down as the sellers are more confident that the price will continue to drop, however, the bulls begin to push the price higher and manage to close to the same price as the previous candle, this could indicate that a bearish trend may come to an end. </Text>
            <Text style={styles.div}></Text>
            <Text style={styles.subHeading}>How to recognise?</Text>

            {styles.bullet("The trend must be downtrend.")}
            {styles.bullet("The first day candlestick is a bearish candle.")}
            {styles.bullet("The second day candlestick price gaps down at the open and closes equal to the previous candlestick closing price.")}

            <Text style={styles.div}></Text>
            <Text style={styles.subHeading}>How to trade?</Text> 
            <Text style={styles.p}>This pattern can be used as a trade entry signal when the following conditions are met: </Text>
            <Text style={styles.p}>1. The market is in a downtrend</Text>
            <Text style={styles.p}>2. The first candlestick is a bearish candlestick</Text>
            <Text style={styles.p}>3. The second candlestick is a bullish candlestick</Text>
            <Text style={styles.p}>4. The second candlestick closes above the midpoint of the first candlestick</Text>
            <Text style={styles.p}>When these conditions are met, you can enter a long trade at the open of the third candlestick. Your stop loss should be placed below the low of the second candlestick. Your target profit can be placed at a previous support level.</Text>
        </View>
       
    )
}

