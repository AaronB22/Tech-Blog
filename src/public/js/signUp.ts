
const createUser = async ()=>{
    const email:string = document.querySelector('#email').value.trim();
    const password:string = document.querySelector('#password').value.trim();
    const user_name:string = document.querySelector('#userName').value.trim();
    if(email && password && user_name){
        const response:Response= await fetch('/login/createUser', {
            method:'POST',
            body: JSON.stringify({email, password, user_name}),
            headers: { 'Content-Type': 'application/json' },
        })
        if (response.ok){
            console.log("NewUserCreated")
        }
    }
}






document
    .querySelector('#mainBtn')
    ?.addEventListener('click', createUser)
