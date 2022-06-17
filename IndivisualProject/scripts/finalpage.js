import {navbar} from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();


document.getElementById("logo").addEventListener("click",logo)
function logo()
{
  window.location.href="./index.html"
}
