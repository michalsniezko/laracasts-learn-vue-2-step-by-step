Vue.component('task', {
    template: '<li><slot></slot></li>',
});

Vue.component('task-list', {
    template: '<div><task v-for="task in tasks">{{ task.task }}</task><div>',
    data() {
        return {
            tasks: [
                { task: 'Go to the store', complete: true },
                { task: 'Go to the email', complete: true },
                { task: 'Go to the farm', complete: true },
                { task: 'Go to the work', complete: true }
            ]
        }
    }
});

Vue.component('message', {
    data() {
        return {
            isVisible: true
        }
    },
    props: ['title', 'body'],
    template: `
    <article class="message" v-show="isVisible">
        <div class="message-header">
            {{ title }}
            <button class="delete" type="button" @click="hideModal">X</button>

        </div>
        <div class="message-body">
            {{ body }}
        </div>
    </article>
    `,
    methods: {
        hideModal() {
            this.isVisible = false
        }
    }
});

new Vue({
    el: '#root'
});

