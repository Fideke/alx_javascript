#!/usr/bin/node

function welcome(firstName, lastName) {
    const fullName = firstName + " " + lastName;
    function displayFullName() {
        alert('welcome ${fullname}!')
    }
    displayFullName()
}