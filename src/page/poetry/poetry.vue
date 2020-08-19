<template>
    <div class='poetry'>
    <el-carousel :interval="4000" type="card" height="500px">
        <el-carousel-item v-for="item in 6" :key="item">
        <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
    </el-carousel>
    </div>
</template>
<script>
export default {
    name: 'dog1',
    data(){
        return {
            name: 'dog1'
        }
    }
}
</script>
<style lang='less' scoped>
.poetry{
  .el-carousel__item h3 {
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #fff;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #000;
  }
}
</style>