window.addEventListener("load",fLoad);

function fLoad() {
    document.getElementById("singupForm").addEventListener("submit",fValidation);
}

function fValidation(){
    event.preventDefault();
    //validate form 
    //add to db
    window.location = "home.html"
}