<template>
  <ProductList :product="product"></ProductList>
</template>

<script>
import ProductList from './ProductList.vue';

export default {

  props: ['product'],
  components: { ProductList },
};
</script>
