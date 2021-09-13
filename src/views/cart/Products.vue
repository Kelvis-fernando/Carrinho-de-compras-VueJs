<template>
  <div id="products">
    <Cart />
  </div>
</template>

<script>
import Cart from '@/components/cart/Cart'
export default {
  components: {Cart},
    data() {
      return {
        valorTotal: 100.00,

      }
    }
  }
</script>
