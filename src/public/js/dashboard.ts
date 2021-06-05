
const newPost=()=>{
    document.location.replace('/dashboard/newPost')
}


document
    .querySelector('#newPostBTn')
    ?.addEventListener('click', newPost)