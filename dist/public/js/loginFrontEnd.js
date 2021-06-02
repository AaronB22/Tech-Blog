"use strict";
const signIn = async () => {
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    console.log(JSON.stringify({ email, password }));
    const response = fetch('/logIn/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        console.log('loggedIn');
    }
};
const createAccount = () => {
    console.log('otherTest');
};
document
    .querySelector('#signIn')
    .addEventListener('click', signIn);
document
    .querySelector('#createAccount')
    .addEventListener('click', createAccount);
