<template>
    <div class="flex wrap flexCenter mb-xxl mt-xxl" id="form">
        <form class="flex" @submit.prevent="submitForm()">
            <label for="titre" class="m-b">Titre :
                <input :class="{error: titreError}"
                       type="text"
                       id="titre"
                       name="titre"
                       v-model="titre">
                <span v-if="titreError" :class="{texterror: titreError}"> ! </span>
            </label>
            <label for="file" class="m-b">
                <input :class="{error: fileError}"
                       type="file"
                       id="file"
                       ref="file"
                       v-on:change="handleFileUpload()"/>
                <span v-if="fileError" :class="{texterror: fileError}"> ! </span>
            </label>
            <label for="resume" class="m-b">
                <textarea :class="{error: resumeError}"
                          name="resume"
                          id="resume"
                          cols="30"
                          rows="10"
                          v-model="resume">

                </textarea>
                <span v-if="resumeError" :class="{texterror: resumeError}"> ! </span>
            </label>
            <button type="submit">Submit</button>
            <p v-if="titreError || resumeError || fileError" class="texterror">Merci de remplir les champs demandés</p>
        </form>

    </div>
</template>


<script>
    import {FILMS_API_ADRESS} from '../globals/globals.js';
    import axios from 'axios';

    let formDatas = ['titre', 'resume', 'file'];

    export default {
        name: "Form",
        components: {},
        data: function () {
            return {
                titre: null,
                resume: null,
                file: '',
                titreError: false,
                resumeError: false,
                fileError: false
            };
        },
        methods: {
            handleFileUpload() {
                this.file = this.$refs.file.files[0];
            },
            resetErrors() {
                formDatas.forEach(elt => {
                    let property = `${elt}Error`;
                    this[property] = false;
                })
            },
            submitForm() {
                this.resetErrors();
                let form = this;
                let formData = new FormData();
                formData.append('file', this.file);
                formData.append('datas', JSON.stringify({
                    titre: this.titre,
                    resume: this.resume
                }));
                axios.post(FILMS_API_ADRESS + '/film',
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
                            let datas = error.response.data.errors;
                            form.getErrors(datas);
                        }
                });
            },
            getErrors(errors) {
                errors.forEach(elt => {
                        let property = `${elt}Error`;
                        this[property] = true;
                })
            }
        },
        watch: {}
    };
</script>

<style lang="less" scoped>
    form {
        display: flex;
        flex-direction: column;
        padding: 50px;
        background-color: whitesmoke;
        border-radius: 4px;
        margin: 50px;
    }

    .error {
        border: 1px solid red;
    }

    .texterror {
        color: red;
    }

    .m-b {
        margin-bottom: 20px;
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
*/