
const signIn= async ()=>{
    const email:string = document.querySelector('#email').value.trim();
    const password:string = document.querySelector('#password').value.trim();
    console.log(JSON.stringify({email, password}))
    const response= await fetch('/logIn/login',{
        method:'POST',
        body: JSON.stringify({email, password}),
        headers: { 'Content-Type': 'application/json' },
    })
    console.log(response)
    if(response.ok){
        console.log('loggedIn')
        window.location.replace('/')
    }
}


const createAccount= ()=>{
    document.location.replace('/login/signUp')
}






document
.querySelector('#signIn')
.addEventListener('click', signIn)
document
    .querySelector('#createAccount')
    .addEventListener('click' createAccount)
