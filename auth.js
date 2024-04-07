window.addEventListener("load",fLoad);

function fLoad() {
    document.getElementById("loginForm").addEventListener("submit",fValidation);
}

function fValidation(){
    event.preventDefault();
    let username = document.querySelector("#userEmail"); 
    let password = document.querySelector("#password"); 
    let userValid = true; 
    let passValid = true; 

    // create validation for now let it pass
    if (userValid && passValid) {
        window.location = "home.html"
    } else {
        alert("Form Vaidation Failed"); 
    }
    
}