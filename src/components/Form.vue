<template>
    <div class="flex wrap flexCenter mb-xxl mt-xxl" id="form">
        <form class="flex" @submit.prevent="getFormValues()">
            <label for="titre" class="m-b">Titre : <input type="text" id="titre" name="titre" v-model="titre"></label>
            <label for="file" class="m-b"><input type="file" id="file" ref="file"
                                                 v-on:change="handleFileUpload()"/></label>
            <label for="resume" class="m-b"><textarea name="resume" id="resume" cols="30" rows="10"
                                                      v-model="resume"></textarea></label>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>


<script>
    import {FILMS_API_ADRESS} from '../globals/globals.js';
    import axios from 'axios';

    export default {
        name: "Form",
        components: {},
        data: function () {
            return {
                titre: null,
                resume: null,
                file: '',
            };
        },
        methods: {
            handleFileUpload() {
                this.file = this.$refs.file.files[0];
            },
            getFormValues() {
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
                    } else {
                        console.log('failed')
                    }
                })
                    .catch(function (err) {
                        console.log(err)
                    });
            },
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