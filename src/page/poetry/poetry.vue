<template>
    <div class='poetry'>
    <el-carousel :interval="4000" type="card" height="600px" class='carousel'>
        <el-carousel-item :class="'poetry-item ' + item.class" v-for="(item, index) in poetryList" :key="'item'+index">
            <div style="margin-top:-40px;max-width:80%;">
                <h3 class="medium">{{ item.name }}</h3>
                <span class='poetry-content' v-html='item.content'>
                </span>
            </div>
        </el-carousel-item>
    </el-carousel>
    </div>
</template>
<script>
import Request from '@/libs/request'
export default {
    name: 'Poetry',
    data(){
        return {
            poetryList:  []
        }
    },
    methods:{
        getAllPoetry(){
            Request({
                url: '/poetry/getAll',
                method: 'post',
            }).then(resp=>{
                this.poetryList = resp.data.poetryList.map(item => {
                    let random = Math.floor(Math.random()*2)
                    let num = (this.getLnNum(item.content)> 7 ? 3 : 1) + random
                    return {
                        ...item,
                        class: 'poetry' + num 
                    }
                })
            })
        },
        getLnNum(strSource) {
          var thisCount = 0;
          strSource.replace(/\n/g, function (m, i) {
            thisCount++;
          });
          return thisCount;
        },
    },
    mounted(){
        this.getAllPoetry()
    }
}
</script>
<style lang='less' scoped>
.poetry{
  .el-carousel__item h3 {
    overflow: hidden;
    font-size: 50px;
    opacity: 0.75;
    line-height: 80px;
    margin: 0;
  }
  
  .el-carousel__item {
    background-color: transparent;
    background: url('../../assets/poetry/poetry1.png');
    background-size: 100% 100%;
    padding-bottom: 10px;
    overflow: hidden;
  }
  .el-carousel__item{
      display: flex;
      align-items: center;
      justify-content: center;
  }
}
</style>
<style lang='less'>
.poetry{
    .carousel{
        overflow: hidden;
        .poetry-item{
            user-select: none;
            .poetry-content{
                word-break: break-all;
                white-space: pre-wrap;
                word-spacing: normal;
                font-size: 30px;
                line-height: 20px;
            }
            .el-carousel__mask{
                background: transparent;
            }
        }
        
        .poetry1{
            background: url('../../assets/poetry/poetry1.png');
            background-size: 100% 100%;
        }
        .poetry2{
            background: url('../../assets/poetry/poetry2.png');
            background-size: 100% 100%;
        }
        .poetry3{
            background: url('../../assets/poetry/poetry3.png');
            background-size: 100% 100%;
        }
        .poetry4{
            background: url('../../assets/poetry/poetry4.png');
            background-size: 100% 100%;
        }
    }
}
</style>