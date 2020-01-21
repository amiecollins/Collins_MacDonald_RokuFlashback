import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'

const movies = [
    {
        id: 1,
        title: "The Silence of the Lambs",
        year: 1991,
        thumbnail: "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
        length: "1h 58min",
        imdb_rating: 8.6,
        local_rating: 9.0,
        parental_rating: "R",
        genre: "Crime, Drama, Thriller",
        keywords: "Clarissa, Buffallo Bill, Hannibal Lecter",
        short_description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
        url: "https://storage.cloud.google.com/roku_flashback_media/The%20Silence%20Of%20The%20Lambs%20(1991)/The.Silence.Of.The.Lambs.1991.720p.BluRay.X264.YIFY.mp4"
    },
    {
        id: 2,
        title: "Rosemarys Baby",
        year: 1968,
        thumbnail: "https://m.media-amazon.com/images/M/MV5BZmEwZGU2NzctYzlmNi00MGJkLWE3N2MtYjBlN2ZhMGJkZTZiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
        length: "2hr 17min",
        imdb_rating: 8.0,
        local_rating: 9.0,
        parental_rating: "PG-13",
        genre: "Drama, Horror",
        keywords: "Roman Polanski, Mia Farrow",
        short_description: "A young couple moves in to an apartment only to be surrounded by peculiar neighbors and occurrences. When the wife becomes mysteriously pregnant, paranoia over the safety of her unborn child begins to control her life.",
        url: "https://storage.cloud.google.com/roku_flashback_media/Rosemarys.Baby.1968.1080p.BluRay.x264.anoXmous/Rosemarys.Baby.1968.1080p.BluRay.x264.anoXmous_.mp4"
    }
]
const artists = [
     {
        id: 1,
        title: "The Coasters",
        year: 1955,
        end_year: "present",
        thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/The_Coasters_1957.JPG/330px-The_Coasters_1957.JPG",
        local_rating: 9.0,
        genre: "Rhythm and Blues, Rock and Roll",
        keywords: "Leiber and Stoller",
        short_description: "The Coasters are an American rhythm and blues/rock and roll vocal group who had a string of hits in the late 1950s. Beginning with Searchin and Young Blood, their most memorable songs were written by the songwriting and producing team of Leiber and Stoller. Although the Coasters originated outside of mainstream doo-wop, their records were so frequently imitated that they became an important part of the doo-wop legacy through the 1960s.",
        albums: [
            1
        ]
    }
]
const albums = [
    {
        id: 1,
        title: "The Coasters: Singles",
        year: 1991,
        artist: "The Coasters",
        artist_id: 1,
        thumbnail: "https://img.discogs.com/yxxrNE3Uv3AVBqJjaIGYcqHjgd8=/fit-in/500x497/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-6349505-1417082410-8653.jpeg.jpg",
        length: "undetermined",
        local_rating: 7.0,
        parental_rating: "Safe For All Audiences",
        genre: "Rhythm and Blues, Rock and Roll",
        keywords: "Yakety Yak",
        short_description: "collection of various singles by The Coasters",
        songs: [
            1
        ]
    }
]
const songs = [
    {
        id: 1,
        title: "Yakety Yak",
        year: 1991,
        artist: "The Coasters",
        artist_id: 1,
        thumbnail: "https://upload.wikimedia.org/wikipedia/en/6/64/Yakety_Yak_by_The_Coasters_US_vinyl_A-side.jpg",
        length: "1min 52sec",
        local_rating: 9.0,
        parental_rating: "Safe For All Audiences",
        genre: "Rhythm and Blues, Rock and Roll",
        keywords: "Cleaning Anthem",
        url: "https://storage.cloud.google.com/roku_flashback_media/The%20Coasters%20The%20Collection%2060%20tracks%20mp3%20cbr%20320/19%20The%20Coasters%20-%20Yakety%20Yak%20stereo.mp3"
    }
]
const shows = [
    {
        id: 1,
        title: "Placeholder TV Show",
        year: 2020,
        end_year: "Present",
        thumbnail: "",
        length: "x Seasons",
        imdb_rating: 5,
        parental_rating: "PG",
        genre: "Sitcom",
        keywords: "Actors, Directors, Themes",
        short_description: "short description goes here",
        episodes: [
            1
        ]
    }
]
const episodes = [
    {
        id: 1,
        title: "Placeholder Episode",
        show: "Placeholder TV Show",
        show_id: 1,
        year: 2020,
        thumbnail: "",
        length: "30min",
        imdb_rating: 7,
        parental_rating: "PG",
        genre: "Sitcom",
        keywords: "Actors, Directors, Themes",
        short_description: "episode description goes here",
        url: ""
    }
]

const account = [
    {
        id: 1,
        email: "admin@amiecollins.ca",
        password: "admin",
        canView: true, // stores whether or not account has access to site (i.e. is 'paying')
        user_ids: [
            1, 2
        ]
    },
    {
        id: 2,
        email: "kathleen@fanshaweonline.ca",
        password: "admin",
        canView: true,
        user_ids: [
            3
        ]
    }
]

const avatars = [
    {
        id: 1,
        name: "Octotar",
        url: "images/svg/user-icon1.svg"
    },
    {
        id: 2,
        name: "Giraffatar",
        url: "images/svg/user-icon2.svg"
    }
]

const users = [
    {
        id: 1,
        name: "Amie",
        password: "password",
        avatar: {
            id: 1,
            name: "Octotar",
            url: "images/svg/user-icon1.svg"
        },
        isKid: false,
        restrictedRatings: "",
        isAdmin: true,
        showName: true,
        favTags: "fantasy, comedy, adventure, thriller",
        disTags: "action, horror",
        hideSpoilers: 0, // 0 - off, 1 - hide episode description, 2 - hide all video descriptions
        rating_pref: 1 // 1 - (5) stars, 2 - outof10, 3 - percent
    },
    {
        id: 2,
        name: "Felicity",
        password: "",
        avatar: {
            id: 1,
            name: "Octotar",
            url: "images/svg/user-icon1.svg"
        },
        isKid: true,
        restrictedRatings: "R, NSFW, NC-17, PG-13, Explicit, TV-14, TV-R",
        isAdmin: false,
        showName: false,
        favTags: "",
        disTags: "",
        hideSpoilers: 1, // 0 - off, 1 - hide episode description, 2 - hide all video descriptions
        rating_pref: 1 // 1 - (5) stars, 2 - outof10, 3 - percent
    },
    {
        id: 3,
        name: "Kathleen",
        password: "password",
        avatar: {
            id: 2,
            name: "Giraffatar",
            url: "images/svg/user-icon2.svg"
        },
        isKid: false,
        restrictedRatings: "",
        isAdmin: true,
        showName: true,
        favTags: "",
        disTags: "",
        hideSpoilers: 0, // 0 - off, 1 - hide episode description, 2 - hide all video descriptions
        rating_pref: 1 // 1 - (5) stars, 2 - outof10, 3 - percent
    }
]

function getUser(userId) {
    if (users[userId-1] !== null) {
        return user[userId];
    }
    return user = {};
}

function userCheck(pw, id) {
    if (pw === users.password) {
        return getUser(id);
    } else {
        return blankuser = {};
    }
}

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
            currentPage: "main", // main, home, settings, movies, shows, music, video_preview, album_preview, artist_preview, video_player, music_player
            account: {
                id: 0,
                email: null,
                password: null,
                canView: false,
                users: [
                    
                ]
            },
            user_select_password: "",
            user: {

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
                var blankaccount = {
                    id: 0,
                    email: null,
                    password: null,
                    canView: false,
                    users: [

                    ]
                }
                for (var a = 0; a < accounts.length; a++) {
                    if (accountemail === accounts[a].email && accountspassword === accounts[a].password) {
                        return account[a];
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
            }
        }
    }).$mount("#app");

})();