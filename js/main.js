
window.pepe = new Vue({
    el: '#app',
    name: 'app',
    data: function () {
        return {
            options: {
                afterLoad: this.afterLoad,
                scrollBar: false,
                menu: '#menu',
                navigation: true,
                anchors: ['page1', 'page2', 'page3', 'page4'],

            }
        }
    },
    methods: {
        afterLoad: function () {
        },
        toggleNavigation: function () {
            this.options.navigation = !this.options.navigation
        },
        toggleScrollbar: function () {
            this.options.scrollBar = !this.options.scrollBar
        }
    }
})