<?php
require_once '../load.php';
// confirm_logged_in();
    $data = json_decode(file_get_contents('php://input'), true);

    $pdo = Database::getInstance()->getConnection();
    $get_media_query = 'SELECT title FROM tbl_'.$data->table.' WHERE year >= '.$data->min.' AND year < '.$data->max.' ORDER BY title';
    $get_media_set = $pdo->query($get_media_query);
    $get_media_results = [];

    $get_media_results[] = $get_media_set->fetch(PDO::FETCH_NUM);

    if ($get_media_results){
        return $get_media_results;
    }
