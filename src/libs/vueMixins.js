import {
    TimeUtils,
    SessionStorage
} from 'wii-fe-utils'

export default {
    filters: {
    },
    data() {
        return {
        }
    },
    methods:{
        _getAccount(){
            return SessionStorage.get('account')
        },
        _getTime(value, format = 'yyyy-MM-dd hh:mm:ss') {
            if(!value) {
                return '-'
            }
            return TimeUtils.timestampToTime(value, format) 
        },
    }
}