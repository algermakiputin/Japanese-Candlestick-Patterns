import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function IdenticalThreeCrows() {

    return (
       
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bearish/identical_three_crows.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>Identical Three Crows is a three candlestick bearish reversal pattern occuring during an uptrend. The first candle is long-bodied and black. The second and third candles open at the close of the previous candle in the series.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>

            {styles.bullet("The identical three crows candlestick pattern is a 3-bar bearish reversal pattern.")}
            {styles.bullet("It occurs during an uptrend.")}
            {styles.bullet("It is made of three consecutive bearish candlesticks.")}
            <Text style={styles.div}></Text>
            <Text style={styles.subHeading}>How to trade?</Text>
            <Text style={styles.p}>If you see this pattern forming, it's time to start thinking about selling your position. This is because the Three Crows pattern is a strong indication that the current trend is about to reverse and the price is going to start falling.</Text>
            <Text style={styles.p}>To trade the Three Crows pattern, you can sell short when the third black candle closes. Place a stop loss above the high of the third candle. Take profit when prices fall to the support level.</Text>
        </View>
        
    )
}

