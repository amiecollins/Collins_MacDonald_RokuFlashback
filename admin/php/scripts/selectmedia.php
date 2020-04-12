<?php
require_once '../load.php';
// confirm_logged_in();

$title = $_POST["title"];

$pdo = Database::getInstance()->getConnection();
$get_media_query = 'SELECT * FROM tbl_movies UNION SELECT * FROM tbl_episodes UNION SELECT * FROM tbl_songs WHERE title = '.$title;
$get_media_set = $pdo->query($get_media_query);
$get_media_results = [];

while($get_movies_results[] = $get_movies_set->fetch(PDO::FETCH_NUM)) {
    $get_movies_results[] = $get_movies_set->fetch(PDO::FETCH_NUM);
}

if ($get_media_results){
    return $get_media_results;
} else {
    return 'There was a problem acessing this info';
}