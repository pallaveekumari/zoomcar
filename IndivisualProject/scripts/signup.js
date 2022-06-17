import {navbar} from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();


document.getElementById("OTP").addEventListener("click",signup)

function signup(){
var input=document.createElement("input")

input.placeholder="Enter OTP"
input.setAttribute("id","otp")
document.getElementById("signupotp").append(input);
}
let arr= JSON.parse(localStorage.getItem("signupdata")) || [];
document.getElementById("signupsubmit").addEventListener("click",sign);

function sign(){

    
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobi").value;
    let email = document.getElementById("em").value;
    let pass = document.getElementById("pass").value;

    let obj={};
    obj.name=name;
    obj.email=email;
    obj.mobile=mobile;
    obj.password=pass;

    arr.push(obj);
    localStorage.setItem("signupdata",JSON.stringify(arr));
    window.location.href="./login.html"
}


document.getElementById("logo").addEventListener("click",logo)
function logo()
{
  window.location.href="./login.html"
}