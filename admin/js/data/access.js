export const accounts = [
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
];

export const avatars = [
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
];

export const users = [
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
        max_rating: 3,
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
        max_rating: 1,
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
        max_rating: 3,
        isAdmin: true,
        showName: true,
        favTags: "",
        disTags: "",
        hideSpoilers: 0, // 0 - off, 1 - hide episode description, 2 - hide all video descriptions
        rating_pref: 1 // 1 - (5) stars, 2 - outof10, 3 - percent
    }
];



const blankuser = {
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
};

const blankaccount = {
    id: 0,
    email: null,
    password: null,
    canView: false,
    user_ids: [
        0
    ]
}

export function getUserById(userId) {
    if (users[userId-1] !== undefined) {
        return users[userId-1];
    }
    return blankuser;
}

export function checkRestrictions(childUserId, rating_id) {
    if (getUserById(childUserId).max_rating >= rating_id) {
        return true;
    } else {
        return false;
    }
    
}
