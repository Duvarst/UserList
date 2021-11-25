import {request} from '../api/http';
import {listUserInfo} from '../api/userinfo';

export default {
    namespaced: true,
    state: {
        userData: [],
        userInfoData: []
    },
    getters: {
        userdata: state => state.userData,
        userinfodata: state => state.userInfoData
    },
    mutations: {
        setItems(state, data) {
            let arr = []
            data.forEach(item => {
                arr.push(item)
            })
            state.userData = arr
        },
        setInfo(state, data){
            let arr = []
            data.forEach(item => {
                arr.push(item)
            })
            state.userInfoData = data
        } 
    },
    actions: {
       async load({commit}) {
            let userlist = await request('https://reqres.in/api/users?page=1')
            commit("setItems", userlist)
            let userinfo = listUserInfo()
            commit("setInfo", userinfo)
        }   
    }
}