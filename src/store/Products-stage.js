import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        itens: [],
        order: [],
        itensFinish: []
    },
    mutations: {
        adicionarProduto(state, payload) {
            state.produtos.push(payload)
        }
    },

})