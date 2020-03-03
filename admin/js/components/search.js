import movies from '../data/movies.js'
import music from '../data/music.js'
import tv from '../data/tv.js'
import access from '../data/access.js'


export default {

    data: function () {
        total: 10;
        checkList: ["title", "year", "keywords", "genre", "short_description"];
    },

    props: ["query", "page"],

    methods: {

        getResult: function(userId, query, page) {
            
            var media = [];

            if (page === "home") {
                media = [ ...this.addMediaType(movies, "movie"), ...this.addMediaType(tv.hows, "show"), ...this.addMediaType(music.artists, "artist"), ...this.addMediaType(music.albums, "album") ];
            } else if (page === "movies") {
                media = [ ...this.addMediaType(movies, "movie") ];
            } else if (page === "shows") {
                media = [ ...this.addMediaType(tv.shows, "show"), ...this.addMediaType(tv.episodes, "episode") ];
            } else if (page === "music") {
                media = [ ...this.addMediaType(music.songs, "song"), ...this.addMediaType(music.artists, "artist"), ...this.addMediaType(music.albums, "album") ];
            }
            // check if user is child
            if (userId.isKid) {
                // remove any content not parent approved
                var parent_approved_media = [];
                for (var i = 0; i < media; i++) {
                    if (access.checkRestrictions(userId, media[i].parental_rating)) {
                        parent_approved_media.push(media[i]);
                    }
                }
            }
            // take out all characters that might mess with system, set to lower case (data checked will be set to lowercase as well)
            query = query.replace(/[^a-zA-Z0-9]/g, "");
            query = query.toLowerCase();
            query = query.split(" ");
            var dataType = this.checkList;
            // check relevance of each piece of media
            // check in this order - title, year, keywords, short_description
            
            var results = media;

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
        
        getMediaData: function (media_type, id) {
            if (media_type === "movie") {
                return movies.find(x => x.id === id);
            } else if (media_type === "show") {
                return tv.shows.find(x => x.id === id);
            } else if (media_type === "episode") {
                return tv.episodes.find(x => x.id === id);
            } else if (media_type === "album") { 
                return music.albums.find(x => x.id === id);
            } else if (media_type === "song") {
                return music.songs.find(x => x.id === id);
            } else if (media_type === "artist") {
                return music.artists.find(x => x.id === id); 
            } else {
                alert("Error");
                return null;
            }
        },

        AddMediaType: function (collection, type) {
            for (var a = 0; a < collection.length; a++) {
                collection[a].media_type = type;
                collection[a].relevance = 0;
                switch (type) {
                    case "episode": {
                        collection[a].thumbnail = tv.shows[collection[a].show_id].thumbnail;
                    }
                    case "song": {
                        collection[a].thumbnail = music.albums[collection[a].album_id].thumbnail;
                    }
                }
            }
            return collection;
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