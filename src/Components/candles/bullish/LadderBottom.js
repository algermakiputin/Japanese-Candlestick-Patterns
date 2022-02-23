import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function LadderBottom() {

    return (
      
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bullish/ladder_bottom.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>The ladder bottom is a five candle pattern that signifies stock price is bottoming and could lead to a potential bullish reversal. This pattern is supposed to be a bullish reversal but in reality, it only works a little more than 50% of the time. Therefore, it is ideal to wait patiently for the stock price to make its move or a breakout of this pattern before you make your move.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>

            {styles.bullet("Ladder Bottom is a 5 candle bullish reversal pattern.")}
            {styles.bullet("The first three candles are bearish candles with successive lower open and closing price.")}
            {styles.bullet("The fourth candle resembles an inverted hammer that has a small body and long upper shadow.")}
            {styles.bullet("The fifth candle is a long bullish candle that gaps up and open the price above the body of the fourth candle.")}
        
        </View>
        
    )
}

