/*export const movieState =
    {

      }*/
import Vue from 'vue'
      export const movieState =new Vue({
          data: {
              films: null,
              choosenFilm: null,
              loader : false,
              closeSlider: false
          },
          watch:{
              closeSlider: function(){

                     setTimeout(()=>{
                         movieState.choosenFilm = null;
                         movieState.closeSlider = false;
                     },900)

              },

          }
      })