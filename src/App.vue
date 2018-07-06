<template>
  <div id="app">
      <h1><span>Hi,</span> I'm Veljko</h1>
      <h6>What do You want to know?</h6>
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    <back-button></back-button>
    
  </div>
</template>

<script>
import backButton from './components/backbutton'
export default {
  components:{
    backButton
  },
  name: 'App'
}
</script>

<style lang='scss'>
body{
  margin: 0;
  padding: 0;
  background: #050505;
  &::-webkit-scrollbar { 
    display: none; 
}
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-family: 'Montserrat', sans-serif;
  padding-top: 30px;
  width: 100vw;
  height: 100vh;
  background-image: url("./assets/veljko.png");
  background-size: 50vw;
  background-repeat: no-repeat;
  background-position: right;

  h1{
    text-align: left;
    font-size: 9vw;
    color: #fff;
    margin: -10px 0 0 20px;
    font-weight: 900;
    span{
      color: #EE6C4D;
    }
  }
  h6{
    text-align: left;
    margin-left: 20px;
    color: #fff;
    font-weight: 900;
    font-size: 1.3vw;

  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.35s ease-out;

}

.fade-enter, .fade-leave-to {
  opacity: 0;

}
</style>
