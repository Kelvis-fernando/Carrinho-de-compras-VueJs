<template>
  <div id="Order">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Categoria</th>
          <th scope="col">Valor Total</th>
          <th scope="col">Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="orders in getOrders()" :key="orders">
          <td>{{orders.categoria}}</td>
          <td>{{orders.valor | dinheiro}}</td>
          <td>
              <button class="btn btn-outline-info action-btn">
                <i class="bi bi-pencil-fill"></i>Editar
              </button>
            <button class="btn btn-outline-danger action-btn">
              <i class="bi bi-trash-fill"></i>Deletar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
data() {
  return {
    id: 0
  }
},
methods: {
    getOrders() {
      console.log(this.$store.state.itensFinish);
      return this.$store.state.itensFinish
    },
    seila() {
      console.log(this.getOrders())
    }
},
created: function() {
  console.log(this.$store.state.itensFinish);
  return this.$store.state.itensFinish
}
}
</script>

<style scoped>
.action-btn {
  margin: 0px 5px;
}
</style>
