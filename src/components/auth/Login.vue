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
            class="mb-3 w-100"
            v-model="form.email"
            type="email"
            placeholder="Exemplo@exemplo.com.br *"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="senha" label="Senha">
          <b-form-input
            id="senha"
            class="mb-3 w-100"
            v-model="form.name"
            type="password"
            placeholder="Senha *"
            required
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" class="logar" style="background: #679890; border: none;" >Entrar</b-button>
      </b-form>
      <p class="cadastro">Ainda não tem uma conta? <router-link to="/register" class="link">Cadastre-se</router-link></p>
    </div>
    <SideAuth />
  </div>
</template>

<script>
import SideAuth from '@/components/auth/SideAuth'

// Initialize the FirebaseUI Widget using Firebase.
let ui = new firebaseui.auth.AuthUI(firebase.auth());

function login() {
  ui.start('#firebaseui-auth-container', {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Other config options...
});
} 


export default {
  components: {SideAuth},
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

#login-side {
  margin-top: 80px;
  position: absolute;
}

.logo {
  width: 200px;
  padding-bottom: 50px;
}

.titulo {
  margin-bottom: -5px;
}

.sub-titulo {
  margin-bottom: 30px;
}

.form {
  padding: 40px 80px 60px;
}

.logar {
  width: 150px;
}

.cadastro {
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
</style>
