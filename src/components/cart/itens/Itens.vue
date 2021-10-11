<template>
  <div id="itens">
    <!-- <SideBar /> -->
    <router-link
      class="btn1 btn add-new-item"
      style="background-color: #679890; color: #fff"
      to="/adicionar"
      >Adicionar Item +</router-link
    >
    <br />
    <router-link
      class="btn2 btn order"
      style="background-color: #679890; color: #fff"
      to="/pedidos"
      >Meus Pedidos</router-link
    >
    <br />
    <div class="card"></div>
    <div class="card adjust-card" v-for="(item, id) in itens" :key="id">
      <img
        src="@/assets/Itens/default.jpg"
        class="card-img-top"
        alt="Produtos"
      />
      <div class="card-body">
        <h5 class="card-title text-center">{{ item.produto }}</h5>
        <p class="card-text text-center">{{ item.categoria }}</p>
        <p class="card-text text-center">{{ item.valor | dinheiro }}</p>
        <button
          @click="addProducts(item), addQtd"
          class="btn"
          style="background-color: #679890; color: #fff"
        >
          Adicionar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            itens: [],
            id: null,
            qtd: 1,
            item: {
                produto: '',
                categoria: '',
                valor: 0,
            }
        }
    },
    methods: {
        obterUsuarios() {
            this.$http.get('usuarios.json')
                .then(resp => {
                    this.usuarios = resp.data
                    console.log(this.usuarios)
                })
        },
        addProducts(item) {
            this.$store.state.itens.push(item)
        },
        addQtd() {
            this.item.push(this.qtd)
        }
    },
    created: function() {
        this.$http.get(`itens.json`)
            .then(resp => {
                this.itens = resp.data
                console.log(this.itens)
            })
    }

}
</script>

<style>
#itens {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.btn1 {
    display: flex;
    align-content: center;
    justify-content: center;
    position: absolute;
    margin-left: 20px;
}

.btn2 {
    display: flex;
    align-content: center;
    justify-content: center;
    position: absolute;
}

.btn {
    display: flex;
    align-content: center;
    justify-content: center;
}

.adjust-card {
    width: 14rem;
    margin: 50px;
}

.add-new-item {
    margin-left: 50px;
}

.order {
    margin-left: 200px;
}
</style>