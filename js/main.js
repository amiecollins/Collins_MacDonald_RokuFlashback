import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'

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
            movies: {
                id: 1,
                title: "The Silence of the Lambs",
                year: 1991,
                thumbnail: "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
                length: "1h 58min",
                imdb_rating: "8.6",
                parental_rating: "R",
                genre: "Crime, Drama, Thriller",
                keywords: "Clarissa, Buffallo Bill, Hannibal Lecter",
                short_description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
                video_url: "https://storage.cloud.google.com/roku_flashback_media/The%20Silence%20Of%20The%20Lambs%20(1991)/The.Silence.Of.The.Lambs.1991.720p.BluRay.X264.YIFY.mp4"
            }
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
                var result = Math.floor(num);
                return result;
            },
            getSearchResults(query) {
                if (query !== '' && query !== null) {
                    var results = {
                        a: {
                            id: 1,
                            media_type: "movie",
                            local_id: 1,
                            title: "The Silence of the Lambs",
                            year: 1991,
                            thumbnail: "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
                            length: "1h 58min",
                            imdb_rating: 8.6,
                            local_rating: 9.0,
                            parental_rating: "R",
                            genre: "Crime, Drama, Thriller",
                            keywords: "Clarissa, Buffallo Bill, Hannibal Lecter",
                            short_description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims."
                        },
                        b: {
                            id: 2,
                            media_type: "movie",
                            local_id: 2,
                            title: "Rosemarys Baby",
                            year: 1968,
                            thumbnail: "https://m.media-amazon.com/images/M/MV5BZmEwZGU2NzctYzlmNi00MGJkLWE3N2MtYjBlN2ZhMGJkZTZiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
                            length: "2hr 17min",
                            imdb_rating: 8.0,
                            local_rating: 9.0,
                            parental_rating: "PG-13",
                            genre: "Drama, Horror",
                            keywords: "Roman Polanski, Mia Farrow",
                            short_description: "A young couple moves in to an apartment only to be surrounded by peculiar neighbors and occurrences. When the wife becomes mysteriously pregnant, paranoia over the safety of her unborn child begins to control her life."
                        }
                    }
                    return results;
                } else {
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
            }
        }
    }).$mount("#app");

})();