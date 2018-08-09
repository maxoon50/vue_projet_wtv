<template>
    <div id="slider">
        <Modal/>
    </div>
</template>

<script>
    import Modal from './Modal'
    export default {
        name: "Slider",
        components:{
            Modal
        }
    }
</script>

<style scoped>
#slider{
    height: 100%;
    background-image: url('/imgs/cinema.jpg');
    background-repeat:repeat;

    background-size: 500px 400px;
}
</style>