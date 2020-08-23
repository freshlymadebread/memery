<template>
  <div id="app">
    <router-view/>
    <div class='loading-mark' v-if='!finish'>
      <p>
        正在路上！
        <i class="el-icon-loading"></i>
        <br>
        <span>
          <span style="color:#000">
            小知识：
          </span>
          {{coldInfo[index]}}</span>
      </p>
    </div>
  </div>
</template>

<script>
import VueMixins from '@/libs/vueMixins.js'
import { ColdInfo } from './json/coldInfo'
export default {
  name: 'App',
  mixins: [VueMixins],
  data(){
    return {
      finish: false,
      coldInfo: ColdInfo,
      index: 0,
    }
  },
  methods:{
    goto(name){
      this.$router.push({
        name
      })
    },
    getRandomIndex(){
      let length = ColdInfo.length || 1
      return Math.floor(Math.random() * length)
    }
  },
  mounted(){
    let indexTimer = setInterval(_=>{
      this.index = this.getRandomIndex()
    },2000)
    let timer = setInterval(() => {
        console.log(document.readyState)
        if (document.readyState === 'complete') {
            this.finish = true
            console.log('完成加载啊！！！！！')
            window.clearInterval(timer)
            clearInterval(indexTimer)
        }
    }, 1000)
  }
}
</script>

<style lang='less'>
html{
  height: 100%;
  width: 100%;
}
body{
  height: 100%;
  width: 100%;
  margin: 0;
  overflow: hidden;
}
#app {
  text-align: center;
  color: #000;
  /* background-color: #000; */
  background-image: radial-gradient( #333,#000);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading-mark{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #555;
  opacity: 0.9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  font-weight: bolder;
  color: #fff;
  p{
    font-weight: 300;
    span{
      font-size: 28px;
    }
  }
}
</style>
