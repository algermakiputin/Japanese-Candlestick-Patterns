import React from "react";
import Sound from "react-native-sound";

Sound.setCategory('Playback')
const correct = require('../../assets/audio/correct.mp3');
const wrong = require('../../assets/audio/wrong.mp3');



const SoundEffect = {
    
    correct: (play = false) => {

        const whoosh = new Sound( correct , (error) => {
          if (error) {
            console.log('failed to load the sound', error);
            return;
          }
          
          if (play) {
            whoosh.play((success) => {
              if (success) {
                console.log('successfully finished playing');
              } else {
                console.log('playback failed due to audio decoding errors');
              }
            });
          }
        
        }); 
    },

    wrong: (play) => {

      const whoosh = new Sound(wrong, (error) => {
            if (error) {
              console.log('failed to load the sound', error);
              return;
            }
            
            if (play) {
              whoosh.play((success) => {
                if (success) {
                  console.log('successfully finished playing');
                } else {
                  console.log('playback failed due to audio decoding errors');
                }
              });
            }
           
        }); 
    }
}

export default SoundEffect;