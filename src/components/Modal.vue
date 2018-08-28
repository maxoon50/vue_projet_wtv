
<template>
    <div id="modal" class="flex al-vert al-horiz" @click="hideModal">

        <div class="cont-detail-film shadow flex" v-if="movieState.choosenFilm">

            <div><img :src="getImgUrl()" alt=""></div>
            <div class="resume">
                <h2 v-if="!formMode">{{movieState.choosenFilm.titre}}</h2>
                <div v-if="formMode">
                    <label for="titre">Titre :<input v-on:click.stop
                                                     type="text"
                                                     name="titre"
                                                     id="titre"
                                                     v-model="movieState.choosenFilm.titre">
                    </label>
                </div>
                <p v-if="!formMode">{{movieState.choosenFilm.resume}}</p>
                <div v-if="formMode">
                    <label for="resume">Résumé :<textarea v-on:click.stop
                                                          type="text"
                                                          name="resume"
                                                          id="resume"
                                                          v-model="movieState.choosenFilm.resume"
                                                          rows="20" cols="50"/>
                    </label>
                </div>
                <button v-if="formMode" v-on:click.stop @click="modifyMovie()">Save</button>
                <button v-if="formMode" v-on:click.stop  @click="formMode = !formMode">Cancel</button>
            </div>
            <div v-if="!formMode">
                <button @click="formMode = true" v-on:click.stop>modifier</button>
                <button @click="deleteMovie">supprimer</button>
            </div>
        </div>
    </div>
</template>

<script>
    import {FILMS_API_ADRESS} from '../globals/globals.js';
    import axios from 'axios';
    import {
        movieState
    } from '../states/movieState';
    import { EventBus } from "../main";

    export default {
        name: 'AppModal',
        components: {
    
        },
    
        data: function() {
            return {
                // ici on doit récupérer l'objet global movieState sinon on init une valeur data à null et du coup on n'a plus les getters /setters
                //ex film = movieState.choosenFilm
                movieState,
                formMode : false,
            }
        },
        methods: {
            deleteMovie(){
                let that = this;
                let yesOrNo = confirm('Êtes-vous sûr de vouloir supprimer ce film?');
                let film = this.movieState.choosenFilm;
                if(yesOrNo){
                    axios.delete(FILMS_API_ADRESS + '/film/'+ this.movieState.choosenFilm.id,
                    ).then(function (result) {
                        if (result.status == 200) {
                            movieState.films.find((elt, index)=>{
                                if(elt.id == film.id){
                                    movieState.films.splice(index, 1);
                                }
                            });
                        }
                    }).catch((err)=>{
                        console.log(err)
                    })
                }
            },
            modifyMovie() {
                let form = this;
                let formData = new FormData();
                formData.append('datas', JSON.stringify({
                    titre: this.movieState.choosenFilm.titre,
                    resume: this.movieState.choosenFilm.resume
                }));
                axios.post(FILMS_API_ADRESS + '/film/'+ this.movieState.choosenFilm.id,
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then(function (result) {
                    if (result.status == 200) {
                        console.log('c est gagné')
                    }
                }).catch(function (error) {
                    if (error.response && error.response.status === 400) {
                        if (error.response.status === 400) {
                            let datas = error.response.data.errors;
                            form.getErrors(datas);
                        } else if (error.response.status === 500) {
                            console.log('erreur 500');
                        }
                    }
                });
                this.formMode = false;
            },
            getImgUrl() {
                return `/imgs/${this.movieState.choosenFilm.img}`
            },
            hideModal() {
                movieState.closeSlider= true;
                this.formMode = false;
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
/*        position: fixed;
        top: 0;*/
        width: 100%;
        height: 100%;
/*        background-color: rgba(0, 0, 0, .5);
        z-index: 3;*/
    }
    

    
    .resume {
        margin: 20px;
    }

</style>
