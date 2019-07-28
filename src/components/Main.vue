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
            <router-link :to="{name: 'Id', params:{id: product.id}}" tag="h1">
              product.title
            </router-link>
            <p v-html="product.description"></p>
            <p class="price">
              {{product.price | formatPrice}}
            </p>

            <button @click="addToCart(product)" class="btn btn-primary btn-lg" v-if="canAddToCart(product)">
              Add to cart
            </button>
            <button class="btn btn-primary btn-lg" disabled v-else>
              Add to cart
            </button>

            <transition mode="out-in" name="bounce">
              <span class="inventory-message" key="0" v-if="leftToBuy(product) === 0">
                All Out!
              </span>
              <span class="inventory-message" key="" v-else-if="leftToBuy(product) < 5">
                Only {{leftToBuy(product)}} left!
              </span>
              <span class="inventory-message" key="" v-else>
                Buy Now!
              </span>
            </transition>

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
            leftToBuy(product) {
                return product.availableInventory - this.cartCount(product.id);
            },
        },
        computed: {
            products() {
                return this.$store.getters.products;
            },
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
            this.$store.dispatch('initStore');
        },
    };
</script>

<style scoped>
  img {
    width: 300px;
  }

  .bounce-enter-active {
    animation: shake 100.72s cubic-bezier(.37, .07, .19, .97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
  }

  @keyframes shake {
    10%, 90% {
      color: red;
      transform: translate3d(-10px, 0, 100px);
    }

    20%, 80% {
      transform: translate3d(20px, 100px, 0);
    }

    30%, 50%, 70% {
      color: red;
      transform: translate3d(-40px, 0, 200px);
    }

    40%, 60% {
      transform: translate3d(40px, 200px, 0);
    }
  }

</style>