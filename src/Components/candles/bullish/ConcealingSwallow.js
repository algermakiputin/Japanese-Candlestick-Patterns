import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function ConcealingSwallow() {

    return (
       
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bullish/concealing_baby_shadow.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>The concealing baby swallow candlestick pattern is a bullish reversal pattern that appears during a downtrend. It consists of four candlesticks that give an early signal of a downtrend’s deterioration. The logic behind this pattern is that bulls respond very quickly to the first two candles occurring during a downtrend. After the first two candles, the buying pressure increases, and prices reject to decline. It results in the formation of a long bullish candle that indicates an upcoming reversal of the trend. The concealing baby swallow is a very rare but reliable trading pattern. Although it is a bit tricky to identify the concealing baby swallow, it is a very important pattern that not only tells traders about trend reversal but also sheds light on the overall behavior of the market.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>

            {styles.bullet("The first candle must be a Black Marubozu appearing during a downtrend.")}
            {styles.bullet("The second candle must also be a Black Marubozu. It opens within the body of the previous candle and closes below the previous closing price.")}
            {styles.bullet("The first two candles are without any upper or lower shadow.")}
            {styles.bullet("The third candle must be a High Wave without a lower shadow. It opens below the previous closing price while its upper shadow enters the body of the previous candle.")}
            {styles.bullet("The fourth candle must have a black body engulfing the body and upper shadow of the previous candle.")} 
            <Text style={styles.div}></Text>
            <Text style={styles.subHeading}>How to trade?</Text> 
            <Text style={styles.p}>To trade this pattern, you would want to look for a stock that is starting to form the pattern and then wait for the breakout. Once the stock breaks out above the high of the fourth candlestick body, you would enter a long position.</Text>
            <Text style={styles.p}>Your stop loss would be placed just below the low of the fourth candlestick body, and your target would be the most recent swing high.</Text>
            <Text style={styles.p}>Keep in mind that this pattern is not foolproof, and there is always the potential for a false breakout. So, make sure you use proper risk management techniques when trading it.</Text>
        </View>
        
    )
}

