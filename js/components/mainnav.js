
export default {
    data: function () {
        return {
            
        }
    },
    
    methods: {
        
    },
    
    created: function () {

    },

    props: [

    ],

    template: 
        `<nav class="main_nav">
            <h2 class="hidden">Main Navigation</h2>
            <ul>
                <li class="logo" @click="media = 'all'"><img :src="logo" alt="Roku Logo"></li>
                <li class="media-button" @click="media = 'movies'"><img :src="images.moviesSelect" alt="Watch Movies"></li>
                <li class="media-button" @click="media = 'episodes'"><img :src="images.showsSelect" alt="Watch T.V. Shows"></li>
                <li class="media-button" @click="media = 'songs'"><img :src="images.musicSelect" alt="Listen to Music"></li>
                <li class="search">
                    <search>
                        <input name="search" v-model:value="rawquery" v-on:change="search">
                    </search>
                </li>
                <li class="user"><a href="admin/php/admin_edituser.php"><img :src="images.user" alt="Edit User"></a></li>
                <li class="logout"><a href="admin/php/admin_logout.php"><img :src="images.logout" alt="Logout"></a></li>
            </ul>
        </nav>`
}