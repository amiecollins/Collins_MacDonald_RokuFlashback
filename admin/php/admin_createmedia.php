<?php
require_once 'load.php';
// confirm_logged_in();

    if(isset($_POST['submit'])){
        $identification = htmlspecialchars(trim($_POST['identification']));
        $type = htmlspecialchars(trim($_POST['type']));
        $title = htmlspecialchars(trim($_POST['title']));
        $year = intval(htmlspecialchars($_POST['year']));
        $season = intval(htmlspecialchars($_POST['season']));
        $episode = intval(htmlspecialchars($_POST['episode']));
        $thumbnail = htmlspecialchars(trim($_POST['thumbnail']));
        $parentalrating = intval(htmlspecialchars($_POST['parentalrating']));
        $genre = htmlspecialchars(trim($_POST['genre']));
        $keywords = htmlspecialchars(trim($_POST['keywords']));
        $shortdesc = htmlspecialchars(trim($_POST['shortdesc']));
        $url = htmlspecialchars(trim($_POST['url']));

    if ((empty($title) || empty($year)|| empty($shortdesc) || empty($thumbnail) || empty($genre) || empty($keywords) || empty($url)) && $type === 'movie'){
        $message = 'Please fill the required fields';
    } else if ((empty($title) || empty($identification) || empty($year) || empty($thumbnail) || empty($genre) || empty($keywords) || empty($shortdesc) || empty($url)) && $type === 'song') {
        $message = 'Please fill the required fields';

    } else if ((empty($title) || empty($identification) || empty($year) || empty($season) || empty($episode) || empty($thumbnail) || empty($genre) || empty($keywords) || empty($shortdesc) || empty($url)) && $type === 'episode') {
        $message = 'Please fill the required fields';

    } else if ($type === "movie") {
        $message = createMovie($title, $year, $thumbnail, $parentalrating, $genre, $keywords, $shortdesc, $url);
    } else if ($type === "song") {
        $message = createSong($title, $identification, $year, $thumbnail, $parentalrating, $genre, $keywords, $shortdesc, $url);
    } else if ($type === "episode") {
        $message = createEpisode($title, $identification, $year, $season, $episode, $thumbnail, $parentalrating, $genre, $keywords, $shortdesc, $url);
    }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Create Media</title>
</head>
<body>
    <h2>Create Media</h2>
    <?php echo !empty($message)? $message: ''; ?>
    <form action="admin_createmedia.php" method="post">
    
    <label>Media Type</label>
    <select name="type" value="episode">
        <option value="episode">Episode</option>
        <option value="movie">Movie</option>
        <option value="song">Song</option>
    </select>
    <br><br>
    <label>Title</label>
    <input type="text" name="title" value=""><br><br>
    <label>Artist / Show Name</label>
    <input type="text" name="identification" value=""><br><br>
    <label>Year</label>
    <input type="text" name="year" value=""><br><br>
    <label>Season</label>
    <input type="text" name="season" value="0"><br><br>
    <label>Episode</label>
    <input type="text" name="episode" value="0"><br><br>
    <label>Thumbnail</label>
    <input type="text" name="thumbnail" value=""><br><br>
    <label>Parental Rating (0 - Suitible for all Audiences 1 - 14+ 2 - 18+)</label>
    <br><br>
    <select name="parentalrating" value="0">
        <option value="0">Suitible for all Audiences / PG</option>
        <option value="1">PG-13 / 14+</option>
        <option value="2">Adult 18+ / Unrated</option>
    </select>
    <br><br>
    <label>Genre(s)</label>
    <input type="text" name="genre" value=""><br><br>
    <label>Keywords</label>
    <input type="text" name="keywords" value=""><br><br>
    <label>Short Description</label>
    <textarea name="shortdesc" value=""></textarea><br><br>
    <label>URL</label>
    <input type="text" name="url" value=""><br><br>
    <button name="submit">Create Media</button>
    </form>

</body>
</html>