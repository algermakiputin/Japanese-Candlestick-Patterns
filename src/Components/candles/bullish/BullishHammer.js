import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function BullishHammer() {

    return (
         
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bullish/hammer.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>A bullish hammer is a one-day candlestick pattern that signals a market turning point to bullish trends. A Hammer occurs after a stock price has been declining, suggesting that the market is attempting to reach the bottom. </Text>
            <Text style={styles.p}>A Hammer is formed after the sellers drive the prices down during the trading session, followed by a strong buying pressure and drive prices back up. </Text>
    
            <Text style={styles.subHeading}>How to recognise?</Text>
            
            {styles.bullet('Looks like a letter T')}
            {styles.bullet("The opening price and closing price are very close to each other forming a very small candlestick body")}
            {styles.bullet("The lower shadow is at least twice of its body size")}
            <Text style={styles.div}></Text>
            <Text style={styles.subHeading}>How to trade?</Text>
            <Text style={styles.p}>The Bullish Hammer candlestick pattern is a powerful signal that can be used to trade a variety of markets. Here are a few ideas on how to trade this pattern:</Text>
            <Text style={styles.p}>1. Look for the Bullish Hammer pattern after a period of bearish price action. This suggests that the market is ready to reverse and head higher.</Text>
            <Text style={styles.p}>2. Enter a long position when the candlestick closes above the high of the Bullish Hammer.</Text>
            <Text style={styles.p}>3. Place a stop loss just below the low of the Bullish Hammer.</Text>
            <Text style={styles.p}>4. Target the previous high for your take profit level.</Text>
            <Text style={styles.p}>5. You can also look to trade the Bullish Hammer pattern on higher timeframes such as the daily or weekly chart. This can give you a longer-term view of the market and help you stay in winning trades for longer.</Text>
        </View>
      
    )
}

