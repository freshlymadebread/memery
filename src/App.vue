<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import VueMixins from '@/libs/vueMixins.js'
export default {
  name: 'App',
  mixins: [VueMixins],
  methods:{
    goto(name){
      this.$router.push({
        name
      })
    }
  },
  mounted(){
  }
}
</script>

<style>
html{
  height: 100%;
  width: 100%;
}
body{
  height: 100%;
  width: 100%;
  margin: 0;
}
#app {
  text-align: center;
  color: #2c3e50;
  /* background-color: #000; */
  background-image: radial-gradient( #333,#000);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
