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

Vue.component('modal', {
    template: `
    <div class="modal is-active">
        <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <slot></slot>
                </div>
            </div>
        <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
    </div>
    `
});

Vue.component('tabs', {
    template: `
    <div>
        <div class="tabs">
            <ul>
                <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
                    <a :href="tab.href" @click="selectTab(tab)" >{{tab.name}}</a>
                </li>
            </ul>
        </div>
        <div class="tabs-details">
            <slot></slot>
        </div>
    </div>
    `,
    created() {
        this.tabs = this.$children
    },
    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name)
            });
        }
    },
    data() {
        return { 
            tabs: []
        }
    }
});

Vue.component('tab', {
    template: `
        <div v-show="this.isActive"><slot></slot></div>
    `,
    props: {
        name: { required: true },
        selected: { default: false }
    },
    data() {
        return {
            isActive: false
        }
    },
    mounted() {
        this.isActive = this.selected
    },
    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-')
        }
    },
});

new Vue({
    el: '#root',
    data: {
        showModal: false
    }
});

