<template>
<div class="about">
    <h5>About me</h5>
    <p>
        Hello again, my name is <span>Veljko</span> and I am a <span>20</span> year-old programming student.
        I live in <span>Belgrade</span>, the capital of Serbia where I currently attend <span>SAE INSTITUTE</span> pursuing a diploma
        in <span> Web Development</span>. The things that set me apart from others are my passion, dedication, attention to detail and positivity.
        My current goals are to finish my education and hopefully get a job during it.
        I am open to any kind of <span>business offers</span>!
    </p>
</div>
</template>

<script>
export default {
  name: 'about'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.about{
    h5{
        color: #fff;
        font-weight: 900;
        margin:50px 0 0 20px;  
        font-size: 40px;      
    }
    p{
        width: 50%;
        margin:10px 0 0 30px;
        color: #fff;
        font-size: 23px;
        font-weight: 900;
        line-height: 50px;
        span{
            color:#EE6C4D;
            background: #000;
        }
    }
}


</style>

