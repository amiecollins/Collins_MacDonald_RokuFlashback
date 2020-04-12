import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
import collection from './components/collection.js'


const vueApp = (() => {

    let vm = new Vue({

        data: {
            images: {
                moviesSelect: "",
                showsSelect: "",
                musicSelect: ""
            },
            copyright: "",
            selectedMedia: "",
            media: "movies",
            rawquery: "",
            sortby: 0, // 0 - by year // 1 - alphabetically
            collections: [],
            movies: [],
            songs: [],
            episodes: []
        },
        created: function () {
            // this.getOptions();
        },
        methods: {
                
        },
        components: {
            collection
        }
    }).$mount("#app");

})();