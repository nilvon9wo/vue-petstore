Vue.component(
    'render-component',
    {
        render(createElement) {
            return createElement(
                'h' + this.header,
                {
                    'class': 'text-center',
                    on: {
                        click(e) {
                            alert('Clicked');
                        }
                    }
                },
                this.welcome + ' ' + this.$slots.default[0].text
            )
        },
        data() {
            return {
                welcome: 'Hello World'
            };
        },
        props: ['header']
    }
);


new Vue({
    el: '#app'
});