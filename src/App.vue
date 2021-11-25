<template>
  <div id="app">
    <div v-if="!showwind">
            <div>
        <search
          @inputevent='listEdits($event)'>
        </search>
       
    </div>
    <div>
      <adduser
        @edit='validValue(ind,$event)'
        @clickAddBtn='addNewUSer'
        @clearinput='userInfoValClear()'>
      </adduser>
    </div>
    <div 
        v-for="(it, i) in userDataArrForDisplay"
        :key="i">
      <user
        :avatar='it.avatar'
        :first_name='it.first_name'
        :last_name='it.last_name'
        :email="it.email"
        @clikBtnDel='delUser(i)'
        @clickBtnDetail='userDetailShow(it.id)'
      ></user>
    </div>
    </div>
    <div v-else>
      <user-detali-page 
        @backFromMain='userDetailNone()'
        :id='id'>
      </user-detali-page>
    </div>
  </div>

</template>

  <script>
import {mapGetters} from "vuex";
import user from './components/user.vue';
import search from './components/search.vue';
import adduser from './components/adduser.vue';
import userDetaliPage from './components/userDetaliPage.vue'


  export default {
    components: {
      user,
      search,
      adduser,
      userDetaliPage
    },
    data: function() {
       return {
        userDataArrForDisplay: {},
        userpagecopy: [],
        flag: true,
        showwind: false,
        search: '',
        id: null
       
       }
     },
     methods: {
       delUser(ind){
          this.userList.splice(ind, 1)
          this.listEdits()
       },
       userDetailShow(ind) {
         this.showwind = true
         this.userPageWindow(ind)
       },
       userDetailNone(){
         this.showwind = false
         this.listEdits()
       },
      userPageWindow(ind) {
          this.id = ind
      },
      listEdits(data) {
        if(data) {
          this.userSearch(data)
        }
        if(!data) {
          this.overwriting()
        }
      },
      userSearch(data) {
          let newArr = []
          const dataSearch = data.toLowerCase()
          this.userList.forEach(elem => {
            if((elem.first_name.toLowerCase().indexOf(dataSearch) !== -1) || (elem.last_name.toLowerCase().indexOf(dataSearch) !== -1)){
              newArr.push(elem)
            }
          })
          this.userDataArrForDisplay = newArr
      },
      overwriting() {
          let arr = []
          this.userList.forEach(element => {
              arr.push(element)
          });
          this.userDataArrForDisplay = arr
       },
        addNewUSer(){
            let obj = {}
            obj.id = this.userList[this.userList.length-1].id + 1
            this.userinfo.forEach(elem => {
                obj[elem.key] = elem.value
            })
            this.userList.push(obj)
            this.overwriting()
            this.userInfoValClear()
         
        },
        userInfoValClear() {
         
          this.userinfo.forEach(e => {
             e.value = ''
          })
        }
     },
     computed: {
       ...mapGetters('mainstore', {userList: 'userdata'}),
       ...mapGetters('mainstore', {userinfo: 'userinfodata'})

     },
     created() {
       if(this.userList) {
          this.listEdits()
       }
     }
  }
  </script>

<style scoped>

</style>>


