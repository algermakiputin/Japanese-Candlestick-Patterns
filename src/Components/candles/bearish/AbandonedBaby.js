import React from "react";
import { View, Text, Image } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function AbandonedBaby() {

    return (
       
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bearish/abandoned_baby.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>The Bearish Abandoned Baby is a three-line bearish reversal candlestick pattern. Its construction is very similar to the Evening Doji Star. The only difference is that in the case of the Bearish Abandoned Baby the Doji candle gaps above the shadows of the candle lines on either side, which is not the case for the Evening Doji Star.</Text>
            <Text style={styles.p}>The Doji candle can be of any type except the Four-Price Doji. In other words, it can be any of the following Doji types: Doji, Long-Legged Doji, Dragonfly Doji, Gravestone Doji. The pattern needs to be confirmed, either by breaking the trendline or the nearest support zone. The Bearish Abandoned Baby pattern appears very rarely on the charts hence its practical application is rather low.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>

            {styles.bullet("The first candle is a bullish candle.")}
            {styles.bullet("The second candle is a doji candle.")}
            {styles.bullet("The third candle gaps down below the second candle shadow, and closes within the midpoint of the first candlestick.")}
        
        </View> 
    )
}

