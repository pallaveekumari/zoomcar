import {navbar} from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();


var arr=[]
class product
{
    constructor(name,image,type,price,seats,ratings)
    {
        this.name=name;
        this.image=image;
        this.type=type;
        this.price=price;
        this.seats=seats;
        this.rating=ratings;
    }
   
}

var n1=new product("Renault Kwid Climber","https://zoomcar-assets.zoomcar.com/photographs/original/3716b00730a3a77e96c447ffb3a6f8acc83ad6cc.JPG?1636361140","petrol",1430,5,4.5)
var n2=new product("Datsun Go Plus","https://zoomcar-assets.zoomcar.com/photographs/original/d4f137a56d1bcbf2a8f976b5029685d095425930.JPG?1623737903","petrol",1570,7,4.6)
var n3=new product("Maruti Alto","https://zoomcar-assets.zoomcar.com/photographs/original/7bb2b597b5040b4ccb4d2e0996ce45cdf6d851be.JPG?1637560780","petrol",1362,5,4.7)
var n4=new product("Renault Kwid","https://zoomcar-assets.zoomcar.com/photographs/original/6b6934b244bef5a3fdef3976171b05cb3fec155e.JPG?1638530676","diesel",1201,7,4.9)
var n5=new product("Maruti Brezza Petrol","https://zoomcar-assets.zoomcar.com/photographs/original/949dc9a40773b57605d8675a2052e1cd9358e8c4.JPG?1622543556","petrol",2273,5,4.0)
var n6=new product("Maruti Swift","https://zoomcar-assets.zoomcar.com/photographs/original/4f978e418417cef5f069be1c013ee75b34c294ce.png?1613648724","diesel",1416,5,4.0)
var n7=new product("Renault Kiger RXT AMT","https://zoomcar-assets.zoomcar.com/photographs/original/3ab34c1d79d2c3c74ed6f509ad6e4151c5cef28e.JPG?1635318304","petrol",2285,5,4.0)
var n8=new product("Honda Amaze","https://zoomcar-assets.zoomcar.com/photographs/original/8f743fcc8af6670e2ddefe59f69e98848d95ef2c.png?1584526224","petrol",1765,5,4.7)
var n9=new product("Maruti Baleno","https://zoomcar-assets.zoomcar.com/photographs/original/d748d92c90c3b84a32f4115da1e5bd3f3f352937.jpg?1615958311","diesel",2068,7,5.0)
var n10=new product("Tata Tigor","https://zoomcar-assets.zoomcar.com/photographs/original/55cf48c3aca88c14b839a360411dfe0dcc761c5a.jpg?1618911344","petrol",1887,5,4.8)

arr.push(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10)

console.log(arr)

let arr1=[];
function append(data)
{
    document.getElementById("container").innerHTML=null;
    data.map (function(el)
    {
        let div=document.createElement("div");
        div.id="box";

        let priceDiv=document.createElement("div");
        priceDiv.id="priceDiv"
        
        let imgDiv=document.createElement("div");
        imgDiv.id="imgDiv"
        let image=document.createElement("img")
        image.src=el.image;

        let detailDiv=document.createElement("div");
        detailDiv.id="detailDiv"
        let name=document.createElement("h3")
        name.innerText=el.name;

        let type=document.createElement("h4")
        type.innerText=`Type : ${el.type}`;

        let price=document.createElement("p")
        price.innerText=`Rs ${el.price}`;
        price.id="price"

        let seats=document.createElement("h4")
        seats.innerText=`Seats : ${el.seats}`;

        let ratings=document.createElement("h4")
        ratings.innerText=`Ratings : ${el.rating}`;

        let btn=document.createElement("button")
        btn.innerText="BUY NOW";
        btn.id="button";
        btn.class="btnc"

        btn.addEventListener("click",function()
        {
                buynow(el)
        })
        
        imgDiv.append(image);
        detailDiv.append(name,type,seats,ratings);
        priceDiv.append(price,btn)
        div.append(imgDiv,detailDiv,priceDiv)
        document.getElementById("container").append(div)
    });
}

append(arr);


function buynow(el)
{
    arr1.push(el);
    localStorage.setItem("products",JSON.stringify(arr1))
    window.location.href="./checkout.html";
}


    document.getElementById("seatchoose5").addEventListener("click",()=>{

        // let val = document.getElementById("seatchoose5").value;

        var filteredlist = arr.filter((el)=>{
            return el.seats === 5
        })

        append(filteredlist);
        document.getElementById("seatchoose5").style.backgroundColor="#10a310";
        document.getElementById("seatchoose5").style.color="white";
        document.getElementById("seatchoose5").style.borderRadius="5%"
    })


    document.getElementById("seatchoose7").addEventListener("click",()=>{

        // let val = document.getElementById("seatchoose5").value;

        var filteredlist = arr.filter((el)=>{
            return el.seats === 7
        })

        append(filteredlist);
        document.getElementById("seatchoose7").style.backgroundColor="#10a310";
        document.getElementById("seatchoose7").style.color="white";
        document.getElementById("seatchoose7").style.borderRadius="5%"
    })


    document.getElementById("petrol").addEventListener("click",()=>{

        // let val = document.getElementById("seatchoose5").value;

        var filteredlist = arr.filter((el)=>{
            return el.type === "petrol"
        })

        append(filteredlist);
        document.getElementById("petrol").style.backgroundColor="#10a310";
        document.getElementById("petrol").style.color="white";
        document.getElementById("petrol").style.borderRadius="5%"

        // document.getElementById("")
    })


    document.getElementById("diesel").addEventListener("click",()=>{

        // let val = document.getElementById("seatchoose5").value;

        var filteredlist = arr.filter((el)=>{
            return el.type === "diesel"
        })

        append(filteredlist);
        document.getElementById("diesel").style.backgroundColor="#10a310";
        document.getElementById("diesel").style.color="white";
        document.getElementById("diesel").style.borderRadius="5%"
    })

    document.getElementById("LTH").addEventListener("click",()=>{

        var filteredlist = arr.sort((a,b)=>{
            return a.price-b.price
        })

        append(filteredlist);
        document.getElementById("LTH").style.backgroundColor="#10a310";
        document.getElementById("LTH").style.color="white";
        document.getElementById("LTH").style.borderRadius="5%"
    })


    document.getElementById("HTL").addEventListener("click",()=>{

        var filteredlist = arr.sort((a,b)=>{
            return b.price-a.price
        })

        append(filteredlist);
        document.getElementById("HTL").style.backgroundColor="#10a310";
        document.getElementById("HTL").style.color="white";
        document.getElementById("HTL").style.borderRadius="5%"
    })


    



    document.getElementById("login").addEventListener("click",log)
    function log(){
      window.location.href="./login.html"
    }

    document.getElementById("logo").addEventListener("click",logo)
function logo()
{
  window.location.href="./landinpage.html"
}