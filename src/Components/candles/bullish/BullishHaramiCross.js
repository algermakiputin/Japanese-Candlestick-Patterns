import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function BullishHaramiCross() {

    return (
        
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bullish/harami_cross.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>Harami Cross is a two day candlestick pattern that consist of a large bearish candlestick, followed by a small doji candlestick. Bullish Harami Cross appears when the original trend and candlestick is downtrend, indicates that the price may turn up and the trend may reverse soon. </Text>
            <Text style={styles.div}></Text>
            <Text style={styles.subHeading}>How to recognise?</Text>

            {styles.bullet("This is a two price candle pattern.")}
            {styles.bullet("The first candlestick of this pattern completely engulf the next day candle.")}
            {styles.bullet("The second candle is a Doji candle with lower and upper shadows, about the same size on both shadows.")}
            {styles.bullet("The current trend must be a downtrend.")}
            
        </View>
        
    )
}

