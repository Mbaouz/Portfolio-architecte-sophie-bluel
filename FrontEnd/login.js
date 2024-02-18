

import {login} from "./api.js"

const formLog = document.getElementById('login-form');
formLog.addEventListener("submit", async function (event) {
    event.preventDefault();
    const UserPassword = {
        email: event.target.querySelector("[name=e-mail]").value,
        password: event.target.querySelector("[name=password]").value,
    };

    
    const result =  login(UserPassword)
    

    if (result.token )
        window.localStorage.setItem('token', result.token)
        // Faire redirection ici
    
    // ici faire un message d'erreur, car la combinaison login mot de passe n'est pas bonne (a faire dans un else)
    console.log(result);
});

