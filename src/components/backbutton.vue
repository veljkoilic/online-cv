<template>
    <router-link class="backButton" to="/"><i class="fas fa-arrow-left"></i></router-link>
</template>

<script>
export default {

  name: 'back-button',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.backButton{
    width: 50px;
    height: 50px;
    position: absolute;
    bottom: 10px;
    left: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        text-decoration: none;
    }
    &:hover i{
        font-size: 40px;
        transition: 0.5s;
    }
    i{
        font-size: 30px;
        color: #fff;
    }
}


</style>