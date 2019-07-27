<template>
	<div>
    <my-header :cartItemCount="cartItemCount"></my-header>
    <div class="row">
      <div class="col-md-10 col-md-offset-1">
        <div class="panel panel-info">
          <div class="panel-heading">Pet Depot Checkout</div>
          <div class="panel-body">
            <div class="form-group">
              <div class="col-md-12">
                <h4>
                  <strong>Enter Your Information</strong>
                </h4>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-6">
                <strong>First Name:</strong>
                <input class="form-control" v-model.trim="order.firstName"/>
              </div>
              <div class="col-md-6">
                <strong>Last Name:</strong>
                <input class="form-control" v-model.trim="order.lastName"/>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-12">
                <strong>Address:</strong>
              </div>
              <div class="col-md-12">
                <input class="form-control" v-model.trim="order.address"/>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-12">
                <strong>City:</strong>
              </div>
              <div class="col-md-12">
                <input class="form-control" v-model.trim="order.city"/>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-2">
                <strong>State:</strong>
                <select class="form-control" v-model="order.state">
                  <option disabled value="">State</option>
                  <option v-bind:value="state" v-for="(state, key) in states">
                    {{key}}
                  </option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-6 col-md-offset-4">
                <strong>Zip / Postal Code:</strong>
                <input class="form-control" type="number" v-model.number="order.zip"/>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-6 boxes">
                <input id="gift" type="checkbox" v-bind:false-value="order.dontSendGift"
                       v-bind:true-value="order.sendGift"
                       v-model="order.gift"
                       value="true"
                >
                <label for="gift">Ship As Gift?</label>
              </div>
            </div>
            <!-- end of form-group -->
            <div class="form-group">
              <div class="col-md-6 boxes">
                <input id="home" type="radio" v-bind:value="order.home"
                       v-model="order.method"
                >
                <label for="home">Home</label>
                <input id="business" type="radio" v-bind:value="order.business"
                       v-model="order.method"
                >
                <label for="business">Business</label>
              </div>
            </div>
            <!-- end of form-group-->
            <div class="form-group">
              <div class="col-md-6">
                <button class="btn btn-primary submit" type="submit"
                        v-on:click="submitForm"
                >Place Order
                </button>
              </div>
              <!-- end of col-md-6-->
            </div>
            <!-- end of form-group-->
            <div class="col-md-12 verify">
						                    <pre>
						                        First Name: {{order.firstName}}
						                        Last Name: {{order.lastName}}
						                        Address: {{order.address}}
						                        City: {{order.city}}
						                        Zip: {{order.zip}}
						                        State: {{order.state}}
						                        Method: {{order.method}}
						                        Gift: {{order.gift}}
						                    </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import MyHeader from '@/components/Header';
    export default {
        name: 'Form',
        props: ['cartItemCount'],
        data() {
            return {
                states: {
                    AL: 'Alabama',
                    AK: 'Alaska',
                    AR: 'Arizona',
                    CA: 'California',
                    NV: 'Nevada',
                },
                order: {
                    firstName: '',
                    lastName: '',
                    address: '',
                    city: '',
                    zip: '',
                    state: '',
                    method: 'Home Address',
                    business: 'Business Address',
                    home: 'Home Address',
                    gift: '',
                    sendGift: 'Send As A Gift',
                    dontSendGift: 'Do Not Send As A Gift',
                },
            };
        },
        components: {MyHeader},
        methods: {
            submitForm() {
                alert('Submitted');
            },
        },
    };
</script>

<style scoped>

</style>