import React from "react";
import Sound from "react-native-sound";

Sound.setCategory('Playback')

const SoundEffect = {
    
    correct: () => {

        var whoosh = new Sound('correct.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
              console.log('failed to load the sound', error);
              return;
            }
            
            whoosh.play((success) => {
                if (success) {
                  console.log('successfully finished playing');
                } else {
                  console.log('playback failed due to audio decoding errors');
                }
              });
           
        }); 
    },

    wrong: () => {

        var whoosh = new Sound('wrong.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
              console.log('failed to load the sound', error);
              return;
            }
            
            whoosh.play((success) => {
                if (success) {
                  console.log('successfully finished playing');
                } else {
                  console.log('playback failed due to audio decoding errors');
                }
              });
           
        }); 
    }
}

export default SoundEffect;