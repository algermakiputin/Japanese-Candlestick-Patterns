import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function BullishInvertedHammer() {

    return (
         
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bullish/inverted_hammer.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>The Inverted Hammer is a bullish reversal pattern that can be found at the bottom of a downtrend. It is created when the open, high, and close are roughly equal with a small real body and a long upper shadow. The long upper shadow shows that the bears were in control for most of the session, but the bulls were able to push prices back up near the close, creating a hammer shape.</Text>
            <Text style={styles.p}>The Inverted Hammer is a bullish reversal pattern, which means it can be used to signal the end of a downtrend and the start of an uptrend. However, it's important to wait for confirmation before entering a trade, as the pattern can occasionally occur in a ranging market. The best way to confirm an Inverted Hammer is with a bullish candlestick in the following session.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>

            {styles.bullet("Little or no lower shadow.")}
            {styles.bullet("Open and close price is very close to each other, forming a very small candlestick body.")}
            {styles.bullet("The upper shadow is about twice the size of it's body.")}
            <Text style={styles.div}></Text>
            <Text style={styles.subHeading}>How to trade?</Text>
            <Text style={styles.p}>If you see an Inverted Hammer at the bottom of a downtrend, it's a good idea to enter a long position. Place a stop loss just below the low of the Inverted Hammer candlestick, and look for a target price above the recent high.</Text> 
        </View>
        
    )
}

