<template>
    <div class='login' @click='showSpot'>
        <div class='letter'>
            <div class='spot' v-for="item in spotList" :key='item.clientX' :class='item.pic' :style="'top:' + item.y + 'px;left:' + item.x +'px;'"></div>
            <p  @click.stop >
                <span>
                    亲爱的<div style='display:inline-block'>
                        <input type="text" :style="'width:' + (this.name.length * 27) + 'px'"  v-model="name">
                    </div>:
                </span>
            </p>
            <p class='para'>
                <span>
                    欢迎来到fulin与里溜溜赢的专属地盘！
                </span>
            </p>
            <p class='para'>
                <span>
                    这里有很多狗粮，别被甜到啦！
                </span>
            </p>
            <p class='entry'>
                <span  @click.stop='entry'>
                    敲门进入
                </span>
            </p>
        </div>
    </div>
</template>
<script>
import { SessionStorage } from 'wii-fe-utils'
import Request from '@/libs/request'
export default {
    name: 'Login',
    data(){
        return {
            name: '',
            spotList: [],
            timer: undefined,
        }
    },
    watch:{
    },
    methods:{
        showSpot(e){
            console.log(e)
            if(this.timer) return
            this.spotList.push({
                x: e.clientX,
                y: e.clientY,
                pic: 'spot' + Math.floor(Math.random()*4)
            })
            let disappear = setTimeout(_=>{
                this.spotList.shift()
                clearTimeout(disappear)
            },2000) 
            this.timer = setTimeout(_=>{
                clearTimeout(this.timer)
                this.timer = undefined
            },2000)
        },
        entry(){
            if(!this.name){
                this.$message.warning('给自己起一个好听的名字吧！')
                return
            }
            Request({
                url: '/entry',
                method: 'get',
                params:{
                    name:(this.name)
                }
            })
            SessionStorage.set('account',this.name)
            this.$router.push({
                name: 'Index'
            })
        }
    }
}
</script>
<style scoped lang='less'>
.login{
    user-select: none;
    .letter{
        width: 350px;
        height: 400px;
        padding: 150px 40px 50px 40px;
        background: url(../../assets/letter.jpg) ; 
        background-size: 100% 100%;
        box-shadow: #eee 0px 0px 15px;
        font-size: 27px;
        font-family: 'my-font';
        p{
            z-index: 99;
            margin: 10px 50px;
            text-align: left;
            input{
                background-color:transparent ;
                background-image: url(../../assets/heng.png) ; 
                background-size: 100% 100%;
                border: 0px;
                font-family: my-font;
                font-size: 27px;
                display: inline;
                min-width: 54px;
                outline: none;
                z-index: 9999999;
            }
        }
        .para{
            text-indent: 2em;
        }
        .entry{
            text-align: center;
            padding-top: 10px;
            span{
                cursor:pointer;
            }
        }
        .spot{
            z-index: 9;
            position: absolute;
            width: 100px;
            height: 100px;
            opacity: 0.7;
            animation: spotani 3s;
            transform: translate(-50%, -50%);
        }
        .spot0{
            background: url(../../assets/spot0.png) ; 
            background-size: 100% 100%;
        }
        .spot1{
            background: url(../../assets/spot1.png) ; 
            background-size: 100% 100%;
        }
        .spot2{
            background: url(../../assets/spot2.png) ; 
            background-size: 100% 100%;
        }
        .spot3{
            background: url(../../assets/spot3.png) ; 
            background-size: 100% 100%;
        }
    }
}
@keyframes spotani {
    from {
        opacity: 0.7;
    }
    to{
        opacity: 0;
    }
}
</style>