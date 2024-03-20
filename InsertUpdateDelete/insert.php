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
$username = $_POST['username'];
$email = $_POST['email'];

$sql = "INSERT INTO users (id, username, email) VALUES ('$id', '$username', '$email')";

if ($conn->query($sql) === TRUE) {
  echo "User added successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
