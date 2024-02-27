import { createStore } from 'vuex'
import axios from 'axios'

// axios.defaults.withCredentials = true;

const baseUrl = 'http://localhost:8090'

export default createStore({
  state: {
    products:null
  },
  getters: {
  },
  mutations: {
    setProduct(state,payload){
      state.products = payload
    }
  },
  actions: {
    async getProduct({commit}){
      let {data} = await axios.get(baseUrl + '/products')
      // console.log(data);

      commit('setProduct', data)
    },
    async getPost({commit}, productDetails){
      await axios.post(baseUrl + '/products', productDetails)
      window.location.reload()
    },
    async deleteItem({commit}, prodName){
      console.log(prodName);
      await axios.delete(baseUrl + '/products/' + prodName)
      window.location.reload()
    },
    async getPatch({commit}, update){
      await axios.patch(baseUrl + '/products/' + update.id, update)
      window.location.reload()
    }
  },
  modules: {
  }
})
