<template>
    <div class='message-board'>
        <div class='board'>
            <div class='container'>
                <div v-for='(item, index) in messageList' :key="'paper' + index" class='tray'>
                    <div :class="'message ' + item.class" @click='checkMessage(item)' :style="message === item ?'opacity:0;':''">
                        <div class='text-content'>
                        <p class='text' v-html="item.text"></p>
                        <p class='info'>于{{_getTime(new Date(item.date).valueOf(),'yyyy年MM月dd日')}}</p>
                        <p class='info'>—{{item.name}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class='mark' v-show='maskShow'>
            <div class='mark-keep' @click='hideMark'></div>
            <div :class="'message ' + (message &&message.class)">
                <div class='text-content'>
                <p class='text' v-html="message.text"></p>
                <p class='info'>于{{_getTime(new Date(message.date).valueOf(),'yyyy年MM月dd日')}}</p>
                <p class='info'>—{{message.name}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Request from '@/libs/request'
import vueMixins from '@/libs/vueMixins'
export default {
    name:'Message',
    mixins:[vueMixins],
    data(){
        return {
            messageList:[],
            message: {},
            maskShow: false, 
        }
    },
    computed:{
    },
    mounted(){
        this.getAllMessage()
        console.log(this._getTime(new Date().valueOf(),'yyyy年MM月dd日'))
    },
    methods:{
        getAllMessage(){
            Request({
                url: '/message/getAll',
                method: 'post',
            }).then(resp=>{
                let list = resp.data.messageList.map(item => {
                    let random = Math.ceil(Math.random()*5)
                    return {
                        ...item,
                        class: 'paper' + random 
                    }
                })
                if(list.length > 11){
                    list = list.slice(0,12)
                }
                this.messageList = list
            })
        },
        checkMessage(message){
            this.message = message
            this.maskShow = true
        },
        hideMark(){
            this.message = {}
            this.maskShow = false
        }
    }
}
</script>
<style lang='less' scoped>
.message-board{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    .board{
        margin-top: -100px;
        width: 1100px;
        height: 760px;
        background: url('../../assets/board.png');
        background-size: 100% 100%;
        .container{
            margin: 150px 100px 0px 100px;
            height: calc(100% - 200px);
            .tray{
                display: inline-block;
                transition: all 1s;
                .message{
                    cursor: pointer;
                    display: inline-block;
                    width: 200px;
                    height: 200px;
                    transition: all 1s;
                    font-size: 14px;
                    transform: rotate(-5deg);
                    text-align: left;
                    .text-content{
                        user-select: none;
                        padding: 20px;
                        padding-top: 30px;
                        max-height: 160px;
                        display: flex;
                        flex-direction: column;
                        .text{
                            margin: 0px;
                            margin-bottom: 10px;
                            margin-top: 5px;
                            text-indent: 2em;
                        }
                        .info{
                            margin: 0px;
                            text-align: right;
                        }
                    }
                }
                .paper1{
                    background: url('../../assets/paper/paper1.png');
                    background-size: 100% 100%;
                }
                .paper2{
                    background: url('../../assets/paper/paper2.png');
                    background-size: 100% 100%;
                }
                .paper3{
                    background: url('../../assets/paper/paper3.png');
                    background-size: 100% 100%;
                }
                .paper4{
                    background: url('../../assets/paper/paper4.png');
                    background-size: 100% 100%;
                }
                .paper5{
                    background: url('../../assets/paper/paper5.png');
                    background-size: 100% 100%;
                }
            }
        }
    }
    .mark{
        opacity: 1;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        .mark-keep{
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: #555;
            opacity: 0.5;
        }
        .message{
            text-align: left;
            cursor: pointer;
            display: inline-block;
            width: 600px;
            height: 600px;
            font-size: 42px;
            transition: all 1s;
            z-index: 9;
            .text-content{
                user-select: none;
                padding: 60px;
                padding-top: 90px;
                max-height: 480px;
                display: flex;
                flex-direction: column;
                .text{
                    margin: 0px;
                    margin-bottom: 30px;
                    margin-top: 15px;
                    text-indent: 2em;
                }
                .info{
                    margin: 0px;
                    text-align: right;
                }
            }
        }
        .paper1{
            background: url('../../assets/paper/paper1.png');
            background-size: 100% 100%;
        }
        .paper2{
            background: url('../../assets/paper/paper2.png');
            background-size: 100% 100%;
        }
        .paper3{
            background: url('../../assets/paper/paper3.png');
            background-size: 100% 100%;
        }
        .paper4{
            background: url('../../assets/paper/paper4.png');
            background-size: 100% 100%;
        }
        .paper5{
            background: url('../../assets/paper/paper5.png');
            background-size: 100% 100%;
        }
    }
}
</style>