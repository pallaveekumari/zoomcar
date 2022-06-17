import {navbar} from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

document.getElementById("mobile").addEventListener("click",login)

function login()
{
    window.location.href="./loginwithmobile.html"
}

document.getElementById("continue").addEventListener("click",conti)

function conti()

{
    window.location.href="./loginwithemail.html"
} 


document.getElementById("login").addEventListener("click",log)
function log(){
  window.location.href="./signup.html"
}

document.getElementById("logo").addEventListener("click",logo)
function logo()
{
  window.location.href="./landinpage.html"
}