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
      <ProductItem v-for="(product, index) in products" :product="product" :key="index" />
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  props: ['products', 'product'],
  components: { ProductItem },
};
</script>
