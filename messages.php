<?php
session_start();

$con = mysqli_connect('localhost', 'root', '', 'messages');
$query = "SELECT * FROM `msgs` ORDER BY `id` DESC";
$res = mysqli_query($con, $query);
$num = mysqli_num_rows($res);
?>
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <meta name="description" content="Coordination for construction and project management" />
  <meta name="copyright" content="Coordination" />
  <link rel="shortcut icon" href="images/title.jpg" type="image/x-icon">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/custom.css">
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/all.min.css">
  <style>
    * {
      user-select: auto;
      cursor: auto;
    }
  </style>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700&display=swap" rel="stylesheet">
  <title>Coordination || MESSAGES</title>
</head>

<body>
  <div class="my-container">
    <h2>الرسائل</h2>
    <section>
      <?php
      while ($row = mysqli_fetch_assoc($res)) {
        echo '<div>
                <p>' . $row['msg'] . '<span>' . $row['date'] . '</span></p>
                <h3>' . $row['name'] . '</h3>
                <p>' . $row['phone'] . '</p>
                <i class="fa fa-times" onclick="dlt(' . $row['id'] . ', this)"></i>
              </div>';
      }
      if ($num === 0) {
        echo "<section>لم يتم ارسال اي رسائل بعد</section>";
      }
      ?>

      <div>
        <p>ظبط كل التعديلات اللي انت عايز تظبطها يا برو :)<span>2021-09-12</span></p>
        <h3>احمد هاني</h3>
        <p>01098795151</p>
        <i class="fa fa-times"></i>
      </div>
      <div>
        <p>ظبط كل التعديلات اللي انت عايز تظبطها يا برو :)<span>2021-09-12</span></p>
        <h3>احمد هاني</h3>
        <p>01098795151</p>
        <i class="fa fa-times"></i>
      </div>
      <div>
        <p>ظبط كل التعديلات اللي انت عايز تظبطها يا برو :)<span>2021-09-12</span></p>
        <h3>احمد هاني</h3>
        <p>01098795151</p>
        <i class="fa fa-times"></i>
      </div>
      <div>
        <p>ظبط كل التعديلات اللي انت عايز تظبطها يا برو :)<span>2021-09-12</span></p>
        <h3>احمد هاني</h3>
        <p>01098795151</p>
        <i class="fa fa-times"></i>
      </div>
      <div>
        <p>ظبط كل التعديلات اللي انت عايز تظبطها يا برو :)<span>2021-09-12</span></p>
        <h3>احمد هاني</h3>
        <p>01098795151</p>
        <i class="fa fa-times"></i>
      </div>
    </section>
  </div>

  <div class="login">
    <form onsubmit="return false;">
      <h2>تسجيل الدخول</h2>
      <input type="text" placeholder="الاسم">
      <input type="password" placeholder="الرقم السري">
      <p></p>
      <button onclick="login(this.parentElement)">دخول</button>
    </form>
  </div>
</body>
<script src="js/login.js"></script>

</html>