"use strict";
const newComment = async () => {
    const txtContent = document.querySelector('#newComment').value.trim();
    const blogs_id = document.querySelector('#BlogID').value.trim();
    console.log(blogs_id);
    const response = await fetch('/blog/new', {
        method: 'POST',
        body: JSON.stringify({ txtContent, blogs_id }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        console.log('Refreshing');
        window.location.reload();
    }
};
document
    .querySelector('#newCommentBtn')
    ?.addEventListener('click', newComment);