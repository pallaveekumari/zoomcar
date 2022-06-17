
import {navbar} from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

let payment=JSON.parse(localStorage.getItem("user"));


document.getElementById("point").addEventListener("click" ,pop)

function pop()
{
  
        document.querySelector(".popup").style.display = "flex";
        document.querySelector(".close").addEventListener("click",function(){
            document.querySelector(".popup").style.display = "none";
        })
}
document.getElementById("point1").addEventListener("click" ,pop1)

function pop1()
{
  
        document.querySelector(".popup").style.display = "flex";
        document.querySelector(".close").addEventListener("click",function(){
            document.querySelector(".popup").style.display = "none";
        })
}
document.getElementById("point2").addEventListener("click" ,pop2)

function pop2()
{
  
        document.querySelector(".popup").style.display = "flex";
        document.querySelector(".close").addEventListener("click",function(){
            document.querySelector(".popup").style.display = "none";
        })
}
document.getElementById("point3").addEventListener("click" ,pop3)

function pop3()
{
  
        document.querySelector(".popup").style.display = "flex";
        document.querySelector(".close").addEventListener("click",function(){
            document.querySelector(".popup").style.display = "none";
        })
}
var amn=localStorage.getItem("amount")
document.getElementById("amount").innerText=`Rs ${amn}`


var amn1=localStorage.getItem("amount")
document.getElementById("pay").innerText=`RS INR${amn1}`

document.getElementById("pay").addEventListener("click",done)
function done()
{
    window.location.href="../IndivisualProject/finalpage.html";
}

document.getElementById("login").addEventListener("click",log)
function log(){
  window.location.href="./login.html"
}


document.getElementById("logo").addEventListener("click",logo)
function logo()
{
  window.location.href="./checkout.html"
}