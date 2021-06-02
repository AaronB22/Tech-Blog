"use strict";
const createUser = async () => {
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const user_name = document.querySelector('#userName').value.trim();
    if (email && password && user_name) {
        const response = await fetch('/login/createUser', {
            method: 'POST',
            body: JSON.stringify({ email, password, user_name }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            console.log("NewUserCreated");
        }
    }
};
document
    .querySelector('#mainBtn')
    ?.addEventListener('click', createUser);
