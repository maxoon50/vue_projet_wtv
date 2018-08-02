<template>
  <header>
    <div class="grid">

      <div class="grid__title">
        <h2>LES FILMS DU LUNDI</h2>
        <span class="mask"></span>
      </div>

      <div class="grid__subtitle">
        <p>Une autre façon de voir le cinéma</p>
        <span class="mask delay"></span>
      </div>

    </div>

  </header>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'AppHeader',
  components: {
    //  HelloWorld
  }
}
</script>

<style lang="less">
  @import '../assets/style/variables.less';
  header {
    position: relative;
    width: 100%;
    height: 300px;
  }

  /* Grid fallback support */

  .grid {
    display: block;
  }

  .grid {
    font-size: 1.5em;
    display: grid;
    grid-auto-columns: auto;
    grid-template-rows: repeat(2, 1fr);
    overflow: hidden;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .grid__title,
  .grid__subtitle {
    overflow: hidden;
    position: relative;
    align-self: baseline;
    justify-self: start;
    transform-style: preserve-3d;
    animation: .9s ease-in-out blockIn forwards;
  }

  .grid__title {
    color: black;
    background-color: @color1;
  }

  /* Grid fallback support */

  .grid__subtitle {
    display: inline-block;
  }

  .grid__subtitle {
    grid-row: 2 / 2;
    background-color: @color2;
    color: white;
  }

  .grid__title h2,
  .grid__subtitle p {
    padding: 0 1em;
    opacity: 0;
    animation: 1.4s .2s ease-in-out textIn forwards;
  }

  .mask,
  .delay {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    animation: .9s ease-in-out maskIn forwards;
    background-color: @color3;
    background-image: linear-gradient(90deg, @color3 0%, @color4 100%);
    transform-style: preserve-3d;
  }

  .delay {
    animation-delay: .1s;
  }

  @keyframes maskIn {
    0% {
      transform: translateX(-105%);
    }
    100% {
      transform: translateX(105%);
    }
  }

  @keyframes blockIn {
    0% {
      transform: translateX(-105%);
    }
    100% {
      transform: translateX(0%);
    }
  }

  @keyframes textIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
