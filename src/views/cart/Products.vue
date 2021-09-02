<template>
  <div id="products">
    <div class="d-flex flex-row-reverse">
        <b-button v-b-toggle.sidebar-right class="d-flex flex-row-reverse mx-5 mt-5"><b-icon icon="cart" aria-hidden="true"></b-icon></b-button>
        <b-sidebar id="sidebar-right" right shadow>
            <div>
                <b-table :items="items"></b-table>
            </div>
            <label for="desconto">Desconto</label>
            <input type="text" id="desconto" class="w-25 m-2">
            <h3 class="my-4">Valor Total: R$: {{valorTotal}}</h3>
            <b-button variant="outline-success" class="m-3">Fechar Pedido</b-button>
            <b-button variant="outline-warning">Limpar Carrinho</b-button>
        </b-sidebar>
    </div>
    <Itens />
  </div>
</template>

<script>
import Itens from '@/components/cart/Itens'
export default {
    components: {Itens},
    data() {
      return {
        valorTotal: 100.00,
        items: [
          { Qtd: 1, Produto: 'Chocolate', Valor: 15 },
          { Qtd: 5, Produto: 'Pão', Valor: 15 },
          { Qtd: 8, Produto: 'Bala', Valor: 15 },
          { Qtd: 3, Produto: 'Café', Valor: 15 }
        ]
      }
    }
  }
</script>

<style>

</style>
