<template>
  <div id="cart">
    <div class="d-flex flex-row-reverse">
      <b-button
        v-b-toggle.sidebar-right
        class="d-flex flex-row-reverse mx-5 mt-5"
        ><b-icon icon="cart" aria-hidden="true"></b-icon
      ></b-button>
      <b-sidebar id="sidebar-right" right shadow>
        <div>
          <b-table :items="itens"></b-table>
        </div>
        <label for="desconto">Desconto</label>
        <input type="text" id="desconto" class="w-25 m-2" />
        <h3 class="my-4">Valor Total: {{ totalValue | dinheiro }}</h3>
        <b-button variant="outline-success" class="m-3">Fechar Pedido</b-button>
        <b-button @click="clearCart" variant="outline-warning">Limpar Carrinho</b-button>
      </b-sidebar>
    </div>
    <Itens />
  </div>
</template>

<script>
import Itens from '@/components/cart/Itens'
export default {
    components: {Itens},
    computed: {
      totalValue() {
        return this.itens.map(p => 1 * p.valor)
          .reduce((total, atual) => total + atual, 0)
      },
      itens() {
        return this.$store.state.itens
      }
    },
    methods: {
      clearCart() {
        this.$store.state.itens = []
      }
    }
  }
</script>
