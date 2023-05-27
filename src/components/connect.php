<?php 
if(isset($_POST['send']))
{

$host="localhost";
$user="root";
$password="";
$db="submit";

$Fname=$_POST['firstName'];
$Lname=$_POST['lastName'];
$Uname=$_POST['username'];
$email=$_POST['email'];
$Pw=$_POST['password'];

$con = mysqli_connect($host,$user,$password,$db);
if($con-> connect_error){

    die('connection failed :' .$conn->connect_error);

}else{
   $query = "INSERT INTO `orders` (`ID`, `FIRSTNAME`, `LASTNAME`, `USERNAME`, `EMAIL`, `PASSWORD`)
    VALUES (NULL, '$Fname', '$Lname', '$Uname', '$email', '$Pw')";
    $result = mysqli_query($con,$query);

    if($result)
    {
        echo 'Thank you, it is send seccessfully';

    }else {
        echo 'Try again';
    }
    
}

mysqli_close($con);
}    

?>