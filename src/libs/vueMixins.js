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
    }
}