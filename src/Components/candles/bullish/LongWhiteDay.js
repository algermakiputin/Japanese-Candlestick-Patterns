import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function longWhiteDay() {

    return (
        
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bullish/long_white_day.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>Long White Day is a one-day candlestick pattern that reflects a strong buying pressure on the market. This candlestick is generally bullish. However, its position within the broader technical picture is also important. It may show a potential turning point and suggest that prices have reached a support level after an extended decline. If it is seen after a long and significant rally, it may point to excessive bullishness, and that prices are at dangerously high levels. Still, the candlestick alone is not reliable enough to decide the direction of the markets, since it reflects only one day’s trading.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>
            {styles.bullet('This candle is easy to recognize because it is only composed of 1 candle')}
            {styles.bullet('Made up of long body, longer than previous candles on the chart')}
            {styles.bullet('The length of this candle should completely contain previous candles on the chart')}
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to trade?</Text>
            <Text style={styles.p}>The long white candlestick is a bullish reversal pattern that can be used to trade the markets. There are a few ways to trade this pattern, but one way is to look for a long white candlestick to form after a period of consolidation or a downtrend. This signals that the market is ready to move higher and that the buyers are in control. Another way to trade this pattern is to look for a long white candlestick to form after an upthrust. This signals that the market is ready to move higher and that the buyers are in control.</Text>
        </View>
        
    )
}

