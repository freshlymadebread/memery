import ElementUI from "element-ui"
import axios from 'axios'
import { SessionStorage } from 'wii-fe-utils'
axios.interceptors.response.use(function (response) {
    console.log(response)
    if (response.data.data && response.data.data.code === -1) {
        let errorMsg = CodeToMsg(response.data.errcode) + '. ' + response.data.msg
        ElementUI.Message.warning(errorMsg)
        return Promise.reject(errorMsg)
    }
    return response
}, function (error) {
    ElementUI.Message.error('请求失败，请重试')
    return Promise.reject(error)
})

const Request = function (options) {
    return new Promise((resolve, reject) => {
        let headerUrl = 'http://123.56.56.250:3000'
        //  headerUrl = 'http://localhost:3000'
        let axiosParams = {
            url: headerUrl + options.url,
            method: options.method,
            // headers: {"content-type":"charset=utf-8"}
        }
        if (options.method == 'get') {
            axiosParams.params = {
                ...options.params,
            }
        } else {
            axiosParams.data = {
                ...options.params
            }
        }
        axios(axiosParams).then((res) => {
            res = res.data
            if (res.errcode == 0) {
                resolve(res)
            } else {
                reject(res)
            }
        }).catch((err) => {
            reject(err)
        })
    })
}

export default Request