import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function LatterTop() {

    return (
       
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bearish/latter_top.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>This is a five candlestick pattern that starts with three strong white candlesticks. The uptrend continues with the fourth higher close. The next day's gaps are lower and close much lower than the previous day or two. This may imply a bearish reversal.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>

            {styles.bullet("The market is characterized by a prevailing uptrend.")}
            {styles.bullet("Three strong white candlesticks occur much like the Three White Soldiers pattern.")}
            {styles.bullet("The fourth white candlestick closes also higher but has a long lower shadow.")}
            {styles.bullet("The fifth day is a strong black with an open below the previous day’s body.")}
            <Text style={styles.div}></Text>
            <Text style={styles.subHeading}>How to trade?</Text>
            <Text style={styles.p}>In order to trade the Bearish Latter Top candlestick pattern, you must first identify it. This pattern is created when there is a long white candlestick, followed by a black candlestick, and then a smaller white candlestick. The small white candlestick must close within the body of the black candlestick. This pattern is a bearish reversal pattern and can be found at the top of an uptrend.</Text>
            <Text style={styles.p}>Once you have identified the pattern, you can begin to place your trade. For this pattern, you will want to place a sell order just below the low of the black candlestick. Your stop loss should be placed just above the high of the black candlestick. As for your target, you can either take profit at the next support level or you can hold the trade until you see the Bearish Engulfing candlestick pattern form.</Text>
        </View>
      
    )
}

