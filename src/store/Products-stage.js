import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        itens: [
            { id: 1, Qtd: 1, Produto: 'Chocolate', Valor: 10},
            { id: 2, Qtd: 1, Produto: 'Pão', Valor: 10 },
        ]
    },
})