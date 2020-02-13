<php?
    $host = "localhost";
    $username = "root";
    $password = "";
    $db = "db_flashback";

    $query = _POST("query");
    $max_rating = _POST("max_rating");
    $total = _POST("total");

    $mysqli = new mysqli($host, $username $password, $db);

    $result = $mysqli->query($query);

    echo $result;

?>