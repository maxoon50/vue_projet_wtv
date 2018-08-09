<template>
  <div id="app" class="main">
    <app-header></app-header>
    <app-main></app-main>
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from './components/Header.vue'
import AppMain from './components/Main.vue'
import AppFooter from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    'app-header': AppHeader,
    'app-main': AppMain,
    AppFooter,
  }
}
</script>

<style lang="less">

  @import '~normalize.css';
  @import './assets/style/variables.less';

  html {
    line-height: 1.15;
    /* 1 */
    -webkit-text-size-adjust: 100%;
    /* 2 */
    font-family: "Verdana", sans-serif !important;
    background: #0f2027;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #0f2027, #203a43, #2c5364);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  }

  header {
    text-align: center
  }

  header>h1 {
    color: white;
    font-size: 3em;
  }

  .flex {
    display: flex;
  }

  .wrap {
    flex-flow: wrap;
  }

  .flexCol {
    flex-direction: column;
  }

  .al-vert {
    align-items: center;
  }

  .al-horiz {
    justify-content: center;
  }

  img {
    height: 250px;
  }

  .flexCenter {
    justify-content: center;
  }

  .cont-img {
    margin: 2%;
    max-width: 187px;
  }

  .cont-img p {
    color: white;
    text-align: center;
  }

  img:hover {
    -moz-box-shadow: 0 0 10px #ccc;
    -webkit-box-shadow: 0 0 10px #ccc;
    box-shadow: 0 0 10px #ccc;
    transition: all 0.3s;
    cursor: pointer;
  }

  html {
    box-sizing: border-box;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .main {
    display: flex;
    flex-direction: column;
    height: 100%;
      overflow-y: scroll;
      overflow-x: hidden;
  }
</style>
