<?php
function createMovie ($title, $year, $thumbnail, $parentalrating, $genre, $keywords, $shortdesc, $link){
    $pdo = Database::getInstance()->getConnection();
    
    //TODO: finish the below so that it can run a SQL query
    // to create a new user with provided data

    $create_movie_query = 'INSERT INTO tbl_movies(title, year, thumbnail, parental_rating, genre, keywords, short_description, link) VALUES (:title, :year, :thumbnail, :parental_rating, :genre, :keywords, :short_description, :link )';
    

    $create_movie_set = $pdo->prepare($create_movie_query);
    $create_movie_result = $create_movie_set->execute(
        array(
            ':title'=>$title,
            ':year'=>$year,
            ':thumbnail'=>$thumbnail,
            ':parental_rating'=>$parentalrating,
            ':genre'=>$genre,
            ':keywords'=>$keywords,
            ':short_description'=>$shortdesc,
            ':link'=>$link,
        )
    );
    //TODO: redirect to index.php if create user successfully
    // otherwise, return
    if($create_movie_result){
        return $title.' has been added';
    }else{
        return 'The movie did not go through';
    }

}


function createSong ($title, $artist, $year, $thumbnail, $parentalrating, $genre, $keywords, $shortdesc, $link) {
    $pdo = Database::getInstance()->getConnection();
    
    //TODO: finish the below so that it can run a SQL query
    // to create a new user with provided data

    $create_song_query = 'INSERT INTO tbl_songs(title, artist, year, thumbnail, parental_rating, genre, keywords, short_description, link) VALUES (:title, :artist, :year, :thumbnail, :parental_rating, :genre, :keywords, :short_description, :link )';
    

    $create_song_set = $pdo->prepare($create_song_query);
    $create_song_result = $create_song_set->execute(
        array(
            ':title'=>$title,
            ':artist'=>$artist,
            ':year'=>$year,
            ':thumbnail'=>$thumbnail,
            ':parental_rating'=>$parentalrating,
            ':genre'=>$genre,
            ':keywords'=>$keywords,
            ':short_description'=>$shortdesc,
            ':link'=>$link
        )
    );
    //TODO: redirect to index.php if create user successfully
    // otherwise, return
    if($create_song_result){
        return $title.' by '.$artist.' has been added';
    }else{
        return 'The song did not go through';
    }

}

function createEpisode ($title, $tvshow, $year, $season, $episode, $thumbnail, $parentalrating, $genre, $keywords, $shortdesc, $link) {
    $pdo = Database::getInstance()->getConnection();
    $create_episode_query = 'INSERT INTO tbl_episodes(title, tvshow, year, season, episode, thumbnail, parental_rating, genre, keywords, short_description, link) VALUES (:title, :tvshow, :year, :season, :episode, :thumbnail, :parental_rating, :genre, :keywords, :short_description, :link )';
    

    $create_episode_set = $pdo->prepare($create_episode_query);
    $create_episode_result = $create_episode_set->execute(array(
        ':title'=>$title,
        ':tvshow'=>$tvshow,
        ':year'=>$year,
        ':episode'=>$episode,
        ':season'=>$season,
        ':thumbnail'=>$thumbnail,
        ':parental_rating'=>$parentalrating,
        ':genre'=>$genre,
        ':keywords'=>$keywords,
        ':short_description'=>$shortdesc,
        ':link'=>$link
    ));
    if($create_episode_result){
        return $title.' from '.$tvshow.' has been added';
    }else{
        return 'The song did not go through';
    }
}



function getMedia($tblname) {
    $pdo = Database::getInstance()->getConnection();
    $get_media_query = 'SELECT * FROM tbl_'.$tblname;
    $get_media_set = $pdo->query($get_media_query);
    $get_media_results = [];
    
    while($get_media_results[] = $get_media_set->fetch(PDO::FETCH_ASSOC)) {
        $get_media_results[] = $get_media_set->fetch(PDO::FETCH_ASSOC);
    }
    
    if ($get_media_results){
        return json_encode($get_media_results);
    } else{
        return 'There was a problem acessing this info';
    }
};


function getMovies($min, $max) {
    $pdo = Database::getInstance()->getConnection();
    $get_movies_query = 'SELECT title FROM tbl_movies WHERE year >= '.$min.' AND year < '.$max;
    $get_movies_set = $pdo->query($get_movies_query);
    $get_movies_results = [];
    
    while($get_movies_results[] = $get_movies_set->fetch(PDO::FETCH_NUM)) {
        $get_movies_results[] = $get_movies_set->fetch(PDO::FETCH_NUM);
    }
    
    if ($get_movies_results){
        return "'".implode("','", $get_movies_results)."'";
    } else{
        return 'There was a problem acessing this info';
    }
}

function getMovie($title) {
    $pdo = Database::getInstance()->getConnection();
    $get_movie_query = 'SELECT * FROM tbl_movies WHERE title = "'.$title.'"';
    $get_movie_set = $pdo->query($get_movie_query);
    $get_movie_results = [];
    
    $get_movie_results[] = $get_movie_set->fetch(PDO::FETCH_ASSOC);
    
    if ($get_movie_results){
        return json_encode($get_movie_results);
    } else{
        return 'There was a problem acessing this info';
    }
}