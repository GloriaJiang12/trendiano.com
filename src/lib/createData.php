<?php

include('./connection.php');

   for($i=4;$i<16;$i++){
        $sql = "INSERT INTO product (`src`,`title`,`carPic`,`price`,`sum`)VALUES('list$i.jpg','123','{"p1":"$i.b1.jpg","p2":"$i.b2.jpg","p3":"$i.b3.jpg","p4":"$i.b4.jpg","p5":"$i.b5.jpg","p6":"$i.b6.jpg","p7":"$i.b7.jpg"}','428','$i')";
       $mysqli->query($sql);
    }
 $mysqli->close();
?>