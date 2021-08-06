<template>
    <div id="register" class="grid">
        <div id="register-side" class="grid-template-columns-1">
            <b-form @submit="onSubmit" @reset="onReset" class="form mt-5">
                <div>
                    <img src="@/assets/logo.svg" alt="logo" class="logo">
                    <h1 class="titulo">Registre-se</h1>
                    <p class="sub-titulo">Crie a sua conta e faça o teste gratuito</p>
                </div>
                <div class="nome-sobrenome">
                    <b-form-group id="nome" label="Nome">
                        <b-form-input
                            id="nome"
                            class="mb-3"
                            type="text"
                            placeholder="Exemplo*"
                            required
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group id="sobrenome" label="Sobrenome">
                        <b-form-input
                            id="sobrenome"
                            class="mb-3"
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

                <b-form-group id="c-senha" label="Confirme a Senha">
                    <b-form-input
                        id="senha"
                        class="mb-3 w-100"
                        v-model="form.name"
                        type="password"
                        placeholder="Confirme a Senha *"
                        required
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="remember" v-slot="{ ariaDescribedby }">
                    <b-form-checkbox-group
                        v-model="form.checked"
                        id="remember"
                        class="mb-3 w-100"
                        :aria-describedby="ariaDescribedby"
                    >
                        <b-form-checkbox value="me">Aceito os termos de privacidade</b-form-checkbox>
                    </b-form-checkbox-group>
                </b-form-group>

                <b-button type="submit" variant="primary" class="cadastrar">Cadastrar</b-button>
            </b-form>
        </div>
        <SideAuth />
    </div>
</template>

<script>
import SideAuth from "@/components/auth/SideAuth";

export default {
  components: { SideAuth },
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
  padding-bottom: 30px;
}

.titulo {
  margin-bottom: -5px;
}

.sub-titulo {
  margin-bottom: 30px;
}

.form {
  padding: 10px 100px 60px;
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
