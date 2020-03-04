import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
import search from '/admin/js/components/search.js'
import access from '/admin/js/data/access.js'

const vueApp = (() => {

    let vm = new Vue({

        data: {
            currentPage: "main", // main, home, settings, movies, shows, music, video_preview, album_preview, artist_preview, video_player, music_player, add_account
            account: {
                id: 0,
                email: null,
                password: null,
                canView: false,
                user_ids: [
                    0
                ]
            },
            user_select_password: [ "" ],
            user: {
                id: 0,
                name: "",
                password: "",
                avatar: {
                    id: 0,
                    name: "404 Not Found",
                    url: ""
                },
                isKid: true,
                restrictedRating: "",
                isAdmin: false,
                showName: false,
                favTags: "",
                disTags: "",
                hideSpoilers: 2, // 0 - off, 1 - hide episode description, 2 - hide all video descriptions
                rating_pref: 0 // 1 - (5) stars, 2 - outof10, 3 - percent
            },
            login: {
                email: "",
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
                admin: "",
                star_rating_empty: "",
                add_button: "",
                edit_user: ""
            },
            images: {
                moviesSelect: "",
                showsSelect: "",
                musicSelect: ""
            },
            searchQuery: "",
            searchResults: null,
        },

        created: function () {
            console.log("trying to get data");
            let url = "/admin/php/getMedia.php";

            fetch(url)
            //.then(res => res.json())
            .then(res => console.log(res))
            .catch(function(error) { console.error(error); });
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
            
            getUser(userId) {
                return getUserById(userId);
            },

            userCheck(pw, id) {
                if (pw === getUserById(id).password) {
                    return getUserById(id);
                } else {
                    return blankuser;
                }
            },

            getAccount(accountemail, accountpassword) {
                for (var a = 0; a < accounts.length; a++) {
                    if (accountemail === accounts[a].email && accountpassword === accounts[a].password) {
                        return accounts[a];
                    }
                }
                alert('There was a problem');
                return blankaccount;
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
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    // function addMediaType(collection, type) {

                    //     for (var a = 0; a < collection.length; a++) {
                    //         collection[a].media_type = type;
                    //     }
                        
                    //     return collection;
                    // }
                    // if (page === "home") {
                    //     var media = [ ...addMediaType(movies, "movie"), ...addMediaType(shows, "show"), ...addMediaType(songs, "song"), ...addMediaType(artists, "artist"), ...addMediaType(albums, "album"), ...addMediaType(episodes, "episode") ];
                    // } else if (page === "movies") {
                    //     var media = [ ...addMediaType(movies, "movie") ];
                    // } else if (page === "shows") {
                    //     var media = [ ...addMediaType(shows, "show"), ...addMediaType(episodes, "episode") ];
                    // } else if (page === "music") {
                    //     var media = [ ...addMediaType(songs, "song"), ...addMediaType(artists, "artist"), ...addMediaType(albums, "album") ];
                    // }
                    // var results = getResult(5, media, userData, query);
                    // return results;
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

            components: function () {
                search
            }
        }
    }).$mount("#app");

})();