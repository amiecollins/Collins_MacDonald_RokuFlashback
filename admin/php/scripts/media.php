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

function getMedia($tblname){
    $pdo = Database::getInstance()->getConnection();
    $get_media_query = 'SELECT * FROM tbl_'.$tblname;
    $get_media_set = $pdo->query($get_media_query);
    $get_media_results = [];
    $rows = $get_media_set->fetch(PDO::FETCH_ASSOC);
    for($i = 0;$i>count($rows);$i++) {
        $get_media_results[i] = $rows[i];
    }
    if ($rows){
        return implode("\n",$rows);
    } else{
        return 'There was a problem acessing this info';
    }
}