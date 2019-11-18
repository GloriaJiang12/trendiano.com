<?php

include('./connection.php');

$id=$_REQUEST['id'];

$sql="select * from product where id in ($id)";

    $res = $mysqli->query($sql);
    // var_dump($res);

    $arr = array();

    while($row = $res->fetch_assoc()){
        array_push($arr,$row);
    }

    $json = json_encode($arr);

    echo $json;

    $mysqli->close();
?>