const homeLink=()=>{
    event.preventDefault();
    document.location.replace('/')
    
}

const dashLink=()=>{
    event.preventDefault();
    document.location.replace('/')
}

const logInLink=()=>{
    event.preventDefault();
    document.location.replace('/logIn')
}

const logOutLink=()=>{
    event.preventDefault();
    document.location.replace('/')
}

document
    .querySelector('#home')
    .addEventListener('click', homeLink)

document
    .querySelector('#dashboard')
    .addEventListener('click', dashLink)


document
    .querySelector('#logInNav')
    .addEventListener('click', logInLink)


document
    .querySelector('#logOutNav')
    .addEventListener('click', logOutLink)