
// import {sidebar} from "../components/sidebar.js";
// document.getElementById("sidebar").innerHTML=sidebar();

import {navbar} from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();
let userdetails = JSON.parse(localStorage.getItem("signupdata"));
console.log(userdetails)

document.getElementById("cont").addEventListener("click",loginwithmobile);

function loginwithmobile(){

    let enteredData=document.getElementById("mobnum").value;
    for(let i=0;i<userdetails.length;i++)
    {
        if(userdetails[i].mobile==enteredData)
        {
            alert("Login Successful");
            window.location.href="./index.html";
            break;
        }
    }
 }


 document.getElementById("login").addEventListener("click",log)
function log(){
  window.location.href="./login.html"
}


document.getElementById("logo").addEventListener("click",logo)
function logo()
{
  window.location.href="./login.html"
}