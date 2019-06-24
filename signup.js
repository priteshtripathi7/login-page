function signUpValidate(){
    // Taking all form params into consideration
    const form = document.forms.signup;
    const username = form.elements.username;
    const password = form.elements.password;

    // Validating form params
    if(username.value.length < 8){
        window.alert('Username should be 8 characters long.')
        username.focus();
        return false;
    }
    if(password.value.length < 8){
        window.alert('Password should be 8 characters long.')
        password.focus();
        return false;
    }

    // Converting into object to be sent in fetch request
    const data = {
        username: username.value,
        password: password.value,
    }
    
    // Calling the function
    checkSignup();

    // Asynchronous function to fetch
    async function checkSignup(){
        try{
            const value = await fetch('http://localhost:3000/signup', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            var res = await value.json();
            console.log(res);
            
        }catch(error){
            var err = JSON.stringify(error);
            console.log('Error occured');
        }
    }

    // Always returning false to prevent page refresh
    return false;
}