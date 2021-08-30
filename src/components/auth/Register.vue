<template>
  <div id="register" class="grid">
    <div id="register-side" class="grid-template-columns-1">
      <b-form class="form mt-5">
        <b-alert show dismissible v-for="mensagem in mensagens" 
        :key="mensagem.texto"
        :variant="mensagem.tipo">{{ mensagem.texto }}</b-alert>
        <div>
          <img src="@/assets/logo.svg" alt="logo" class="logo" />
          <h1 class="titulo">Registre-se</h1>
          <p class="sub-titulo">Crie a sua conta e faça o teste gratuito</p>
        </div>
        <div class="nome-sobrenome">
          <b-form-group id="nome" label="Nome">
            <b-form-input
              id="nome"
              class="mb-3"
              v-model="nome"
              type="text"
              placeholder="Exemplo*"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="sobrenome" label="Sobrenome">
            <b-form-input
              id="sobrenome"
              class="mb-3"
              v-model="sobrenome"
              type="text"
              placeholder="Exemplo*"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <b-form-group id="email" label="E-mail">
          <b-form-input
            id="email"
            class="mb-3 w-100"
            v-model="email"
            type="email"
            placeholder="Exemplo@exemplo.com.br *"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="senha" label="Senha">
          <b-form-input
            id="senha"
            class="mb-3 w-100"
            v-model="senha"
            type="password"
            placeholder="Senha *"
            required
          ></b-form-input>
        </b-form-group>

        <b-button @click="signUp" type="submit" variant="primary" class="cadastrar"
          style="background: #679890; border: none;">Cadastrar</b-button
        >
      </b-form>
    </div>
    <SideAuth />
  </div>
</template>

<script>
import SideAuth from "@/components/auth/SideAuth";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";
import firebase from "firebase/app";

export default {
  components: { SideAuth },
  data() {
    return {
      mensagens: [],
    };
  },
  methods: {
    // registrar() {
    //   this.$http.post(`cadastro.json`, this.usuarios)
    //     .then(() => {
    //       this.limpar()
		// 			this.mensagens.push({
		// 				texto: 'Operação realizada com sucesso',
		// 				tipo: 'success'
		// 			})
    //     })
    // },
    signUp() {
      let email = document.getElementById('email')
      let senha = document.getElementById('senha')
      // let nome = document.getElementById('nome')
      // let sobrenome = document.getElementById('sobrenome')
      
      firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode)
          console.log(errorMessage)
          // ..
        });
    },
  },
};
</script>

<style>

/* Global Style */
.grid {
  display: grid;
}

.grid-template-columns-1 {
  grid-template-columns: 10px 10px 10px 10px;
}

#register {
  width: 100%;
}

#register-side {
  position: absolute;
}

.nome-sobrenome {
  display: block;
  margin-bottom: 115px;
}

#nome {
  float: left;
  display: inline;
  width: 190px;
}
#sobrenome {
  float: right;
  display: inline;
  width: 190px;
  margin-left: 15px;
}

.logo {
  width: 200px;
  padding-bottom: 15px;
}

.titulo {
  margin-bottom: -5px;
}

.sub-titulo {
  margin-bottom: 30px;
}

.form {
  padding: 0px 150px 0px;
}

.cadastrar {
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
</style>
