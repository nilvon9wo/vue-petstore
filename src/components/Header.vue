<template>
  <header>
    <div class="navbar navbar-default">
      <div class="navbar-header">
        <h1>
          <router-link :to="{name: 'iMain'}">
            {{sitename}}
          </router-link>
        </h1>
      </div>
      <div class="nav navbar-nav navbar-right cart">
        <button @click="showCheckout" class="btn btn-default btn-lg" type="button">
					<span class="glyphicon glyphicon-shopping-cart">
						{{cartItemCount}}
					</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
    export default {
        name: 'my-header',
        data() {
            return {
                sitename: 'Vue.js Pet Depot',
            };
        },
        props: ['cartItemCount'],
        methods: {
            showCheckout() {
                this.$router.push({name: 'Form'});
            },
        },
    };
</script>

<style scoped>
  a {
    color: black;
    text-decoration: none;
  }
</style>