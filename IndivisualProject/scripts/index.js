
import {navbar} from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();


document.getElementById("find").addEventListener("click",details)

function details()
{
let arr=[]
var obj={}


obj.city=document.getElementById("add").value;
obj.address=document.getElementById("address").value;
obj.date=document.getElementById("date").value;
obj.time=document.getElementById("starttime").value;
obj.endtime=document.getElementById("endtime").value;
arr.push(obj)


localStorage.setItem("user",JSON.stringify(arr))


document.getElementById("add").innerText="";
document.getElementById("address").innerText="";
document.getElementById("date").innerText="";
document.getElementById("starttime").innerText="";
document.getElementById("endtime").innerText="";

 window.location.href="./product.html";

}

document.getElementById("login").addEventListener("click",log)
function log(){
  window.location.href="./login.html"
}

document.getElementById("logo").addEventListener("click",logo)
function logo()
{
  window.location.href="index.html"
}