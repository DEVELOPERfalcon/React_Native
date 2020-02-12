<?php
    header('Content-Type:text/plain; charset=utf-8'); //웹브라우저로 보는게 아니므로 plain 사용

    $name=$_POST['name'];
    $msg=$_POST['msg'];

    echo "NAME: $name \n";
    echo "MESSAGE: $msg \n";
?>