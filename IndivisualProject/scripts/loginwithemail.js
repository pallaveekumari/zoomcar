import {navbar} from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();


let userdetails = JSON.parse(localStorage.getItem("signupdata"));
console.log(userdetails)

document.getElementById("cont").addEventListener("click",loginwithemail);

function loginwithemail(){

    let enteredData=document.getElementById("mobnum").value;
    for(let i=0;i<userdetails.length;i++)
    {
        if(userdetails[i].email==enteredData)
        {
            alert("Login Successful");
            window.location.href="./landinpage.html";
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