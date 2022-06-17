import {navbar} from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

let user = JSON.parse(localStorage.getItem("user"));


let cardetail=JSON.parse(localStorage.getItem("products"));
console.log(cardetail);

document.getElementById("price").innerText=`Rs ${cardetail[0].price}`;

document.getElementById("total").innerText=`Rs ${cardetail[0].price+166}`;

document.getElementById("final").innerText=document.getElementById("total").innerText;
document.getElementById("checkoutbtn").innerText=`Proceed To Pay ${document.getElementById("final").innerText}`;

let amount=cardetail[0].price+166
localStorage.setItem("amount",amount);

let finalprice = Math.floor((cardetail[0].price+166)/2);
document.getElementById("btn").addEventListener("click",()=>{

    let data = document.getElementById("promoInput").value;

    if(data==="zoomcar")
    {
        alert("woohoo! Great you got 50% discount");
     
        document.getElementById("final").innerText=`Rs ${finalprice}`;
        document.getElementById("checkoutbtn").innerText=`Proceed To Pay Rs ${finalprice}`;
        localStorage.setItem("amount",finalprice);

        window.location.href="./payment.html"
        
    }
    else{
        alert("Invalid PromoCode");
    }
    document.getElementById("promoInput").value=""
})

document.getElementById("carname").innerText=cardetail[0].name;
document.getElementById("cartype").innerText=`Type : ${cardetail[0].type}`;
document.getElementById("carimg").src=cardetail[0].image;


document.getElementById("startTime").innerText=` Start Time : ${user[0].date}, ${user[0].time}`;
document.getElementById("endTime").innerText = `End Time : ${user[0].date}, ${user[0].endtime}`;
document.getElementById("rating").innerText = `Rating : ${cardetail[0].rating}`;



document.getElementById("login").addEventListener("click",log)
function log(){
  window.location.href="./login.html"
}

document.getElementById("logo").addEventListener("click",logo)
function logo()
{
  window.location.href="./product.html"
}

