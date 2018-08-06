<template>
    <div id="modal" class="flex al-vert al-horiz" @click="hideModal">
    
        <div class="cont-detail-film shadow flex" v-if="movieState.choosenFilm">
    
            <div> <img :src="getImgUrl()" alt=""></div>
            <div class="resume">
                <h2>{{movieState.choosenFilm.titre}}</h2>
                <p>{{movieState.choosenFilm.resume}}</p>
            </div>
    
        </div>
    </div>
</template>

<script>
    import {
        movieState
    } from '../states/movieState';
    
    export default {
        name: 'AppModal',
        components: {
    
        },
    
        data: function() {
            return {
                // ici on doit récupérer l'objet global movieState sinon on init une valeur data à null et du coup on n'a plus les getters /setters
                //ex film = movieState.choosenFilm
                movieState
            }
        },
        methods: {
    
            getImgUrl() {
                return `/imgs/${this.movieState.choosenFilm.img}`
            },
            hideModal() {
                movieState.choosenFilm = null;
            },
            listener({
                code
            }) {
            
                if (code == "Escape") {
                    this.movieState.choosenFilm = null;
                }
            }
        },
        created(){
            window.addEventListener('keydown', this.listener)
        },
        beforeDestroy(){
            window.removeEventListener('keydown', this.listener)
        }

        
    }
</script>

<style lang="less">
    @import '../assets/style/variables.less';
    .cont-detail-film {
        color: #fff;
        padding: 30px;
        background: #0f2027;
        background: -webkit-linear-gradient(to right, #0f2027, #203a43, #2c5364);
        background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
        position: relative;
        width: 550px;
        border-radius: 4px;
        font-size: .7em;
    }
    
    #modal {
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        z-index: 3;
    }
    
    .hide {
        display: none !important;
    }
    
    .resume {
        margin: 20px;
    }
</style>
