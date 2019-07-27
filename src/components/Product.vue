<template>
  <div>
    <my-header></my-header>
    <h1>This is the id {{$route.params.id}}</h1>
    <div class="row">
      <div class="col-md-5 col-md-offset-0">
        <figure>
          <img :src="product.image" class="product"/>
        </figure>
      </div>
      <div class="col-md-6 col-md-offset-0 description">
        <h1>{{product.title}}</h1>
        <p v-html="product.description"></p>
        <p class="price">{{product.price}}</p>
      </div>
      <button @click="edit">Edit Product</button>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
    import MyHeader from '@/components/Header';
    import axios from 'axios';

    export default {
        name: 'Product',
        components: {MyHeader},
        data() {
            return {
                product: {price: undefined},
            };
        },
        methods: {
            edit() {
                this.$router.push({name: 'Edit'});
            },
        },
        created() {
            axios.get('/data/products.json')
                .then((response) => {
                    this.product = response.data.products.filter(
                        (data) => Number(data.id) === Number(this.$route.params.id),
                    )[0];
                    this.product.image = '/' + this.product.image;
                });
        },
    };
</script>

<style scoped>
  img {
    width: 300px;
  }
</style>