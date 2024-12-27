const wrapper= document.querySelector(".sliderWrapper")
const menuItem= document.querySelectorAll(".menuItem")

const product=[
{
    id:1,
    title:"Air Force",
    price:119,
    colors:[
        {
            code:"black",
            img:"images/img/air.png",
        },
        {
            code:"darkblue",
            img:"images/img/air2.png",
        },
    ],
},
{
    id:2,
    title:"Air Jordan",
    price:149,
    colors:[
        {
            code:"lighter",
            img:"images/img/jordan.png",
        },
        {
            code:"green",
            img:"images/img/jordan2.png",
        },
    ],
},
{
    id:3,
    title:"Blazer",
    price:109,
    colors:[
        {
            code:"lighter",
            img:"images/img/blazer.png",
        },
        {
            code:"green",
            img:"images/img/blazer2.png",
        },
    ],
},
{
    id:4,
    title:"Crater ",
    price:129,
    colors:[
        {
            code:"black",
            img:"images/img/crater.png",
        },
        {
            code:"lightgray",
            img:"images/img/crater2.png",
        },
    ],
},
{
    id:5,
    title:"Hippie",
    price:159,
    colors:[
        {
            code:"gray",
            img:"images/img/hippie.png",
        },
        {
            code:"green",
            img:"images/img/hippie2.png",
        },
    ],
},
]

let choosenproduct =product[0]

const currentProductImg= document.querySelector(".productImg")
const currentProductTitle= document.querySelector(".productTitle")
const currentProductPrice= document.querySelector(".productPrice")
const currentProductcolors= document.querySelectorAll(".color")
const currentProductSizes= document.querySelectorAll(".size")
menuItem.forEach((item,index)=>{
     item.addEventListener("click",()=>{
        //chang the current slide
        wrapper.style.transform='translateX(${-100* index}vw)';
    //chang the choosen product
    choosenproduct = product[index]; 
    //chane text of currentProduct
    currentProductTitle.textContent = choosenproduct.title;
    currentProductPrice.textContent = "$"+choosenproduct.price;
    currentProductImg.src = choosenproduct.colors[0].img;
    
    currentProductcolors.forEach((color,index) => {
        color.style.backgroundcolor = choosenproduct.colors[index].code;
    });
    });
});

currentProductcolors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src = choosenproduct.colors[index].img
    });
});

currentProductSizes.forEach((size,indexe)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundcolor ="white";
            size.style.color ="black";
        })
        size.style.backgroundcolor="black"
        size.style.color="white"
    });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const closee = document.querySelector(".closee");


productButton.addEventListener("click",()=>{
    payment.style.display="flex"
});
// closee.addEventListener("click",()=>{
//     payment.style.display="flex"
// });

 const goClose=()=>{
    payment.style.display="flex"
 }