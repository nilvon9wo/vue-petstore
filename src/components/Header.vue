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
        <div v-if="!mySession">
          <button @click="signIn" class="btn btn-default btn-lg" type="button">Sign In</button>
        </div>
        <div v-else>
          <button @click="signOut" class="btn btn-default btn-lg" type="button">
            <img :src="mySession.photoURL" class="photo"/>
            Sign Out
          </button>
        </div>
      </div>

      <div class="nav navbar-nav navbar-right cart">
        <router-link :to="{name: 'Form'}" active-class="active" class="btn btn-default btn-lg" tag="button">
            <span class="glyphicon glyphicon-shopping-cart">
              {{cartItemCount}}
            </span>
          Checkout
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
    import firebase from 'firebase';

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
            signIn() {
                const provider = new firebase.auth.GoogleAuthProvider();
                firebase.auth()
                    .signInWithPopup(provider)
                    .then(() => {
                        console.info('signed in!'); // tslint:disable-line
                    })
                    .catch((error) => {
                        console.error('error ' + error); // tslint:disable-line
                    });
            },
            signOut() {
                firebase.auth()
                    .signOut()
                    .then(() => {
                        console.info('signed out!'); // tslint:disable-line
                    })
                    .catch((error) => {
                        console.error('error in sign out!'); // tslint:disable-line
                    });
            },
        },
        beforeCreate() {
            firebase.auth().onAuthStateChanged((user) => {
                this.$store.commit('SET_SESSION', user || false);
            });
        },
        computed: {
            mySession() {
                return this.$store.getters.session;
            },
        },

    };
</script>

<style scoped>
  a {
    color: black;
    text-decoration: none;
  }

  .router-link-exact-active {
    color: blue;
  }

  .photo {
    width: 25px;
    height: 25px;
  }
</style>