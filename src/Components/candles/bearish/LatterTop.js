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
        
        </View>
      
    )
}

