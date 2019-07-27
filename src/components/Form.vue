<template>
	<div>
    <my-header :cartItemCount="cartItemCount"></my-header>
      <div class="row">
        <div class="col-md-10 col-md-offset-1">

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

                },
                order: {

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