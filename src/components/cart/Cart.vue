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
        <span><input type="text" id="desconto" v-model="discount" class="w-25 m-2" /><button @click="setDiscount(discount)" class="btn" style="background-color: #679890; color: #fff">Aplicar</button></span>
        <h3 class="my-4">Valor Total: {{ totalValue | dinheiro }}</h3>
        <b-button @click="finishOrder" variant="outline-success" class="m-3">Fechar Pedido</b-button>
        <b-button @click="clearCart" variant="outline-warning">Limpar Carrinho</b-button>
      </b-sidebar>
    </div>
    <Itens />
  </div>
</template>

<script>
import Itens from '../cart/itens/Itens.vue'
export default {
    components: {Itens},
    data() {
      return {
        discount: 0,
        itensFinish: []
      }
    },
    computed: {
      totalValue() {
        return this.itens.map(p => 1 * p.valor)
          .reduce((total, atual) => {
              return total + atual
          }, 0);
      },
      itens() {
        return this.$store.state.itens;
      }
    },
    methods: {
      clearCart() {
        this.$store.state.itens = [];
      },
      finishOrder() {
        this.$store.state.itensFinish = this.$store.state.itens;
        return this.$store.state.itens = [];
      },
      setDiscount(value) {
        console.log(this.totalValue - value);
        return this.totalValue - value;
      }
    }
  }
</script>
