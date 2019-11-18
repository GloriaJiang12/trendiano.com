<?php
include('./connection.php');

$sql="select * from index1";

$res=$mysqli->query($sql);

$arr=array();


while($row=$res->fetch_assoc()){
array_push($arr,$row);
}

$json=json_encode($arr);

echo $json;

$mysqli->close();

?>