

import {login} from "./api.js"

const formLog = document.getElementById('login-form');
formLog.addEventListener("submit", async function (event) {
    event.preventDefault();
    const UserPassword = {
        email: event.target.querySelector("[name=e-mail]").value,
        password: event.target.querySelector("[name=password]").value,
    };

    
    const result =  await login(UserPassword)
    

    if (result.token ){
        localStorage.setItem('token', result.token);
      
        window.location.assign("admin.html");
        
    }else{ alert("Utilisateur ou mot de passe incorrect !")};

    
    
    console.log(result);
});

