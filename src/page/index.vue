<template>
    <div class='main-container'>
        <page-header></page-header>
        <div class='container'>
            <transition name="slide-slip">
                <router-view ></router-view>
            </transition>
        </div>
    </div>
</template>
<script>
import PageHeader from '@/components/layout/pageHeader'
export default {
    name: 'Index',
    components:{
        PageHeader
    },
    data(){
        return {
        }
    }
}
</script>
<style lang='less' scoped>
.main-container{
    width: 100%;
    height: 100%;
    background-image: url('../assets/woodBackground.jpg');
    background-size: 100% 100%;
    .container{
        height: calc(100% - 150px);
    }
}
</style>