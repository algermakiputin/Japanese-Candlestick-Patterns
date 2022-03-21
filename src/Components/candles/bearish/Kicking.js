import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function Kicking() {

    return (
       
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bearish/kicking.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>A bearish Kicking (also known as Kicker) pattern signals a reversal for a new downtrend. The pattern consists of two candles and highlights candles where a fast price reversal can be seen. The first candlestick is a bullish marubozu. The second day gaps down extensively and opens below the opening price of the day before. There is a gap between day one and two’s bearish candlesticks.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>

            {styles.bullet("The current trend must be uptrend. ")}
            {styles.bullet("The first candle is a bearish green candle.")}
            {styles.bullet("The second candle opening price gaps downward and closes below its opening price.")}
            <Text style={styles.div}></Text>
            <Text style={styles.subHeading}>How to trade?</Text>
            <Text style={styles.p}>If you're looking to trade the Bearish Kicking Candlestick Pattern, there are a few things you need to know. First, this pattern is typically found at the top of an uptrend and signals a potential reversal. So, you'll want to be on the lookout for this pattern when the market is in an uptrend. Second, the Bearish Kicking Candlestick Pattern is made up of two candles. The first candle is a long white candle followed by a short black candle. The key here is that the black candle should close below the midpoint of the white candle. This is what signals the potential reversal. Finally, when trading this pattern, you'll want to enter on a break of the low of the black candle. This will give you the best chance of success.</Text>
        </View>
        
    )
}

