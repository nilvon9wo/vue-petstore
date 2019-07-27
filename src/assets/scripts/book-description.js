function addEventListener(el, done) {
    el.addEventListener('animationend', function () {
        el.style = '';
        done();
    });
}

new Vue({
    el: '#app',
    data() {
        return {
            title: 'War and Peace',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elim',
            show: false,
        };
    },
    methods: {
        enter(el, done) {
            console.log("enter");
            addEventListener(el, done);
            el.style.animationName = "bounceIn";
            el.style.animationDuration = "1.5s";
        },
        leave(el, done) {
            console.log("leave");
            addEventListener(el, done);
            el.style.animationName = "bounceIn";
            el.style.animationDuration = "1.5s";
            el.style.animationDirection="reverse";
        },
        beforeEnter() {
            console.log("before enter");
        },
        afterEnter() {
            console.log("after enter");
        },
        enterCancelled() {
            console.log("enter cancelled");
        },
        beforeLeave() {
            console.log("before leave");
        },
        afterLeave() {
            console.log("after leave");
        },
        leaveCancelled() {
            console.log("leave cancelled");
        }
    }

});