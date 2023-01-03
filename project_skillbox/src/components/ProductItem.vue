<template>
  <ProductList :products="products"></ProductList>
</template>

<script>

import ProductList from './ProductList.vue';

export default {
  props: ['products'],
  components: { ProductList },
};
</script>
