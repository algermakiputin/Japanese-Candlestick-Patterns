import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function ThreeBlackCrows() {

    return (
        
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bearish/three_black_crows.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>The Three Black Crows pattern is the opposite of the Three Advancing White Soldiers pattern. The Three Black Crows pattern is a bearish reversal pattern that consists of three bearish candlesticks that are ominous and dark in color, hence the name. This is a moderate trend reversal pattern that should only come into consideration when it appears in a rally or an established uptrend. The Three Black Crows usually indicate a weakness in an established uptrend and the potential emergence of a downtrend.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>

            {styles.bullet("The current market trend is uptrend.")}
            {styles.bullet("Three consecutive bearish candle with lower close.")}
            {styles.bullet("Little to no lower wicks.")}
            <Text style={styles.div}></Text>
            <Text style={styles.subHeading}>How to trade?</Text>
            <Text style={styles.p}>The Three Black Crows pattern is a very bearish reversal pattern that should be treated with caution. However, if you enter a short position after the pattern completes, you can ride the downtrend for some nice profits. Just be sure to place a stop loss just above the high of the last candlestick in the pattern.</Text>
        </View>
        
    )
}

