function loginValidate(){
    // Taking all form params into consideration
    const form = document.forms.login;
    const username = form.elements.username;
    const password = form.elements.password;

    // Converting obj to be sent to fetch
    const data = {
        username: username.value,
        password: password.value
    };

    // Async function to check work
    async function checkLogin(){
        try{
            const value = await fetch('http://localhost:3000/login', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const res = await value.json();
            console.log(res);
        }catch(error){
            console.log(error);
            window.alert('Something went wrong please try again');
            username.value = '';
            password.value = '';
        }
    }
    
    // Checking for correct login
    checkLogin();

    // Always returning false to prevent refresh
    return false;
}

