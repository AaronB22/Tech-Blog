"use strict";
const homeLink = () => {
    event.preventDefault();
    document.location.replace('/');
};
const dashLink = () => {
    event.preventDefault();
    document.location.replace('/dashboard');
};
const logInLink = () => {
    event.preventDefault();
    document.location.replace('/logIn');
};
const logOutLink = async () => {
    event.preventDefault();
    const Response = await fetch('/login/logout');
    if (Response.ok) {
        console.log('Logged Out');
        document.location.replace('/');
    }
};
document
    .querySelector('#home')
    .addEventListener('click', homeLink);
document
    .querySelector('#dashboard')
    .addEventListener('click', dashLink);
document
    .querySelector('#logInNav')
    .addEventListener('click', logInLink);
document
    .querySelector('#logOutNav')
    .addEventListener('click', logOutLink);
