<template>
    <div class="flex wrap flexCenter mb-xxl mt-xxl" id="main-cont"
         :class="{animation : movieState.choosenFilm, endanimation: movieState.closeSlider}">

        <div class="half" id="film-cont">
            <app-film v-for="(film,i) in movieState.films" :key="i" v-bind="{film}"></app-film>
        </div>
        <div class="half">
            <Slider/>
        </div>

        <!--  <app-modal class="hide" :class="{show: movieState.choosenFilm}"></app-modal>-->
        <!--    <app-modal v-if="movieState.choosenFilm"></app-modal>-->
    </div>
</template>


<script>
    import Film from './Film.vue';
    import AppModal from './Modal.vue';
    import axios from 'axios';
    import Slider from './Slider';
    import {
        movieState
    } from '../states/movieState';
    import { FILMS_API_ADRESS } from '../globals/globals.js';

    export default {
        name: 'AppMain',
        components: {
            Slider,
            'app-film': Film,
            AppModal,
        },
        data: function () {
            return {
                movieState,
                a: movieState
            }
        },
        methods: {
            async filmsServed() {

                try {
                    const result = await axios.get(FILMS_API_ADRESS + '/films');
                    this.movieState.films = result.data;
                    this.movieState.films = this.movieState.films.concat(this.movieState.films).concat(this.movieState.films).concat(this.movieState.films)

                } catch (e) {
                    console.log(e);
                }
            },
        },
        watch: {
            a: function (val) {
                console.log(val)
            }
        },
        async created() {
            this.filmsServed();

        },


    }
</script>

<style lang="less" scoped>
    #main-cont {
        width: 200%;
        margin-top: 100px;
        margin-bottom: 100px;
        flex-grow: 1;
        max-height: 450px;
        overflow-y: scroll;
        overflow-x: hidden;
        position: relative;
    }

    .hide {
        display: none !important;
    }

    .show {
        display: flex !important;
    }

    .half {
        width: 50%;
    }

    #film-cont {
        max-height: 450px;
        overflow-y: scroll;
        display: flex;
        flex-wrap: wrap;
    }

    .animation {
        transition-duration: 1s;
        transform: translate3d(-50%, 0, 0);
    }

    .endanimation {
        transition-duration: 1s;
        transform: translate3d(-0%, 0, 0);
    }

</style>
