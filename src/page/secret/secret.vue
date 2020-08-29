<template>
    <div class='container'>
        <el-form class='edit' label-width="60px" v-if='!finish'>
            <el-form-item label="姓名">
                <el-input v-model="name"></el-input>
            </el-form-item>
            <el-form-item label="学号">
                <el-input v-model="idCode"></el-input>
            </el-form-item>
            <el-form-item label="学院">
                <el-input v-model="college"></el-input>
            </el-form-item>
            <el-form-item label="出校">
                <el-select v-model="entryFlag" placeholder="请选择出校入校">
                    <el-option label="出校" value="1"></el-option>
                    <el-option label="入校" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="校区">
                <el-select v-model="school" placeholder="请选择校区">
                <el-option label="西土城校区" value="1"></el-option>
                <el-option label="沙河校区" value="2"></el-option>
                <el-option label="宏福校区" value="3"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="身份">
                <el-select v-model="role" placeholder="请选择身份">
                <el-option label="本科生" value="本科生"></el-option>
                <el-option label="研究生" value="研究生"></el-option>
                <el-option label="博士" value="博士"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="doit()">生成！</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
        <div id="wxform" v-else><div id="showExamine"><div class="topT top"><div class="W_onetop">
						申请表单
						<p style="display: none;">1</p></div> <!----> <!----><!----> <!----> <!----><!----> <!----> <!----> <span class="line" style="width: 16%;"></span></div> <div class="forms"><div style="height: 50px;"></div> <div class="toptabla"><div class="toptabla_con"><div class="formsTop_left"><img src="data:image/png;base64,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" alt=""> <p class="">请假外出、返校权限查询</p></div> <!----></div></div> <div><div class="m_formList"><!----><div><div class="pluginnames"><span style="color: rgb(135, 135, 135); font-size: 14px; font-family: 微软雅黑; line-height: 22px;">
              姓名
            </span> <!----></div> <!----> <div class="plugin-allbox dplugin-mobile-rinput"><div data-key="User_3" class="dplugin-box" style="margin-top: 0px; margin-bottom: 0px; text-align: center;"><div class="dplugin-mobile dplugin-doneplugin dplugin-mobile-dinput"><span class="doneplugin-value doneplugin-value-userview" style="font-size: 14px; font-family: 微软雅黑; font-weight: normal; font-style: normal; color: rgb(96, 98, 102); text-decoration: none; text-align: center; line-height: 15px; letter-spacing: 0px;">
						{{name}}
					</span></div></div> <!----></div></div><!----><div><div class="pluginnames"><span style="color: rgb(135, 135, 135); font-size: 14px; font-family: 微软雅黑; line-height: 22px;">
              学院
            </span> <!----></div> <!----> <div class="plugin-allbox dplugin-mobile-rinput"><div data-key="User_22" class="dplugin-box" style="margin-top: 0px; margin-bottom: 0px; text-align: center;"><div class="dplugin-mobile dplugin-doneplugin dplugin-mobile-dinput"><span class="doneplugin-value doneplugin-value-userview" style="font-size: 14px; font-family: 微软雅黑; font-weight: normal; font-style: normal; color: rgb(96, 98, 102); text-decoration: none; text-align: center; line-height: 15px; letter-spacing: 0px;">
						{{college}}
					</span></div></div> <!----></div></div><!----><div><div class="pluginnames"><span style="color: rgb(135, 135, 135); font-size: 14px; font-family: 微软雅黑; line-height: 22px;">
              状态码
            </span> <!----></div> <!----> <div class="plugin-allbox" plugin="[object Object]"><div data-key="Qrcode_11" class="dplugin-box" style="margin-top: 0px; margin-bottom: 0px; width: 100%; text-align: center; height: 100%; overflow-x: auto;"><div class="dplugin-mobile">
                <img src="./entry.png"  alt="上海鲜花港 - 郁金香"  style="height: 150px; width: 150px;" />

                  </div></div> <!----></div></div><div><div class="pluginnames"><span style="color: rgb(135, 135, 135); font-size: 18px; font-family: 微软雅黑; line-height: 22px;">
              状态
            </span> <!----></div> <!----> <div class="plugin-allbox dplugin-mobile-rinput"><div data-key="Input_12" class="dplugin-box" style="margin-top: 0px; margin-bottom: 0px; text-align: center;"><div class="dplugin-mobile dplugin-mobile-dinput dinput-vie dplugin-mobile-dinput-focusalert" style="font-size: 18px; font-family: 微软雅黑; font-weight: bold; font-style: normal; color: rgb(96, 98, 102); text-decoration: none; text-align: center; line-height: 20px; letter-spacing: 0px;"><span style="font-size: 18px; font-family: 微软雅黑; font-weight: bold; font-style: normal; color: rgb(96, 98, 102); text-decoration: none; text-align: center; line-height: 20px; letter-spacing: 0px;">允许{{entryFlag== 1 ? '出' : '入'}}校</span></div></div> <!----></div></div><div><div class="pluginnames"><span style="color: rgb(135, 135, 135); font-size: 14px; font-family: 微软雅黑; line-height: 22px;">
              学工号
            </span> <!----></div> <!----> <div class="plugin-allbox dplugin-mobile-rinput"><div data-key="User_5" class="dplugin-box" style="margin-top: 0px; margin-bottom: 0px; text-align: center;"><div class="dplugin-mobile dplugin-doneplugin dplugin-mobile-dinput"><span class="doneplugin-value doneplugin-value-userview" style="font-size: 14px; font-family: 微软雅黑; font-weight: normal; font-style: normal; color: rgb(96, 98, 102); text-decoration: none; text-align: center; line-height: 15px; letter-spacing: 0px;">
						{{idCode}}
					</span></div></div> <!----></div></div><!----><div><div class="pluginnames"><span style="color: rgb(135, 135, 135); font-size: 14px; font-family: 微软雅黑; line-height: 22px;">
              入校时间
            </span> <!----></div> <!----> <div class="plugin-allbox"><div data-key="Calendar_15" class="dplugin-box" style="margin-top: 0px; margin-bottom: 0px; text-align: center;"><div class="dplugin-mobile dplugin-mobile-dCalendar dCalendar-vie" style="font-size: 14px; font-family: 微软雅黑; font-weight: normal; font-style: normal; color: rgb(96, 98, 102); text-decoration: none; text-align: center; line-height: 20px; letter-spacing: 0px;"><span style="font-size: 14px; font-family: 微软雅黑; font-weight: normal; font-style: normal; color: rgb(96, 98, 102); text-decoration: none; text-align: center; line-height: 20px; letter-spacing: 0px;">{{time}}</span></div></div> <!----></div></div><!----><!----><div><div class="pluginnames"><span style="color: rgb(135, 135, 135); font-size: 14px; font-family: 微软雅黑; line-height: 22px;">
              校区
            </span> <!----></div> <!----> <div class="plugin-allbox dplugin-mobile-rinput"><div data-key="Input_25" class="dplugin-box" style="margin-top: 0px; margin-bottom: 0px; text-align: center;"><div class="dplugin-mobile dplugin-mobile-dinput dinput-vie dplugin-mobile-dinput-focusalert" style="font-size: 14px; font-family: 微软雅黑; font-weight: normal; font-style: normal; color: rgb(96, 98, 102); text-decoration: none; text-align: center; line-height: 20px; letter-spacing: 0px;"><span style="font-size: 14px; font-family: 微软雅黑; font-weight: normal; font-style: normal; color: rgb(96, 98, 102); text-decoration: none; text-align: center; line-height: 20px; letter-spacing: 0px;">西土城校区</span></div></div> <!----></div></div><!----><div><div class="pluginnames"><span style="color: rgb(135, 135, 135); font-size: 14px; font-family: 微软雅黑; line-height: 22px;">
              身份
            </span> <!----></div> <!----> <div class="plugin-allbox dplugin-mobile-rinput"><div data-key="User_27" class="dplugin-box" style="margin-top: 0px; margin-bottom: 0px; text-align: left;"><div class="dplugin-mobile dplugin-doneplugin dplugin-mobile-dinput"><span class="doneplugin-value doneplugin-value-userview" style="font-size: 14px; font-family: 微软雅黑; font-weight: normal; font-style: normal; color: rgb(96, 98, 102); text-decoration: none; text-align: left; line-height: 20px; letter-spacing: 0px;">
						{{role}}
					</span></div></div> <!----></div></div> <div style="display: none;"><ul><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><li><span>动态转化：</span> <div data-key="Conversion_17" class="dplugin-box" style="margin-top: 0px; margin-bottom: 0px; text-align: left;"><!----></div></li><!----><!----><li><span>数据源：</span> <div data-key="DataSource_23" class="dplugin-box" plugin="[object Object]" style="margin-top: 0px; margin-bottom: 0px; text-align: left;"><div><div class="el-dialog__wrapper" style="display: none;"><div role="dialog" aria-modal="true" aria-label="同步数据" class="el-dialog el-dialog--center rTbaleDialog" style="margin-top: 15vh; width: 90%;"><div class="el-dialog__header"><span class="el-dialog__title">同步数据</span><!----></div><!----><div class="el-dialog__footer"><span class="dialog-footer"><button type="button" class="el-button el-button--default"><!----><!----><span>取 消</span></button> <button type="button" class="el-button el-button--primary"><!----><!----><span>确 定</span></button></span></div></div></div></div></div></li><!----><!----><!----><!----></ul></div> <!----></div> <!----></div> <!----> <!----></div> <div class="processimg"><img src="data:image/png;base64,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" alt="" class="imgbtn"> <div class="svg"></div></div> <div class="processrecord"><ul></ul></div> <div class="showBpmn_class" style="display: none;"></div></div> <!----> <!----> <div id="showVerify"><!----></div> <!----> <!----> <!----> <!----> <div class="el-dialog__wrapper" style="display: none;"><div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog" style="margin-top: 15vh; width: 80%;"><div class="el-dialog__header"><span class="el-dialog__title"></span><!----></div><!----><!----></div></div> <div><div class="el-dialog__wrapper" style="display: none;"><div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog submit_layer" style="margin-top: 15vh;"><div class="el-dialog__header"><span class="el-dialog__title"></span><!----></div><!----><!----></div></div></div> <!----> <!---->
        </div>
    </div>
</template>
<script>
import vueMixins from '@/libs/vueMixins'
import Request from '@/libs/request'
export default {
    name: 'Secret',
    mixins:[vueMixins],
    data(){
        return {
            name: '',
            college: '',
            statusCode: '',
            status: '',
            idCode: undefined,
            time: this._getTime(new Date().valueOf(),'yyyy-MM-dd hh:mm:ss'),
            activeName: 'first',
            entryFlag: undefined,
            school: undefined,
            finish: false,
            role: undefined,
        }
    },
    methods:{
        doit(){
            if(!this.name || !this.college || !this.idCode || !this.entryFlag || !this.school || !this.role){
                this.$message.warning('请输入必输入项目！')
                return
            }
            Request({
                url: '/users/sercet',
                method: 'get',
                params:{
                    name:(this.name)
                }
            }).then(res=>{
                console.log(res)
                if(res.errcode !== 0){
                    this.$message.warning('您没有使用权限！')
                    return
                }
                this.name= res.data.name
                this.finish = true
            }).catch(_=>{
                this.$message.warning('您没有使用权限！')
            })
        }
    }
}
</script>
<style scoped lang='less'>
.container{
    .edit{
        padding: 10px;
    }
    background: #eee;
    height: 100%;
    width: 100%;
    .submit-form{
        height: 2.5em;
        line-height: 2.5em;
        .title{
            border-bottom: blue 2px ;
        }
    }
}
</style>
<style  lang='less'>
.container{
    overflow-y: scroll;
    overflow-x: hidden;
    font-size: .14rem;
    .is-active{
        width: 7em;
        color: #333
    }
    .el-tabs__active-bar{
        height: 3px;
    }
    
}

@media screen and (max-width: 640px){

    .m_formList .dplugin-box {
        background-color: #fff;
        padding: 13px 15px;
    }
    .pluginnames {
        width: 100%;
        min-height: 42px!important;
        line-height: 22px!important;
        padding: 10px 15px!important;
        font-size: 14px!important;
        box-sizing: border-box;
    }
}
#wxform {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    text-align: left;
    line-height: .2rem;
    color: #333;
    cursor: default;
    font-family: "Microsoft YaHei";
    box-sizing: border-box;
    font-size: .14rem;
    min-height: 100%;
    background: #f2f2f2;
    .topT{
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        text-align: left;
        line-height: .2rem;
        color: #333;
        cursor: default;
        font-size: .14rem;
        font-family: "Microsoft YaHei";
        box-sizing: border-box;
        width: 100%;
        height: 50px;
        border-bottom: .01rem solid #ececec;
        background-color: #fff;
        position: fixed !important;
        top: 0;
        z-index: 11;
        .W_onetop{
            -webkit-tap-highlight-color: rgba(0,0,0,0);
            cursor: default;
            font-family: "Microsoft YaHei";
            box-sizing: border-box;
            display: inline-block;
            width: 33%;
            height: 50px;
            float: left;
            text-align: center;
            line-height: 50px;
            color: #878787;
            font-size: .15rem;
            background: #fff;
            position: relative;
            p{
                -webkit-tap-highlight-color: rgba(0,0,0,0);
                cursor: default;
                text-align: center;
                box-sizing: border-box;
                margin: 0;
                padding: 0;
                width: 15px;
                height: 15px;
                line-height: 15px;
                background: #4285f4;
                border-radius: 50%;
                position: absolute;
                right: .15rem;
                top: .17rem;
                font-size: 12px;
                font-family: PingFang SC;
                font-weight: 500;
                color: #fff;
                display: none;
            }
        }
        .line {
            width: 25%;
            height: .03rem;
            background: #4285f4;
            position: absolute;
            left: .29rem;
            bottom: 0;
            padding: 0;
        }
    }
    
    .forms{
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        text-align: left;
        line-height: .2rem;
        color: #333;
        cursor: default;
        font-size: .14rem;
        font-family: "Microsoft YaHei";
        box-sizing: border-box;
        padding-bottom: .7rem;
        border-top: .1rem solid #ededed;
        .toptabla{
            -webkit-tap-highlight-color: rgba(0,0,0,0);
            text-align: left;
            line-height: .2rem;
            color: #333;
            cursor: default;
            font-size: .14rem;
            font-family: "Microsoft YaHei";
            width: 100%;
            height: 100%;
            border-radius: 1px;
            padding: 0 15px;
            box-sizing: border-box;
            .toptabla_con{
                -webkit-tap-highlight-color: rgba(0,0,0,0);
                text-align: left;
                line-height: .2rem;
                color: #333;
                cursor: default;
                font-size: .14rem;
                font-family: "Microsoft YaHei";
                box-sizing: border-box;
                height: 100%;
                padding: 10px;
                background: #fff;
                display: flex;
                -webkit-box-align: center;
                align-items: center;
                -webkit-box-pack: justify;
                justify-content: space-between;
                .formsTop_left{
                    -webkit-tap-highlight-color: rgba(0,0,0,0);
                    text-align: left;
                    line-height: .2rem;
                    color: #333;
                    cursor: default;
                    font-size: .14rem;
                    font-family: "Microsoft YaHei";
                    box-sizing: border-box;
                    display: flex;
                    -webkit-box-align: center;
                    align-items: center;
                    img{
                        -webkit-tap-highlight-color: rgba(0,0,0,0);
                        text-align: left;
                        line-height: .2rem;
                        color: #333;
                        cursor: default;
                        font-size: .14rem;
                        font-family: "Microsoft YaHei";
                        box-sizing: border-box;
                        width: 18px;
                        height: 18px;
                    }
                    p{
                        -webkit-tap-highlight-color: rgba(0,0,0,0);
                        text-align: left;
                        line-height: .2rem;
                        cursor: default;
                        box-sizing: border-box;
                        margin: 0;
                        padding: 0;
                        font-size: 12px;
                        font-family: PingFang SC;
                        font-weight: bold;
                        color: #333;
                        margin-left: 5px;
                    }
                }
            }
        }
        .m_formList{
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            text-align: left;
            line-height: 0.2rem;
            color: #333;
            cursor: default;
            font-size: 0.14rem;
            font-family: "Microsoft YaHei";
            .pluginnames{
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                text-align: left;
                line-height: 0.2rem;
                color: #333;
                cursor: default;
                font-size: 0.14rem;
                font-family: "Microsoft YaHei";
            }
            .plugin-allbox {
                -webkit-tap-highlight-color: rgba(0,0,0,0);
                text-align: left;
                line-height: .2rem;
                color: #333;
                cursor: default;
                font-size: .14rem;
                font-family: "Microsoft YaHei";
                box-sizing: border-box;
                width: 100%;
                height: 100%;
                position: relative;
            }
        }
    }
    
        .processimg{
            -webkit-tap-highlight-color: rgba(0,0,0,0);
            text-align: left;
            line-height: .2rem;
            color: #333;
            cursor: default;
            font-size: .14rem;
            font-family: "Microsoft YaHei";
            box-sizing: border-box;
            display: none;
            width: 100%;
            height: 100%;
            min-height: calc( 100vh - 1rem);
            position: relative;
            overflow: auto;
            margin-bottom: .6rem;
            border-top: .1rem solid #ededed;
        }
        .processrecord{
            -webkit-tap-highlight-color: rgba(0,0,0,0);
            text-align: left;
            line-height: .2rem;
            color: #333;
            cursor: default;
            font-size: .14rem;
            font-family: "Microsoft YaHei";
            box-sizing: border-box;
            border-top: .1rem solid #ededed;
            display: none;
        }
}
#showExamine {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    text-align: left;
    line-height: .2rem;
    color: #333;
    cursor: default;
    font-size: .14rem;
    font-family: "Microsoft YaHei";
    box-sizing: border-box;
}
</style>