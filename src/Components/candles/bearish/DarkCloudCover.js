import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Styles from "../../SingelePageStyles"; 
const styles = Styles;

export default function DarkCloudCover() {

    return (
        <View>
            <Image style={styles.image} source={require('../../../../assets/images/candles/bearish/dark_cloud_cover.png')} />
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.p}>Dark Cloud Cover is a two-candlestick pattern that is formed when a down (black or red) candle opens above the close of the prior up a white candle, then closes below the midpoint of the up candle. When you spot the Dark Cloud Cover pattern on a Japanese candlestick chart, expect a potential bearish reversal.  It is not as strong a signal as the more definitive bearish engulfing pattern. Nonetheless, dark cloud cover is important to note as a potential bearish indicator, especially if it forms on a higher time frame chart, such as a daily chart. On lower time frames, its significance is considerably reduced.</Text>
            <Text style={styles.div} />
            <Text style={styles.subHeading}>How to recognise?</Text>
            <ul>
                <li>Current trend must be uptrend. </li>
                <li>The first candlestick is a white/green candle with a long real body.</li>
                <li>The next candle gaps higher, but then turns black/red and closes in the lower half of the body of the preceding candle.</li>
            </ul>
           
        </View>
    )
}

