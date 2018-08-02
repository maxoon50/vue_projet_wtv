<template>
    <div id="modal" class="flex al-vert al-horiz hide" @click="closeModal">
    
        <div class="cont-detail-film shadow flex" v-if="filmSelected">
    
            <div> <img :src="getImgUrl()" alt=""></div>
            <div class="resume">
                <h2>{{filmSelected.titre}}</h2>
                <p>{{filmSelected.resume}}</p>
            </div>
    
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AppModal',
        components: {
    
        },
        props: ['filmSelected', 'closeModal'],
    
        data: function() {
            return {
                film: null,
            }
        },
        methods: {
    
            getImgUrl() {
                return `/imgs/${this.filmSelected.img}`
            }
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
    .resume{
        margin: 20px;
    }
</style>
