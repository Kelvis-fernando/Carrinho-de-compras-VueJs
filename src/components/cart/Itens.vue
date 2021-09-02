<template>
<div id="itens">
    <div class="card" style="width: 14rem; margin: 40px;">
        <img src="@/assets/Itens/default.jpg" class="card-img-top" alt="Produtos">
        <div class="card-body">
            <h5 class="card-title text-center">{{produto}}</h5>
            <p class="card-text text-center">{{ categoria }}</p>
            <p class="card-text text-center">R$: {{ valor }}</p>
            <a href="#" class="btn" style="background-color: #679890; color: #fff">Adicionar</a>
        </div>
    </div>
</div>

</template>

<script>
export default {
    data() {
        return {
            produto: 'Bala',
            categoria: 'Doce',
            valor: 2.50
        }
    }
}
</script>

<style scoped>
    #itens {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .btn {
        display: flex;
        align-content: center;
        justify-content: center;
    }
</style>