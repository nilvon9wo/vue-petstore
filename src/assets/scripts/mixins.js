Vue.mixin({
    methods: {
        pressed(val) {
            alert(val);
        }
    },
    data() {
        return {
            item: ''
        }
    }
});


const comp1 = {
    template: `<div>
        <h1>Enter Email</h1>
        <form>
            <div class="form-group">
                <input v-model="item" type="email" class="form-control" placeholder="Email Address"/>
            </div>
            <div class="form-group">
                <button class="btn btn-primary btn-lg" @click.prevent="pressed(item)">Press Button 1</button>
            </div>
        </form>
    </div>`
};

const comp2 = {
    template: `<div>
        <h1>Enter Number</h1>
        <form>
            <div class="form-group">
                <input v-model="item" class="form-control" placeholder="Phone Number"/>
            </div>
            <div class="form-group">
                <button class="btn btn-primary btn-lg" @click.prevent="pressed(item)">Press Button 2</button>
            </div>
        </form>
    </div>`
};

new Vue({
    el: '#app',
    data() {
        return {
            title: 'Mixin in example using two components'
        };
    },
    components: {
        'my-compl': comp1,
        'my-comp2': comp2
    }
});