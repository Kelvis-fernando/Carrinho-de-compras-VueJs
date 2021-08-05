<template>
  <div id="login" class="grid">
    <div id="login-side" class="grid-template-columns-1">
      <b-form @submit="onSubmit" @reset="onReset" class="form mt-5">
        <div>
          <img src="@/assets/logo.svg" alt="logo" class="logo">
          <h1 class="titulo">Seja bem vindo</h1>
          <p class="sub-titulo">Faça o Login na sua conta</p>
        </div>
        <b-form-group id="email" label="E-mail">
          <b-form-input
            id="email"
            class="mb-3 w-50"
            v-model="form.email"
            type="email"
            placeholder="Exemplo@exemplo.com.br *"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="senha" label="Senha">
          <b-form-input
            id="senha"
            class="mb-3 w-50"
            v-model="form.name"
            type="password"
            placeholder="Senha *"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="remember" v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            v-model="form.checked"
            id="remember"
            class="mb-3 w-50"
            :aria-describedby="ariaDescribedby"
          >
            <b-form-checkbox value="me"> Mantenha-me Conectado</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <b-button type="submit" variant="primary" class="logar">Entrar</b-button>
      </b-form>
      <p class="cadastro">Ainda não tem uma conta? <router-link to="/auth/cadastro" class="link">Cadastre-se</router-link></p>
    </div>
    <div id="banner-side" class="grid-template-columns-1">
      <div>
        <h1 class="title-banner-side">O melhor registro de caixa</h1>
        <p class="subtitle-banner-side">Deixa que enquanto você cuida do seu negocio, nós fazemos o controle por você</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style>
/* Global Style */
.grid {
	display: grid;
}

.grid-template-columns-1 {
	grid-template-columns: 10px 10px 10px 10px;
}

#login {
  width: 80%;
}

/* #login-side {
  width: 70%;
} */

.logo {
  width: 200px;
  padding-bottom: 30px;
}

.titulo {
  margin-bottom: -5px;
}

.sub-titulo {
  margin-bottom: 30px;
}

.form {
  padding: 40px 100px 60px;
}

.logar {
  width: 150px;
}

.cadastro {
  margin: 20px 190px 0px;
  width: 100%;
}

.link {
  text-decoration: none;
  border-bottom: 1px solid #000;
  color: #000;
}

.link:hover {
  border-bottom: 1px solid rgb(129, 128, 128);
  color: rgb(71, 71, 71);
}

/* Banner side */
#banner-side {
  padding: 100px 60px 0px;
  position: absolute;
  margin-left: 820px;
  width: 40%;
  height: 100vh;
  background-color: #679890;
  color: #fff;
}
</style>
