import { createStore } from 'vuex';
import usermodule from './usermodule';
import mainstore from './mainstore'

const store = createStore({
  modules: {
    mainstore,
    usermodule
  }
})
export default store;