<template>
    <div id="side-auth">
        <div id="banner-side" class="grid-template-columns-1">
            <div>
                <h1 class="title-banner-side">O melhor registro de caixa</h1>
                <p class="subtitle-banner-side">Deixa que enquanto você cuida do seu negocio, nós fazemos o controle por você</p>
            </div>
            <div class="banner">
                <img src="@/assets/login-assets/food-removebg-preview.png" alt="Food">
            </div>
        </div>
    </div>
</template>

<style>
/* Global Style */
.grid {
	display: grid;
}

.grid-template-columns-1 {
	grid-template-columns: 10px 10px 10px 10px;
}

/* Banner side */
#banner-side {
  padding: 100px 60px 0px;
  position: absolute;
  margin-left: 809px;
  width: 40%;
  height: 100vh;
  background-color: #679890;
  color: #fff;
}

.banner {
    position: absolute;
    margin: 0px -30px 10px;
}

.banner img {
    width: 520px;
}
</style>