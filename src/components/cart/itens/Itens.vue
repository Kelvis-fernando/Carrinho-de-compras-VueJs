<template>
<div id="itens">
    <router-link class=" btn1 btn add-new-item" style="background-color: #679890; color: #fff" to="/adicionar">Adicionar Item +</router-link> <br>
    <router-link class=" btn2 btn order" style="background-color: #679890; color: #fff" to="/pedidos">Meus Pedidos</router-link> <br>
    <div class="card"></div>
    <div class="card adjust-card" v-for="(item, id) in itens" :key="id">
        <img src="@/assets/Itens/default.jpg" class="card-img-top" alt="Produtos">
        <div class="card-body">
            <h5 class="card-title text-center">{{item.produto}}</h5>
            <p class="card-text text-center">{{ item.categoria }}</p>
            <p class="card-text text-center">{{ item.valor | dinheiro }}</p>
            <button @click="addProducts(item), addQtd" class="btn" style="background-color: #679890; color: #fff;">Adicionar</button>
        </div>
    </div>
</div>

</template>

<script src="./js/itens.js"></script>
<style src="./css/itens.css"></style>