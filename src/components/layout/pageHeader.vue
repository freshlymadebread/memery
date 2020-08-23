<template>
  <div class="page-header">
    <div :class="'menu-item ' + menu.menuClass + (activeMenu == menu.name? ' active-menu' : '')" v-for="menu in menuList" :key='menu.name' @click='choseMenu(menu)'>
      <span>
        {{menu.meta.name}}
      </span>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'PageHeader',
  components: {
  },
  data () {
    return {
      routes: this.$router.options.routes,
      activeMenu: undefined,
    }
  },
  watch:{
    '$route'(to, from){
      console.log('123123')
      console.log(to)
      this.activeMenu = to.name
    }
  },
  computed: {
      menuList() {
          let menuList = []
          this.$router.options.routes.forEach(item => {
              if (item.path != '/' && !item.meta.hidden) {
                  menuList.push({
                    ...item,
                    menuClass: 'menu-item' + this.random(4)
                  })
              }
              if(item.children){
                item.children.forEach(item => {
                  if (item.path != '/' && !item.meta.hidden) {
                      menuList.push({
                        ...item,
                        menuClass: 'menu-item' + this.random(4)
                      })
                  }
                })
              }
          })

          return menuList
      }
  },
  mounted () {
    this.activeMenu = this.$route.name
  },
  methods: {
    choseMenu(menu){
      this.activeMenu = menu.name
      this.$router.push({
        name: menu.name
      })
    },
    random(n){
      return Math.ceil(Math.random() * n)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.page-header{
  display: flex;
  justify-content: space-around;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  background: transparent;
  .menu-item{    
    z-index: 999;
    margin: 1%;
    user-select: none;
    cursor: pointer;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
    background-image: url('../../assets/sign/sign0.png');
    background-size: 100% 100%;
    transition:all 0.5s ease-in-out;
    transform-origin: 100% 0%;
    // transform-origin : y x
    transform: translateY(-30px);
    span{
      font-size: 45px;
          color: #631d1d;
    text-shadow: 1px 1px 4px #dedede;
      // color: #2f2a2a;
      // text-shadow: 0px -1px 9px #000;
    }
  }
  .menu-item0{
    background-image: url('../../assets/sign/sign0.png');
  }
  .menu-item1{
    background-image: url('../../assets/sign/sign1.png');
  }
  .menu-item2{
    background-image: url('../../assets/sign/sign2.png');
  }
  .menu-item3{
    background-image: url('../../assets/sign/sign3.png');
  }
  .menu-item:hover{
    transform: rotateX(20deg)  rotateY(-20deg)  translateY(-10px);
  }
  .active-menu{
    transform: translateY(0px);
  }
}
@media screen and (max-width: 800px) {
  .page-header{
    height: 100px;
    .menu-item{    
      z-index: 999;
      margin: 1%;
      user-select: none;
      cursor: pointer;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100px;
      height: 100px;
      background-image: url('../../assets/sign/sign0.png');
      background-size: 100% 100%;
      transition:all 0.5s ease-in-out;
      transform-origin: 100% 0%;
      transform: translateY(-20px);
      span{
        font-size: 28px;
        color: #631d1d;
        text-shadow: 1px 1px 4px #dedede;
      }
    }
    .menu-item:hover{
      transform: rotateX(20deg)  rotateY(-20deg)  translateY(-10px);
    }
    .active-menu{
      transform: translateY(0px);
    }
  }
}
</style>
