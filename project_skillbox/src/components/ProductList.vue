<template>
  <ul class="catalog__list">
    <li class="catalog__item" v-for="(product, index) in products" :key="index">
      <a class="catalog__pic" href="#">
        <img :src="product.image"  :alt="product.title">
      </a>

      <h3 class="catalog__title">
        <a href="#">
          {{ product.title }}
        </a>
      </h3>

      <span class="catalog__price">
        {{ product.price }}
      </span>
      </li>
      </ul>
      <ProductItem :products="product"></ProductItem>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  props: ['products'],
  // eslint-disable-next-line vue/no-unused-components
  components: { ProductItem },
};
</script>
