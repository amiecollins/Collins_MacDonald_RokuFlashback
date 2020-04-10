<?php
require_once './admin/php/load.php';
// confirm_logged_in();
$movies = getMedia("movies");


?>

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
        <header></header>
        <section class="main"><h2 class="hidden">Welcome to the Golden Years</h2>
        <?php echo $movies ?>
            <!-- <home>
                <music></music>
                <tvshows></tvshows>
                <music></music>
            </home>
            
            <player v-if="selectedVideo.url != ''" :video="selectedVideo">
                <comments :video="video.title"></comments>
            </player> -->

        </section>
        <footer></footer>
    </div>
</body>
<script src="./js/main.js" type="module"></script>
</html>