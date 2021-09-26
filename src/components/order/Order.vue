<template>
  <div id="Order">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Observacao</th>
          <th scope="col">Valor Total</th>
          <th scope="col">Acao</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
methods: {
    getOrders() {
        return this.$store.state.itens
    }
}
}
</script>

<style scoped>
</style>
