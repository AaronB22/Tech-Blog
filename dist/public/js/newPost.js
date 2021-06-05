"use strict";
const newPost = async () => {
    console.log('rar');
    const title = document.querySelector('#title').value.trim();
    const txtContent = document.querySelector('#postText').value.trim();
    const response = await fetch('/dashboard/new', {
        method: 'POST',
        body: JSON.stringify({ txtContent, title }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        console.log('post Added');
        window.location.replace('/dashboard');
    }
};
document
    .querySelector('#newPostBtn')
    .addEventListener('click', newPost);
