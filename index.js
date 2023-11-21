let signupbtn = document.getElementById("signupbtn");
let loginbtn = document.getElementById("loginbtn");
let namefield = document.getElementById("namefield");
let datefield = document.getElementById("datefield");
let numberfield = document.getElementById("numberfield");
let title = document.getElementById("title");

loginbtn.onclick =function(){
    namefield.style.maxHeight="0";
    datefield.style.maxHeight="0";
    numberfield.style.maxHeight="0";
    title.innerHTML="Login";
    signupbtn.classList.add("disable")
    loginbtn.classList.remove("disable")
}
signupbtn.onclick =function(){
    namefield.style.maxHeight="60px";
    datefield.style.maxHeight="60px";
    numberfield.style.maxHeight="60px";
    title.innerHTML="Signup";
    signupbtn.classList.remove("disable")
    loginbtn.classList.add("disable")

}
