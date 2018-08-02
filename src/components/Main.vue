<template>
  <div class="flex wrap flexCenter mb-xxl mt-xxl" id="main-cont">
    <app-film v-for="(film,i) in films" :key="i" v-bind="{film, callModal}"></app-film>
    <app-modal :filmSelected="choosenFilm" class="hide" :class="{show: choosenFilm}" v-bind="{closeModal}"></app-modal>
  </div>
</template>


<script>
  import Film from './Film.vue';
  import AppModal from './Modal.vue';
  
  export default {
    name: 'AppMain',
    components: {
      'app-film': Film,
      AppModal
  
    },
    data: function() {
      return {
        films: null,
        choosenFilm: null,
      }
    },
    methods: {
      async filmsServed() {
        try {
  
          const result = await fetch('/data/movies.json');
          const films = await result.json();
          this.films = films['films'];
          this.films = this.films.concat(this.films).concat(this.films).concat(this.films)
  
        } catch (e) {
          console.log(e);
        }
      },
      callModal(data) {
        this.choosenFilm = data;
      },
      closeModal() {
        this.choosenFilm = null;
        console.log('close bb')
      }
    },
    async created() {
      this.filmsServed();
      window.addEventListener('keydown', ({
        code
      }) => {
        if (code == "Escape") {
          this.choosenFilm = null;
        }
      })
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
