<?php
$name=$_POST["name"];
$sid=$_POST["sid"];
$email=$_POST["email"];
$department=$_POST["department"];


$conn=mysqli_connect("localhost","root","","Student");

if(!$conn){
    die("Connection failed:" . mysqli_connect_error());
}

$sql="INSERT INTO Info values('$name','$sid','$email','$department')";

if(mysqli_query($conn,$sql)){
    echo "New query created successfully";
}
else{
    echo "Error:".$sql."<br>".mysqli_error($conn);
}
mysqli_close($conn);

?>