<template>
    <div class="cont-img">
        <div class="overflow" @click="callModal(film)">
            <img :src="getImgUrl()" />
        </div>
        <p>{{ film.titre }}</p>
    </div>
</template>

<script>
export default {
  name: 'Film',
  props: ['film', 'callModal'],
  methods: {
    detailFilm () {
      alert(this.detail)
    },
    getImgUrl () {
      return `/imgs/${this.film.img}`
    }

  }

}
</script>

<style lang="less">

  @import '../assets/style/variables.less';

    .cont-img {
        margin: 2%;
        max-width: 187px;
    }

    .cont-img p {
        color: white;
        text-align: center;
    }

    .overflow:hover {
        -moz-box-shadow: 0 0 10px @color1;
        -webkit-box-shadow: 0 0 10px @color1;
        box-shadow: 0 0 10px @color1;
        transition: all 0.3s;
        cursor: pointer;
    }

    .overflow {
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        height: 250px;
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        border-radius: 5px;
        overflow: hidden;
    }
</style>
