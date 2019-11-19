<?php

include('./connection.php');



$phone=$_REQUEST['phone'];
$pwd=$_REQUEST['password'];

$sql="select * from userinfo where u_phone='$phone'";

$result=$mysqli->query($sql);

if($result->num_rows>0){
    echo '{"msg":"用户名已存在"}';
    // echo "<script>location.href='./../html/reg.html';</script>";
    $mysqli->close();
    die;
}
    $sqlIn="insert into userinfo (u_phone,u_pwd,u_email) values ('$phone','$pwd','NULL')";

    $res=$mysqli->query($sqlIn);

    if($res){
        echo '{"msg":"注册成功"}';
    }else{

    }
?>