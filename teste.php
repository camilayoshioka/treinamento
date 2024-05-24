<?php
$files=$_FILES['files'];
move_uploaded_file($files['tmp_name'],"C:/wamp64/www/$files[name]");