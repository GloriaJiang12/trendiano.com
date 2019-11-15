<?php
include('./connection.php');

$phone=$_REQUEST['phone'];
$pwd=$_REQUEST['password'];

$sql="select * from userinfo where (u_phone='$phone' or u_email='$phone') and u_pwd='$pwd'";

$res=$mysqli->query($sql);
// var_dump($res);
if($res->num_rows>0){
    echo '{"msg":"登陆成功"}';
    // echo "<script>alert('登陆成功')</script>";
    // $row=$res->fetch_assoc();
    // // var_dump($row);
    // echo "<script src='./../js/cookie.js'></script>";
    // echo "<script>cookie.set('isLogined','true');cookie.set('username','$row[u_user]');</script>";
    // echo "<script>if(cookie.get('username')==='admin'){
    //     cookie.set('username','admin');
    //     location.href='./userInfo.html';}</script>";
}else{
    echo '{"msg","账号或密码错误"}';
    // echo "<script>alert('账号或密码错误')</script>";
    // echo "<script>location.href='./../html/login.html';</script>";
}
$mysqli->close();

?>