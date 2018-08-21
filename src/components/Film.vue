<template>
    <div class="cont-img">
        <div class="overflow"  @click="selectMovie">
            <img :src="getImgUrl()" />
        </div>
        <p>{{ film.titre }}</p>
    </div>
</template>

<script>
    import { movieState } from '../states/movieState';
    import axios from 'axios';
    import { FILMS_API_ADRESS } from '../globals/globals.js';

    export default {
        name: 'Film',
        data: function(){
            return{

            }
        },
        props: ['film'],
        methods: {
            getImgUrl() {
                return `${FILMS_API_ADRESS}/imgs/${this.film.img}`
            },
            async selectMovie(){
                if(!this.film.resume){
                    movieState.loader = true;
                    const result = await axios.get(FILMS_API_ADRESS + '/films/' + this.film.id);
                    this.film.resume = result.data;
                }
                movieState.loader = false;
                movieState.choosenFilm = this.film;

            }
    
        }
    
    }
</script>

<style lang="less">
    @import '../assets/style/variables.less';
    .cont-img {
        margin: 2%;
        max-width: 187px;
    }
    
    .cont-img p {
        color: white;
        text-align: center;
    }
    
    .overflow:hover {
        -moz-box-shadow: 0 0 10px @color1;
        -webkit-box-shadow: 0 0 10px @color1;
        box-shadow: 0 0 10px @color1;
        transition: all 0.3s;
        cursor: pointer;
    }
    
    .overflow {
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        height: 250px;
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        border-radius: 5px;
        overflow: hidden;
    }
    img{
           transform: translateZ(0);
           transition: all 0.2s ease-in-out;
    }
    .overflow:hover{
        img{
            transform: scale3d(1.2,1.2,1.2);
        }
    }
</style>
