Vue.component('task', {
    template: '<li><slot></slot></li>',
    data() {
        return {
            message: 'FooBar message from component'
        }
    }
});

new Vue({
    el: '#root'
});

