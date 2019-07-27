<template>
  <div>
    <my-header :cartItemCount="cartItemCount"></my-header>
    <main>
      <div v-for="product in sortedProducts">
        <div class=row>
          <div class="col-md-5 col-md-offset-0">
            <figure>
              <img :src="product.image" class="product">
            </figure>
          </div>
          <div class="col-md-6 col-md-offset-0 description">
            <h1 v-text="product.title"></h1>
            <p v-html="product.description"></p>
            <p class="price">
              {{product.price | formatPrice}}
            </p>

            <button @click="addToCart(product)" class="btn btn-primary btn-lg" v-if="canAddToCart(product)">
              Add to cart
            </button>
            <button class="btn btn-primary btn-lg" disabled="true" v-else>
              Add to cart
            </button>

            <span class="inventory-message" v-if="product.availableInventory - cartCount(product.id) === 0">
              All Out!
            </span>
            <span class="inventory-message" v-else-if="product.availableInventory - cartCount(product.id) < 5">
              Only {{product.availableInventory - cartCount(product.id)}} left!
            </span>
            <span class="inventory-message" v-else>
              Buy Now!
            </span>
            <div class="rating">
              <span :class="{'rating-acting': checkRating(n, product)}" v-for="n in 5">☆</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
    import MyHeader from '@/components/Header';
    import axios from 'axios';

    export default {
        name: 'iMain',
        data() {
            return {
                products: {},
                cart: [],
            };
        },
        components: {MyHeader},
        methods: {
            checkRating(n, product) {
                return product.rating - n >= 0;
            },
            addToCart(product) {
                this.cart.push(product.id);
            },
            showCheckout() {
                this.showProduct = !this.showProduct;
            },
            submitForm() {
                alert('Submitted');
            },
            canAddToCart(product) {
                return product.availableInventory > this.cartCount(product.id);
            },
            cartCount(id) {
                let count = 0;
                for (const cart of this.cart) {
                    if (cart === id) {
                        count++;
                    }
                }
                return count;
            },
        },
        computed: {
            cartItemCount() {
                return this.cart.length || '';
            },
            sortedProducts() {
                if (this.products.length > 0) {
                    const productsArray = this.products.slice(0);

                    function compare(a, b) {
                        return (a.title.toLowerCase() < b.title.toLowerCase())
                            ? -1
                            : (a.title.toLowerCase() > b.title.toLowerCase())
                                ? 1
                                : 0;
                    }

                    return productsArray.sort(compare);
                }
            },
        },
        filters: {
            formatPrice(price) {
                if (!parseInt(price, 10)) {
                    return '';
                }
                if (price > 99999) {
                    const priceString = (price / 100).toFixed(2);
                    const priceArray = priceString.split('').reverse();
                    let index = 3;
                    while (priceArray.length > index + 3) {
                        priceArray.splice(index + 3, 0, ',');
                        index += 4;
                    }
                    return '$' + priceArray.reverse().join('');
                } else {
                    return '$' + (price / 100).toFixed(2);
                }
            },
        },
        created() {
            axios.get('./data/products.json')
                .then((response) => {
                    this.products = response.data.products;
                });
        },
    };
</script>

<style scoped>
  img {
    width: 300px;
  }
</style>