<?php
    header('Content-Type:text/plain; charset=utf-8'); //웹브라우저로 보는게 아니므로 plain 사용

    $name=$_GET['name'];
    $msg=$_GET['msg'];

    echo "NAME: $name \n";
    echo "MESSAGE: $msg \n";
?>