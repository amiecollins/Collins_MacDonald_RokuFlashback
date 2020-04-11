

export default {

    data: function () {
        return {
            total: 10,
            checkList: ["title", "year", "keywords", "genre", "short_description"],
            results = []
        }
    },

    props: ["page", "rawquery", "movies", "songs", "episodes"],

    methods: {

        search: function(query, page) {
            
            
            var dataType = this.checkList;
            var results = [ ...this.movies, ...this.episodes, ...this.songs];

            for (var dataPhase = 0; dataPhase < dataType.length; dataPhase++) { // repeat while there is still data phases left
                for (var x = 0; x < results.length; x++) {
                    // get relevance for this results
                    var relevanceScore = checkRelevance(results[x], dataType[dataPhase], query);
                    if (relevanceScore === null){
                        console.log(results[x].title + " is removed")
                        results = results.splice(x);
                    } else {
                        results[x].relevance += relevanceScore;
                    }
                }
                // sort by relevance
                results = sortResults(results, "relevance");
            }
            /// idea for later -- spellchecker/omdb suggestions for results that have max relevance < 0.1
            return results.slice(0, total-1);
        },
        
        sortResults: function (unsorted, key) {
            var sorted = unsorted.sort(function (a,b) {
                return b[key] - a[key];
            });
        
            return sorted;
        },
        
        
        checkRelevance: function (mediaData, dataType, searchQuery) {
            var score = 0;
            if (mediaData.id === undefined || mediaData.id < 0 || mediaData.title === undefined) {
                return null;
            } else {
                for (var y = 0; y < searchQuery.length; y++) {
                // if checking short_descriptions, make sure it's not a song (if it is, switch data with other relevant info so it's still considered)
                    if (dataType === "short_description" && mediaData.media_type === "song") {
                        var data = mediaData.artistid + mediaData.album;
                        data = data.toString().toLowerCase();
                    } else if (dataType === "genre" &&  mediaData.media_type === "episode") {
                        // episodes do not have genres
                        return 0;
                    } else if (dataType === "keywords") {
                        // keywords should be checked individually
                        var data = mediaData.keywords;
                        data = data.toLowerCase();
                        data = data.split(", ");
                        for (var i = 0; i < data.length; i++) {
                            if (data[i].includes(searchQuery[y])) {
                                score++;
                            }
                        }
                    } else {
                        // check relevance for each term in query
                        console.log("checking " + mediaData.title + ", specifically " + dataType + ". Media type is " + mediaData.media_type);
                        var data = mediaData[dataType].toString().toLowerCase();
                        if (data.includes(searchQuery[y])) {
                            score++;
                        }
                    }
                }
                // find average score based on length of query
                score = score / searchQuery.length;
                return score;
            }
        }
    },

    template: ``

}