import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    beneficiary: [
      {
        id:1,
        name:'Luis Miranda Mejia',
        document:'1234090101',
        cash:'10,560.00',
        image:'https://www.w3schools.com/howto/img_avatar.png'
      },
      {
        id:2,
        name:'Karen Olvera Mendoza',
        document:'34090101',
        cash:'3,560.00',
        image:'https://www.w3schools.com/w3images/avatar6.png'

      }
    ],
    itemSelect:null,
    idIncrement:3,
  },
  mutations: {
    SET_EDITING_OBJECT(state, payload) {
      state[payload.key] = payload.value;
    },
    PUSH_USER(state, payload){
      state.beneficiary = [payload, ...state.beneficiary]
    }
  },
  actions: {
  },
  modules: {
  }
})
