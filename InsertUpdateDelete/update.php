<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "start";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$id = $_POST['id'];
$new_username = $_POST['new_username'];
$new_email = $_POST['new_email'];

$sql = "UPDATE users SET username='$new_username', email='$new_email' WHERE id='$id'";

if ($conn->query($sql) === TRUE) {
  echo "User updated successfully";
} else {
  echo "Error updating user: " . $conn->error;
}

$conn->close();
?>
