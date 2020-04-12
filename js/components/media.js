export default {
    data: function () {
        return {
            year: 1950,
            thumbnail: "",
            rating_up: 0,
            rating_down: 0,
            parental_rating: 0,
            genre: "",
            keywords: "",
            short_description: "",
            link: "",
            media: {}
        }
    },

    props: [
        "title", "type"
    ],
    
    methods: {
        
    },

    created: function () {
        var data = [ this.title, this.type ];
        fetch("admin/php/scripts/selectmedia.php", {
            method: "post",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).
        then((res) => Response.text())
        .then((text) => {
            this.media = text;
        });
    },


    template: `
    <p v-text="title"></p>
    `
}