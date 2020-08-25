
<template>
<div class='welcome'>
    <div class='tips'>
        <div class='contanier'>
            前端： 
            <el-button type='text' class='submit' @click='goGit(1)'>前往github</el-button>
            <br>
            https://github.com/freshlymadebread/memery
            <br>
            后端： 
            <el-button type='text' class='submit' @click='goGit(0)'>前往github</el-button>
            <br>
            https://github.com/freshlymadebread/memeryBackend
        </div>
        <div class='contanier'>
            THANKS .flying
        </div>
    </div>
</div>
</template>
<script>
import Request from '@/libs/request'
import { SessionStorage } from 'wii-fe-utils'
export default {
    name: 'Welcome',
    data(){
        return {
        }
    },
    computed:{
    },
    methods:{
        goGit(flag){
            if(flag){
                window.open('https://github.com/freshlymadebread/memery', '_blank')
            }else{
                window.open('https://github.com/freshlymadebread/memeryBackend', '_blank')
            }
        }
    },
    mounted(){
    }
}
</script>
<style lang="less" scoped>
.welcome{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 10px;
    user-select: none;
    .tips{
        width: 500px;
        height: 500px;
        background: url('../../assets/tips.png');
        background-size: 100% 100%;
        font-size: 22px;
        .contanier{
            padding: 92px 30px 31px 70px;
        }
        .submit{
            font-family: my-font;
            font-size: 22px;
        }
    }
}

@media screen and (max-width: 800px) {
    .welcome{
        .tips{
            width: 300px;
            height: 300px;
            background: url('../../assets/tips.png');
            background-size: 100% 100%;
            font-size: 12px;
            .contanier{
                padding: 40px 10px 3px 40px;
            }
            .submit{
                font-family: my-font;
                font-size: 12px;
            }
        }
    }
}
</style>
<style lang="less">
.welcome{
    .my-input{
        textarea{
            font-family: my-font;
            font-size: 24px;
            font-weight: 400;
            background: transparent!important;
            border: 0px;
            outline: none;
            
        }
        .el-input__count{
            background: transparent;
        }
    }
}

@media screen and (max-width: 800px) {
.welcome{
    .my-input{
        textarea{
            font-size: 14px;
            
        }
        .el-input__count{
            background: transparent;
        }
    }
}
}
.el-message__content{
    font-size: 24px;
    font-weight: 400;
}
</style>