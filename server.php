<?php

session_start();

$con = mysqli_connect('localhost', 'root', '', 'messages');

if (isset($_POST['name'])) {
  $name   = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
  $phone  = filter_var($_POST['phone'], FILTER_SANITIZE_NUMBER_INT);
  $msg    = filter_var($_POST['msg'], FILTER_SANITIZE_STRING);


  if (strlen($phone) !== 11) {
    echo 'phoneERR';
  } else {
    $query = "INSERT INTO `msgs` (`name`, `email`, `phone`, `msg`, `date`) VALUES ('$name', '', '$phone', '$msg', now())";
    $res = mysqli_query($con, $query);

    if ($res) {
      echo "DONE";
    }
  }
}

if (isset($_GET['delete'])) {
  $id = filter_var($_GET['id'], FILTER_SANITIZE_NUMBER_INT);

  $query = "DELETE FROM `msgs` WHERE `msgs`.`id` = $id";
  $res = mysqli_query($con, $query);

  if ($res) {
    echo 'DONE';
  }
}
