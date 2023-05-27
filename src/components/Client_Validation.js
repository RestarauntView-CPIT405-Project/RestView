import React from 'react';
import { Link } from 'react-router-dom';
    
    

export default function Client_Validation(event){

    // TODO: Server-side validation

    let Fname = document.forms ["MyForm" ] ["firstname"].value;
    let Lname = document.forms ["MyForm"] ["lastname"].value;
    let Uname = document.forms ["MyForm"] ["username"].value;
    let email = document.forms ["MyForm"] ["email"].value;
    let password = document.forms ["MyForm"] ["password"].value;

    let errorMessageElem = document.getElementById ("error-message");
    errorMessageElem.innerHTML = "";
    let isValid = true;

    //Fname validation
    const FirstNameRegExp = /^{2, 15}$/;
    if (Fname == "" || !FirstNameRegExp.test(Fname)) {
    errorMessageElem.innerHTML += "<p>Invalid First name. First name must be between 2 and 15 charecter</p>";
    isValid = false;
    }

    //Lname validation
    const LastNameRegExp = /^{2, 15}$/;
    if (Lname == "" || !LastNameRegExp.test(Lname)) {
    errorMessageElem.innerHTML += "<p>Invalid Last name. Last name must be between 2 and 15 charecter</p>";
    isValid = false;
    }

    //Uname validation
    const userNameRegExp = /^([a-zA-Z0-9_-]){8,32}$/;
    if (Uname == "" || !userNameRegExp.test(Uname)) {
    errorMessageElem.innerHTML += "<p>Invalid user name. User name must be between 8 and 32 charecter</p>";
    isValid = false;
    }
    
    // Email regular expression pattern (RFC 5322 Official Standard)
    const regExpPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (email == "" || !regExpPattern.test (email)) {
    errorMessageElem.innerHTML += "«p>Invalid email. A valid email address is required.</p>"
    isValid = false;
    }

    //password validation
    const passwordRegExp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$";
    if (password == "" || !passwordRegExp.test(password)) {
    errorMessageElem.innerHTML += "<p>Invalid!! This password must be Minimum eight characters, at least one uppercase letter, one lowercase letter and one number</p>";
    isValid = false;
    }

    //If validation has failed for any input field, do not submit the form
    if(!isValid) {
    event.preventDefault();
    }
}