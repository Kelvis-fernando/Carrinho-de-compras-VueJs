<template>
  <div id="add-itens">
    <b-form>
      <b-form-group
        id="input-group-1"
        label="Produtos"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="text"
          placeholder="Café*"
          required
          class="w-25"
          v-model="itens.produto"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Valor"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="text"
          placeholder="00,00*"
          required
          class="w-25"
          v-model="itens.valor"
        ></b-form-input>
      </b-form-group>

      <div>
        <b-form-select v-model="this.itens.categoria" :options="this.itens.categoria"></b-form-select>
      </div>

      <b-button @click="enviar" type="submit" class="my-3" style="background-color: #679890; color: #fff; border: none;">Adicionar</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itens: {
        produto: '',
        valor: 0,
        categoria: ['Comidas','Doces', 'Lanches', 'Bebidas', 'Categorias']
      }
    }
  },
  methods: {
    enviar() {
      this.$http.post(`itens.json`, this.itens)
        .then(() => {
          this.limpar()
        })
    },
    limpar() {
      this.itens.produto = ''
      this.itens.valor = ''
      this.itens.categoria = ''
    },
    // registrar() {
    //   this.$http.post(`cadastro.json`, this.itens)
    //     .then(() => {
    //       this.limpar()
		// 			this.mensagens.push({
		// 				texto: 'Operação realizada com sucesso',
		// 				tipo: 'success'
		// 			})
    //     })
    // }
  }
};
</script>

<style scoped>
</style>