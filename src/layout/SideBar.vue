<template>
  <div id="sidebar">
    <header>
      <img src="@/assets/logo.svg" alt="Logo">
    </header>
    <div>
      <ul>
        <li class="li-link"><router-link to="/Pedidos">Meus Pedidos</router-link></li>
        <li class="li-link"><router-link to="/adicionar">Adicionar Itens +</router-link></li>
      </ul>
    </div>
   </div>
</template>

<style scoped>
#sidebar {
  background: #8cb9b2;
}

ul {
  list-style: none;
  margin: 0px;
  padding: 0px;
}

a {
  text-decoration: none;
  color: #FFF;
  font-weight: bold;
}

.li-link {
  margin-top: 25px;
}
</style>
