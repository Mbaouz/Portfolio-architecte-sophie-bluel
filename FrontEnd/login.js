

import { login } from "./api.js"
const logged = localStorage.getItem('token')

if (logged) {
    window.location.assign("index.html");
}

const formLog = document.getElementById('login-form');
formLog.addEventListener("submit", async function (event) {
    event.preventDefault();
    const UserPassword = {
        email: event.target.querySelector("[name=e-mail]").value,
        password: event.target.querySelector("[name=password]").value,
    };


    const result = await login(UserPassword)


    if (result.token) {
        localStorage.setItem('token', result.token);

        window.location.assign("index.html");

    } else { alert("Utilisateur ou mot de passe incorrect !") };



    
});

