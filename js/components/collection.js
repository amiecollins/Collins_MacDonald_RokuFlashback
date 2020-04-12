import media from './media.js'

export default {
    data: function () {
        return {
            contents: ""
        }
    },

    props: [
        "year", "media"
    ],
    
    methods: {
        
    },

    created: function () {
        var minyear = parseInt(this.year);
        var maxyear = parseInt(this.year) + 10;
        // var data = new FormData();
        // data.append('min', min);
        // data.append('max', max);
        // data.append('table', this.media);
        var data = { min: minyear, max: maxyear, table: this.media };
        console.log(JSON.stringify(data));
        fetch("admin/php/scripts/collection.php", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((res) => res.text())
        .then((res) => {
            console.log(res);
            return res;
        });
    },

    components: {
        media
    },


    template: `
    <section class="collection">
        <div class="arrow-left"></div>
        <p v-for="item in contents" v-text="item"></p>
        <div class="arrow-right"></div>
    </section>
    `
}

{/* <preview v-for="item in contents" :title="item[0]">
            <div class="preview" @click="player = active">
                <img :src="thumbnail" :alt="title">
                <player :media="
            </div>
        </preview> */}