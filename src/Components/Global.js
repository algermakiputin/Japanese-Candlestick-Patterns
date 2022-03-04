import {Dimensions} from 'react-native'

const SCALE = 412;
const SCREEN_WIDTH = Dimensions.get('window').width;

global.scaleFontSize = fontSize => {
    
    const ratio = fontSize / SCALE;
    const newSize = Math.round(ratio * SCREEN_WIDTH);
    return newSize;
}
 