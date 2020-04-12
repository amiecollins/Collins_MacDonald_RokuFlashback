
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/main.css">
    <title>Roku Flashback</title>
</head>
<body>
    <div id="app">
        <h1 class="hidden">Roku Flashback Viewer</h1>
        
        <header>
        <nav class="main_nav">
            <h2 class="hidden">Main Navigation</h2>
                <ul>
                    <li class="logo" @click="media = 'all'"><img :src="logo" alt="Roku Logo"></li>
                    <li class="media-button" @click="media = 'movies'"><img :src="images.moviesSelect" alt="Watch Movies"></li>
                    <li class="media-button" @click="media = 'episodes'"><img :src="images.showsSelect" alt="Watch T.V. Shows"></li>
                    <li class="media-button" @click="media = 'songs'"><img :src="images.musicSelect" alt="Listen to Music"></li>
                    <li class="user"><a href="admin/php/admin_edituser.php"><img :src="images.user" alt="Edit User"></a></li>
                    <li class="logout"><a href="admin/php/admin_logout.php"><img :src="images.logout" alt="Logout"></a></li>
                </ul>
            </nav>
        </header>
        <section class="main"><h2 class="hidden">Welcome to the Golden Years</h2>

            <collection year="1950" :media="media">
            </collecton>
            
            <player v-if="selectedMedia.link != ''" :media="selectedmedia">
                <media :src="media.link" @ended="nextmedia" autoplay>
                <audio :src="media.link" @ended="nextSong" autoplay>
                <comments :media="media"></comments>
            </player>

        </section>
        <footer><div class="copyright" v-text="copyright"></div></footer>
    </div>
</body>
<script src="./js/main.js" type="module"></script>
</html>