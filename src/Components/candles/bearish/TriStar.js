import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function TriStar() {

    return (
         
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bearish/tri_star.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>A bearish Tri-Star pattern can form when three Doji candlesticks appear in immediate succession at the end of an extended uptrend. The first Doji candle marks indecision between bull and bear. The second Doji gaps in the direction of the leading trend. The third changes the attitude of the market once the candlestick opens in the direction opposite to the trend. Each Doji candle has a shadow, all comparatively shallow, which signifies an interim cutback in volatility.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>

            {styles.bullet("The tri-star candlestick pattern is a 3-bar trend reversal pattern.")}
            {styles.bullet("There must be a clear and defined trend in the market.")}
            {styles.bullet("Three consecutive Doji candles must appear.")}
            {styles.bullet("The second Doji candle must create a gap below the first and third Doji candles creating a shape that resembles the letter “V” (or the opposite for the bearish variation).")} 
            <Text style={styles.div}></Text>
            <Text style={styles.subHeading}>How to trade?</Text>
            <Text style={styles.p}>The bearish tri-star pattern is a powerful signal, but it is important to remember that it is not a guarantee that a reversal will occur. This pattern should be used as a way to signal a potential reversal, but it should not be used as the sole reason to enter a trade.</Text>
            <Text style={styles.p}>If you see this pattern forming on a chart, you can enter a short position when the third candlestick closes. Your stop loss should be placed just above the high of the third candlestick.</Text>
        </View>
        
    )
}

