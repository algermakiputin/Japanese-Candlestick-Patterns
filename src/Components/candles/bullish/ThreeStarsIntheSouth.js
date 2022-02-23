import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function ThreeStarInTheSouth() {

    return (
       
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bullish/Kicking.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>The three stars in the south is a bullish reversal pattern made up of three candles, and it comes up on candlestick charts. It may appear after a price fall, and it indicates that the bearishness is reducing. The pattern is very rare, it doesn’t appear easily.</Text>
            <Text style={styles.p}>It is discovered when during a downtrend, a long bearish candlestick with a long lower shadow is preceded by a smaller version of the initial candlestick with a lower high and a higher low, followed by a small black Marubozu which starts and ends in the range of the initial candlestick. It is necessary to remember that every price range is completely covered by the range of the previous candle.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>

            {styles.bullet("The market has to be in a downtrend.")}
            {styles.bullet("The first candlestick is black, with a long real body, long lower shadow, and it lacks an upper shadow.")}
            {styles.bullet("The second candlestick is black with a shorter real body and a low that’s higher than that of the first low candle.")}
            {styles.bullet("The third candlestick is black with a short real body, without shadows, and a close that is within the second candle’s high-low range.")}
        
        </View>
        
    )
}

