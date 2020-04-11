import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
import movies from '../admin/js/data/movies.js'

function checkRelevance(mediaData, dataType, searchQuery) {
    var score = 0;
    if (mediaData.id === undefined || mediaData.id < 0 || mediaData.title === undefined) {
        return null;
    } else {
        for (var y = 0; y < searchQuery.length; y++) {
        // if checking short_descriptions, make sure it's not a song (if it is, switch data with other relevant info so it's still considered)
            if (dataType === "short_description" && mediaData.media_type === "song") {
                var data = mediaData.artist + mediaData.album;
                data = data.toString().toLowerCase();
            } else {
                // check relevance for each term in query
                console.log("checking " + mediaData.title + ", specifically " + dataType + ". Media type is " + mediaData.media_type);
                var data = mediaData[dataType].toString().toLowerCase();
            }
            if (data.includes(searchQuery[y])) {
                score++;
            }
        }
        // find average score based on length of query
        score = score / searchQuery.length;
        return score;
    }
}

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
            media: "all",
            rawquery: "",
            sortby: 0, // 0 - by year // 1 - alphabetically
            collections: [
                col50 = [],
                col60 = [],
                col70 = [],
                col80 = [],
                col90 = []
            ],
            movies = [],
            songs = [],
            episodes = []
        },
        methods: {
                
            update() {
                if (this.rawquery === "") {
                    this.getOptions();
                }
            },
            getOptions() {
                options = [
                    col50 = [],
                    col60 = [],
                    col70 = [],
                    col80 = [],
                    col90 = []
                ];
                if (this.media === "movies") {
                    options = this.getCollections(this.movies);
                } else if (this.media === "tvshows") {
                    options = this.getCollections(this.episodes);
                } else if (this.media === "songs") {
                    options = this.getCollections(this.songs);
                } else if (this.media === "all" ) {
                    options = this.getCollections([ ...this.movies, ...this.episodes, ...this.songs ]);
                }
            },
            sort(unsorted, key) {
                return sorted = unsorted.sort(function (a,b) {
                    return b[key] - a[key];
                });
            },        
            search(rawquery) {
                query = this.break(rawquery);

            },
            getCollections(media) {
                var collections = [
                    col50 = [],
                    col60 = [],
                    col70 = [],
                    col80 = [],
                    col90 = []
                ];
                var potentials = sort(media, "year");
                for (var i = 0; i < collections.length; i++) {
                    if (this.sortby === 1) {
                        
                    } else {
                        year = 1950 + (i * 10);
                        collections[i] = collections[i] + potentials.filter(media => media.year <= year);
                    }
                }
                return collections;
            },
            break(item) {
                item = item.replace(/[^a-zA-Z0-9]/g, " ");
                item = item.toLowerCase();
                item = item.split(" ");
                item = item.filter(v=>v!="");
                return item;
            }
        }
    }).$mount("#app");

})();