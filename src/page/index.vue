<template>
    <div class='main-container'>
        <page-header></page-header>
        <div class='container'>
            <transition name="fade" mode='out-in'>
                <keep-alive>
                    <router-view ></router-view>
                </keep-alive>
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
@media screen and (max-width: 800px) {
    .main-container{
        background-size: cover;
    }
}
.fade-enter{
    opacity: 0;
}
.fade-leave{
    opacity: 1;
}
.fade-enter-active{
    transition: opacity 0.5s;;
}
.fade-leave-active{
    opacity: 0;
    transition: opacity 0.5s;;
}
</style>