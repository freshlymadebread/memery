<template>
<div class='welcome'>
    <div class='main'>
        <p class='content'>
            你好啊，{{name}}!{{name=='游客'?'你没有修改名字，很多权限都没有哦！去写个名字吧~': ''}}
        </p>
        <p class='content'>
            知道这儿的人真不多！你能来这儿说明你是他们两个很好的朋友了！
        </p>
        <p class='content'>
            哦！你说他们俩啊，就是福林和刘颖子啦！
        </p>
        <p class='content' v-if='time'>
            对啦！他们俩在一起{{time}}啦！
        </p>
    </div>
    <div class='tips'>
        <div class='contanier'>
            <el-input class='my-input' :disabled="isStranger" resize='none' :autosize="{ minRows: 4, maxRows: 4}" type="textarea"  :placeholder="isStranger?'游客请勿触碰！':'在这里写下祝福或者留言建议！福林儿筛选后会放到展示栏，到只能写30个字哦！'"  v-model="text"  maxlength="30"  show-word-limit></el-input>
        </div>
        <div class='submit' v-if='!isStranger'>
            <span class='submit-button' @click='submit'>
                先放到福林桌子上！
            </span>
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
            name: SessionStorage.get('account'),
            text:undefined,
            newTime: undefined,
            oldTime: undefined,
            _timer: undefined,
        }
    },
    computed:{
        time(){
            if(!this.newTime || !this.oldTime)
                return
            let timeDiff =this.newTime - this.oldTime
            
            let days = Math.floor(timeDiff / (24 * 3600 * 1000))
            let leavel1 = timeDiff % (24 * 3600 * 1000)
            let hours = Math.floor(leavel1 / (3600 * 1000))
            
            let leavel2 = timeDiff % (3600 * 1000)
            let minutes = Math.floor(leavel2 / (60 * 1000))

            let leavel3 = timeDiff % (60 * 1000)
            let second = Math.floor(leavel3 / 1000)
            
            return `${days}天${hours}时${minutes}分${second}秒`
        },
        isStranger(){
            return this.name.indexOf('游客') !== -1
        }
    },
    methods:{
        getInfo(){
            Request({
                url: '/users',
                method: 'get',
                params: {
                }
            }).then(res=>{
                let  date = res.data
                this.oldTime = date.oldTime
                this.newTime = date.nowTime
                this._timer = setInterval(_=>{
                    this.newTime += 1000
                },1000)
            })
        },
        submit(){
            if(this.name.indexOf('游客') !== -1){
                this.$message.warning('您还是游客哦，不要随便动别人东西！')
                return
            }
            if(!this.text){
                this.$message.warning('你还没有写字呢！不要浪费纸啊')
                return
            }
            Request({
                url: '/advise/add',
                method: 'post',
                params: {
                    name: this.name,
                    text: this.text,
                }
            }).then(res=>{
                if(res.errcode === 0){
                    this.text = undefined
                    this.$message.success('你写的内容已经放到福林桌子上了！等他看到后会把你的卡片放到留言板的！')
                    return
                }
                else{
                    this.$message.error('哎呀出了点小问题！写好的卡片被吹走啦！')
                }
            })
        }
    },
    mounted(){
        this.getInfo()
    }
}
</script>
<style lang="less" scoped>
.welcome{
    display: flex;
    height: 100%;
    padding: 0 10px;
    user-select: none;
    .main{
        height: 600px;
        max-height: 100%;
        min-height: 600px;
        width: 1000px;
        background: url('../../assets/paperjust.png');
        background-size: 100% 100%;
        .content{
            font-size: 40px;
            text-align: left;
            padding-left: 100px;
            padding-right: 10px;
            text-indent: 2em;
        }
    }
    .tips{
        width: 400px;
        height: 400px;
        background: url('../../assets/tips.png');
        background-size: 100% 100%;
        // background-color: #eee;
        font-size: 20px;
        .contanier{
            padding: 92px 26px 31px 50px;
        }
        .submit{
            padding-left: 50px;
            text-align: left;
            .submit-button{
                font-size: 20px;
                transition: all 0.5s;
                cursor: pointer;
                user-select: none;
            }
        .submit-button:hover{
            font-size: 30px;
        }
        }
    }
}

@media screen and (max-width: 800px) {
    .welcome{
        flex-direction: column;
        align-items: flex-end;
        .main{
            width: 100%;
            background: url('../../assets/paperjust.png');
            background-size: 100% 100%;
            max-height: 50%;
            min-height: 50%;
            padding-top: 10px;
            .content{
                font-size: 16px;
                line-height: 16px;
                text-align: left;
                padding-left: 40px;
                padding-right: 10px;
                text-indent: 2em;
            }
        }
        .tips{
            width: 60%;
            max-height: 40%;
            min-height: 50%;
            background: url('../../assets/tips.png');
            background-size: 100% 100%;
            // background-color: #eee;
            font-size: 12px;
            .contanier{
                padding: 40px 15px 3px 22px;
            }
            .submit{
                padding-left: 50px;
                text-align: left;
                .submit-button{
            font-size: 12px;
                    transition: all 0.5s;
                    cursor: pointer;
                    user-select: none;
                }
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