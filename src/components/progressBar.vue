<template>
<div class="progressWrap">
  <div class="progressBars">
    <h3 v-text="language"></h3><b-progress :value="counter" :max="max" show-progress :variant="variant" ></b-progress>
  </div>
 </div> 
</template>

<script>
export default {
    name: 'progress-bar',
    props:{
        counter: Number,
        variant: String,
        language: String
    },
  data () {
    return {
      
      max: 100
    }
  },
  methods: {}
}
</script>

<style scoped lang='scss'>
.progressWrap{
    width: 100vw;
    .progressBars{
        width: 500px;
        display: block;
        margin-top: 30px;
        color: #fff;
        position: relative;
        left: 25%;
        transform: translateX(-50%);
        h3{
            font-size: 20px;
        }
        .progress{
            background-color: #fff;
            height: 40px;
            .progress-bar{
                background-color: green;
            }
        }
    }
}
</style>
