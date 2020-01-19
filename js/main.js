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
                minIMDB: 3 
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
                logout: ""
            },
            images: {
                moviesSelect: "",
                showsSelect: "",
                musicSelect: ""
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
            }
        }
    }).$mount("#app");

})();