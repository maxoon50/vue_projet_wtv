<template>
    <div class="lds-ripple"  v-if="movieState.loader"><div></div><div></div></div>
</template>

<script>
    import {
        movieState
    } from '../states/movieState';
    export default {
        name: "Loader"
        ,  data: function() {
            return {
                // ici on doit récupérer l'objet global movieState sinon on init une valeur data à null et du coup on n'a plus les getters /setters
                //ex film = movieState.choosenFilm
                movieState
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../assets/style/variables.less';
    .lds-ripple {
        display: inline-block;
        position: absolute;
        top: 50%;
        z-index: 100;
        width: 64px;
        height: 64px;
    }
    .lds-ripple div {
        position: absolute;
        border: 4px solid @color1;
        opacity: 1;
        border-radius: 50%;
        animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }
    .lds-ripple div:nth-child(2) {
        animation-delay: -0.5s;
    }
    @keyframes lds-ripple {
        0% {
            top: 28px;
            left: 28px;
            width: 0;
            height: 0;
            opacity: 1;
        }
        100% {
            top: -1px;
            left: -1px;
            width: 58px;
            height: 58px;
            opacity: 0;
        }
    }
</style>