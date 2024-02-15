


export function login(){
    
    const formLog = document.getElementById('login-form');
    formLog.addEventListener("submit",function(event){
        
        event.preventDefault();
        const UserPassword = {
            email: event.target.querySelector("[name=e-mail]").value,
            password : event.target.querySelector("[name=password]").value, 
          

        }
        
        const chargeUtile = JSON.stringify(UserPassword);
        fetch ("http://localhost:5678/api/users/login",{
            method : "POST",
            headers :{"content-type" : "application/json "} ,
            body : chargeUtile
            

        });
        
       
    });
    
}

