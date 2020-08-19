<template>
  <div class="hello">
    <div @my-event='gothis'>
      <state1 ></state1>
    </div>
    <state2></state2>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item :index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
    <el-button @click='dothis'>change</el-button>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'HelloWorld',
  components: {
    state1,
    state2
  },
  data () {
    return {
      inputs: '',
      msg: 'Welcome to Your Vue.js App',
       activeIndex: '1',
    }
  },
  mounted () {
    this.get()
  },
  methods: {
    get () {
      let _this = this
      var $http = Axios.create({
        baseURL: 'static',
        timeout: '3000', // 请求超时时间
        headers: {'X-Custom-Header': 'foobar'} // header传值，例如：Authorization
      })
      $http.get('/conf.json')
        .then(function (res) {
          _this.inputs = res
        })
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    dothis(){
      this.activeIndex = '1'
    },
    gothis(){
      console.log('wai')
    },
    dosthis(){
      console.log('nei')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
