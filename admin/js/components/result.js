import details from './details.js'

export default {

    data: function () {
        select: false
    },

    props: ["media"],

    methods: {

    },
    
    components: {
        details
    },

    template: `
    <img class="media_display" :src="media.thumbnail" :alt="'Click to select ' + media.title" @click="this.select = false">
    <details v-if="select" media="media"></details>
    `

}