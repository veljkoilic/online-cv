<template>
<div class="questions">
  <ul>
    <li v-bind:key="question.question" v-for="question in questions"><router-link :to="question.path">{{question.question}}</router-link></li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'questions',
  data(){
    return{
      questions:[
        {question:"Tell me about yourself.", path:'/about-me'},
        {question:"What are Your skills?", path:'/skills'},
        {question:"What did You do in the past?", path:'/portfolio'},
        {question:"Do you have a degree?", path:'/education'},
        {question:"How can I hire You?", path:'/hire-me'},
        {question:"I have a different question...", path:'/contact'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.questions{
  ul{
    list-style-type: none;
    margin:80px 0 0  5%;
    li{
      text-align: left;
      margin: 15px 0 0 30px;
      font-size: 20px;
      
      a{
        color: #fff;
        font-size: 30px;
        background: #000;
        &:hover{
          color: #EE6C4D;
          font-size: 35px;
          transition: 0.5s;
        }
      }
    }
  }

}


</style>

