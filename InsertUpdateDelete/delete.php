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

$sql = "DELETE FROM users WHERE id='$id'";

if ($conn->query($sql) === TRUE) {
  echo "User deleted successfully";
} else {
  echo "Error deleting user: " . $conn->error;
}

$conn->close();
?>
