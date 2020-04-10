import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
import movies from '../admin/js/data/movies.js'

function checkRestrictions(childUser, mediaData) {
    return mediaData;
}

function getResult(total, media, user, query) {
    // check if user is child
    if (user.isKid) {
        // remove any content not parent approved
        media = checkRestrictions(user, media);
    }
    // take out all characters that might mess with system, set to lower case (data checked will be set to lowercase as well)
    query = query.replace(/[^a-zA-Z0-9]/g, "");
    query = query.toLowerCase();
    query = query.split(" ");
    var dataType = ["title", "year", "keywords", "short_description"];
    // check relevance of each piece of media
    // check in this order - title, year, keywords, short_description
    
    var results = media;
    
    for (var v = 0; v < results.length; v++) {
        results[v].relevance = 0;
    }
    for (var dataPhase = 0; dataPhase < 4; dataPhase++) { // repeat while there is still data phases left
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
}

function sortResults(unsorted, key) {
    var sorted = unsorted.sort(function (a,b) {
        return b[key] - a[key];
    });

    return sorted;
}

function getMediaData(media_type, id) {
    if (media_type === "movie") {
        return movies.find(x => x.id === id);
    } else if (media_type === "show") {
        return shows.find(x => x.id === id);
    } else if (media_type === "episode") {
        return episodes.find(x => x.id === id);
    } else if (media_type === "album") { 
        return albums.find(x => x.id === id);
    } else if (media_type === "song") {
        return songs.find(x => x.id === id);
    } else if (media_type === "artist") {
        return artists.find(x => x.id === id);
    } else {
        alert("Error");
        return null;
    }
}

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
            currentPage: "home", // main, home, user_select, settings, movies, shows, music, video_preview, album_preview, artist_preview, video_player, music_player
            account: {
                id: 1,
                email: "admin@amiecollins.ca",
                password: "admin"
            },
            user: {
                id: 1,
                name: "Amie",
                password: "password",
                isKid: false,
                isAdmin: true,
                avatarURL: "",
                avatarALT: "",
                showName: true,
                favTags: "",
                disTags: "",
                hideSpoilers: 0, // 0 - off, 1 - hide episode description, 2 - hide all video descriptions
                rating_pref: 1 // 1 - (5) stars, 2 - outof10, 3 - percent
            },
            login: {
                email: "enter email",
                password: ""
            },
            register: {
                email: "",
                password: "",
                checkpassword: ""
            },
            icons: {
                search: "",
                settings: "",
                logout: "",
                star_rating: "",
                star_rating_empty: ""
            },
            images: {
                moviesSelect: "",
                showsSelect: "",
                musicSelect: ""
            },
            searchQuery: "",
            searchResults: null,
        },
        methods: {
            loggedIn(currentAccount) {
                if (currentAccount.id > 0) {
                    return true;
                } else {
                    return false;
                }
            },

            logoClicked() {
                console.log("logo was clicked");
            },

            searchClicked() {
                console.log("search was clicked");
                // show search results
            },

            avatarClicked() {
                console.log("avatar was clicked");
            },

            settingsClicked() {
                console.log("settings was clicked");
            },

            adminClicked() {
                console.log("ATTENTION: ADMIN CONSOLE ACCESSED");
            },

            logoutClicked() {
                console.log("logout was clicked");
            },
            
            logoutAccount(){
                blankaccount = {
                    id: 0,
                    email: null,
                    password: null
                }
                return blankaccount;
            },

            loginClicked() {
                console.log("login was clicked");
            },
            
            getAccount(accountemail, accountpassword) {
                if (accountemail === "admin@amiecollins.ca" && accountpassword === "admin") {
                    account = {
                        id: 1,
                        email: "admin@amiecollins.ca",
                        password: "admin"
                    }
                    alert('Welcome admin');
                    return account;
                } else {
                    blankaccount = {
                        id: 0,
                        email: null,
                        password: null
                    }
                    alert('There was a problem');
                    return blankaccount;
                }
            },

            showMovies() {
                console.log("movies was selected");
            },

            showShows() {
                console.log("tv shows was selected");
            },

            showMusic() {
                console.log("music was selected");
            },
            getStars(num) {
                num = num / 2;
                var result = -Math.floor(-num);
                return result;
            },
            spoilerCheck(userpref, media_type) { // return true to show description, return false to hide
                if (userpref >= 1 && media_type === "episode") {
                    return false;
                } else if (userpref === 2 && media_type === "episode" || media_type === "movie" || media_type === "show" ) {
                    return false;
                } else {
                    return true;
                }
            },
            getSearchResults(query,page,userData) {
                // check for query
                if (query !== "" && query !== null) {
                    // check for current page, send available media appropriate for that page
                    function addMediaType(collection, type) {
                        for (var a = 0; a < collection.length; a++) {
                            collection[a].media_type = type;
                        }
                        return collection;
                    }
                    if (page === "home") {
                        var media = [ ...addMediaType(movies, "movie"), ...addMediaType(shows, "show"), ...addMediaType(songs, "song"), ...addMediaType(artists, "artist"), ...addMediaType(albums, "album"), ...addMediaType(episodes, "episode") ];
                    } else if (page === "movies") {
                        var media = [ ...addMediaType(movies, "movie") ];
                    } else if (page === "shows") {
                        var media = [ ...addMediaType(shows, "show"), ...addMediaType(episodes, "episode") ];
                    } else if (page === "music") {
                        var media = [ ...addMediaType(songs, "song"), ...addMediaType(artists, "artist"), ...addMediaType(albums, "album") ];
                    }
                    var results = getResult(5, media, userData, query);
                    return results;
                } else {
                    // if query is blank, clear past results
                    return null;
                }
            },
            openPreview(media, id) {
                if (media === "movie") {
                    // get movies(id)
                    return "video_preview";
                } else if (media === "show") {
                    // get shows(id)
                    return "video_preview";
                } else if (media === "episode") {
                    // get shows(episodes.show_id(id)) and set to episode id
                    return "video_preview";
                } else if (media === "album") { 
                    // get albums(id)
                    return "album_preview";
                } else if (media === "song") {
                    // get albums(songs.album_id(id))
                    return "album_preview";
                } else if (media === "artist") {
                    // get artist(id)
                    return "artist_preview";
                } else {
                    alert("Error");
                    return "main";
                }
            },
            addAll() {
                const jsonmovies = JSON.stringify(movies);
                console.log(jsonmovies);
                fetch('admin/php/scripts/addAll.php', {
                    method: 'post',
                    body: jsonmovies
                }).then(function(response) {
                    console.log(response.json());
                });
            }
        }
    }).$mount("#app");

})();