<?php
 if ($_SERVER['REQUEST_METHOD'] != 'POST' ){
    header ($_SERVER ["SERVER_PROTOCOL"]." 405 Method Not Allowed", true, 405);
    die("<h1>Error: 405 Method Not Allowed</h1>");
 }
 
 // Clean the input (remove extra whitespaces
 $Fname = trim($_POST ["firstname"]) ;
 $Lname = trim($_POST ["lastname"]) ;
 $Uname = trim($_POST ["username"]) ;
 $email = trim($_POST(["email"]));
 $password = trim($_POST(["password"]));

 if (empty($Fname) || empty($Lname) || empty($Uname) || empty($email) || empty($password)) {
     echo "<p>Error: First Name, Last Name, User name, email, and password data are required. </p>" ;
    return;
 }

 //First name validation
 $firstnameLength = strlen($Fname);
 $firstnameRegExp = "/^{2, 15}$/";
  if(preg_match($firstnameRegExp, $Fname)) {
       echo "<p>name is valid</p>";
  }else {
       echo "<p>Error: Invalid First name. First name is reqired</p>";
 }


 //Last name validation
 $lastnameLength = strlen($Lname);
 $lastnameRegExp = "/^{2, 15}$/";
  if(preg_match($lastnameRegExp, $Lname)) {
       echo "<p>name is valid</p>";
  }else {
       echo "<p>Error: Invalid First name. First name is reqired</p>";
 }


 //User Name validation
 $unameLength = strlen($Uname);
 $userNameRegExp = "/^([a-zA-Z0-9_-]){8,32}$/";
  if(preg_match($userNameRegExp, $Uname)) {
         echo "<p>User Name is valid</p>";
  }else {
         echo "<p>Error: Invalid User Name. User Name must be between 8 and 32 charecter</p>";
 }


// Email validation
  if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
         echo "<p> Email address is valid. </P>";
   } else {
         echo "<p>Error: Invalid email address.</p>";
   }


   // Password validation
   $passwordRegExp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$";
  if(preg_match($passwordRegExp, $password)) {
         echo "<p> password is valid. </P>";
   } else {
         echo "<p>Error: Password must be between 8 and 32 charecter, at leat one letter, one digit.</p>";
   }
   
   ?>