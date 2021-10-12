<template>
  <div id="add-itens">
    <b-form class="form">
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
          class="w-50"
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
          class="w-50"
          v-model="itens.valor"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="categoria"
        label="Categoria"
      >
        <b-form-input
          id="categoria"
          type="text"
          placeholder="Bebida*"
          required
          class="w-50"
          v-model="itens.categoria"
        ></b-form-input>
      </b-form-group>

      <b-button @click="registrar" type="submit" class="my-3 w-50" style="background-color: #679890; color: #fff; border: none;">Adicionar</b-button>
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
        categoria: ''
      }
    }
  },
  methods: {
    enviar() {
      this.$http.post(`itens.json`, this.itens)
        .then(() => {
          this.limpar();
        });
    },
    limpar() {
      this.itens.produto = '';
      this.itens.valor = '';
      this.itens.categoria = '';
    },
    registrar() {
      this.$http.post('itens.json', this.itens)
        .then(() => {
          this.limpar();
					this.mensagens.push({
						texto: 'Operação realizada com sucesso',
						tipo: 'success'
					});
        })
    }
  }
};
</script>

<style scoped>
.form {
  margin-top: 100px;
  margin-left: 350px;
}
</style>