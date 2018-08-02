<template>
  <div class="flex wrap flexCenter mb-xxl mt-xxl" id="main-cont">
    <app-film v-for="(film,i) in movieState.films" :key="i" v-bind="{film}"></app-film>
    <app-modal class="hide" :class="{show: movieState.choosenFilm}"></app-modal>
  </div>
</template>


<script>
  import Film from './Film.vue';
  import AppModal from './Modal.vue';
  import {
    movieState
  } from '../states/movieState';
  
  export default {
    name: 'AppMain',
    components: {
      'app-film': Film,
      AppModal
  
    },
    data: function() {
      return {
        movieState
      }
    },
    methods: {
      async filmsServed() {
        try {
          const result = await fetch('/data/movies.json');
          const films = await result.json();
          this.movieState.films = films['films'];
          this.movieState.films = this.movieState.films.concat(this.movieState.films).concat(this.movieState.films).concat(this.movieState.films)
  
        } catch (e) {
          console.log(e);
        }
      },

  
    },
    async created() {
      this.filmsServed();

    },
  
  
  }
</script>

<style lang="less" scoped>
  #main-cont {
    margin-top: 100px;
    margin-bottom: 100px;
    flex-grow: 1;
    max-height: 450px;
    overflow-y: scroll;
  }
  
  .hide {
    display: none!important;
  }
  
  .show {
    display: flex !important;
  }
</style>
