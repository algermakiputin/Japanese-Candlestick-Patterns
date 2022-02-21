import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function LongBlackBody() {

    return (
        <View>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bearish/long_black_body.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>A long black body is usually seen as a continuation pattern of a downtrend. However, it’s also important to gain the broader sentiment of the market before taking action on this pattern. This candlestick pattern shows strong selling pressure that indicates the current trend and the price drops significantly showing that the sellers are taking control.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>
            <ul>
                <li>Appears at an uptrend</li>
                <li>Long bearish candle that is about thrice or more of the size of at least 5 to 10 previous candles in the chart</li>
                <li>Has an upper and lower shadow that is not longer than its body size</li>
            </ul>
           
        </View>
    )
}

