import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function BeltHold() {

    return (
        
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bearish/belt_hold.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>A bearish belt hold is a pattern that often signals a reversal in investor sentiment from bullish to bearish. However, the bearish belt hold is not considered very reliable as it occurs frequently and is often incorrect in predicting future share prices. As with any other candlestick charting method, more than two days of trading should be considered when making predictions about trends.</Text>
            <Text style={styles.p}>A Bearish Belt Hold candlestick pattern consists of two candlesticks in which the first candlestick is bullish while the second one is bearish. For a bearish hold to form, two conditions need to be fulfilled. the first candle should be bullish while in an up-trending market. The next candle gaps up and then close at/near to the close of the previous candle.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>

            {styles.bullet("This is a two candle pattern that appears in an uptrend.")}
            {styles.bullet("The first candle is a normal bullish candle indicating the current market sentiment.")}
            {styles.bullet("The second candle opening price gaps up with no upper shadow and then closes near at the first candle's body.")}
            <Text style={styles.div}></Text>
            <Text style={styles.subHeading}>How to trade?</Text>
            <Text style={styles.p}>The pattern is considered bearish because it shows that the bears are in control. This is a good time to short the market or sell your long positions.</Text>
            <Text style={styles.p}>The key to trading this pattern is to wait for the second candlestick to form and then enter a short position at the opening of the third candlestick.</Text>
            <Text style={styles.p}>The stop loss can be placed above the high of the second candlestick.</Text>
            <Text style={styles.p}>The target for the trade can be placed at the previous low.</Text>
        </View>
         
    )
}

