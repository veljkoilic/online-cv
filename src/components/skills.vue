<template>
<div class="skills">

  <div v-bind:key="bar.language" v-for="bar in progressBars">
    <progress-bar :language="bar.language" :counter="bar.counter" :variant="bar.variant"></progress-bar>
  </div>
  
</div>
</template>

<script>
import progressBar from '@/components/progressBar'

export default {
  components:{
    progressBar
  },
  
  name: 'skills',
  data () {
    return {
      progressBars:[
        {counter:100,variant: 'primary', language: "HTML"},
        {counter:100,variant: 'danger', language: "CSS"},
        {counter:100,variant: 'success', language: "JavaScript"},
        {counter:80,variant: 'info', language: "Vue.js"},
        {counter:50,variant: 'secondary', language: "PHP"},

      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.skills{
  margin-top: 60px;

}


</style>

