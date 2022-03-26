import {Dimensions} from 'react-native'
import { AdMobInterstitial } from 'react-native-admob'; 

const SCALE = 410;
const SCREEN_WIDTH = Dimensions.get('window').width;

global.scaleFontSize = fontSize => {
    
    const ratio = fontSize / SCALE;
    const newSize = Math.round(ratio * SCREEN_WIDTH);
    return newSize;
}

global.counter = 0;
global.headerColor = "rgba(255,255,255,0.70)";
global.paragraphColor = "#abb1be";

global.requestAd = () => {

    AdMobInterstitial.setAdUnitID('ca-app-pub-4118987136087583/2259798849'); 
    AdMobInterstitial.requestAd(); 
}

global.showAd = () => {

    if (global.counter%5 == 0) {
        AdMobInterstitial.showAd();
        global.requestAd();
    }
        
}
 