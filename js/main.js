import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'

const vueApp = (() => {

    let vm = new Vue({

        data: {
            loggedIn: true,
            currentPage: "home", // main, home, user_select, settings, movies, shows, music, video_preview, album_preview, artist_preview, video_player, music_player
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
                minIMDB: 3 
            },
            icons: {
                search: "",
                settings: "",
                logout: ""
            },
            images: {
                moviesSelect: "",
                showsSelect: "",
                musicSelect: ""
            }
        },
        methods: {

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

            loginClicked() {
                console.log("login was clicked");
            },

            showMovies() {
                console.log("movies was selected");
            },

            showShows() {
                console.log("tv shows was selected");
            },

            showMusic() {
                console.log("music was selected");
            }
        }
    }).$mount("#app");

})();