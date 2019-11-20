<?php

include('./connection.php');

$currentPage = $_REQUEST['page'];
$pageSize=12;

$startRow=($currentPage-1)*$pageSize;

$sql = "select * from product order by id limit $startRow,$pageSize";

$res=$mysqli->query($sql);

$arr=array();
while($row=$res->fetch_assoc()){
array_push($arr,$row);
}

$json=json_encode($arr);

echo $json;

$mysqli->close();
?>