console.log("object");

let toggleButton=document.getElementsByClassName('toggle-button')[0];
let navLinks=document.getElementsByClassName('nav-links')[0];
let closebtn=document.getElementById('close');
let notification=document.getElementsByClassName('notification-btn');
// let card=document.getElementsByClassName('card');

//Navbar code

toggleButton.addEventListener('click',()=>{
    navLinks.classList.toggle('active');
    console.log("clicks");
    closebtn.style.display="block";
})

closebtn.addEventListener('click',()=>{
    navLinks.classList.remove('active');
    console.log("clicks");
})



//slider code
let flag=0;

function controller(x){
    flag=flag+x;
    slidershow(flag);
}

function slidershow(num){

    let slider=document.getElementsByClassName('slide');

    console.log(slider);
    for(let y of slider){
        y.style.display="none";
    }

    if(flag==slider.length){
        flag=0;
        num=0;
    }
    if(flag<0){
        flag=slider.length-1;
        num=slider.length-1;
    }

    slider[num].style.display="block";

}
slidershow(flag);


//Cart  logic
let count=0;
function add(){
 let   cartDisplay=document.getElementById('cart-display');
//     let calcalute=0;
//     calcalute=calcalute+1;
    
//     console.log("object")
count++;
cartDisplay.textContent=count;

btn.style.backgroundColor="hsl(26, 100%, 55%)";
    btn.textContent="Add to cart";



}
function minus(){
    let   cartDisplay=document.getElementById('cart-display');
   //     let calcalute=0;
   //     calcalute=calcalute+1;
       
   //     console.log("object")
   count--;
   cartDisplay.textContent=count;
   if(count<0){
       count=0;
       cartDisplay.textContent="0"

   }
   
   btn.style.backgroundColor="hsl(26, 100%, 55%)";
    btn.textContent="Add to cart";
   }

   //btn click

   let btn=document.getElementById('btn');

 function  btnClick(){

    // let btn=document.getElementById('btn');
    // let   cartDisplay=document.getElementById('cart-display');
    let notification=document.getElementById('notification');
  
    btn.style.backgroundColor="green";
    btn.textContent="Added";

    if(btn.value=='added'){
            btn.textContent="Add";
            btn.style.backgroundColor="green";
    }
        
    notification.textContent=count;
    // console.log(cartDisplay);
    // console.log(notification);
  
 }

 //card

 let card=document.getElementsByClassName('card-header')[0];
 let carticon=document.getElementById('cart');

//  function hideShowCard(){
//   card.classList.toggle('card-show');
//  }
carticon.addEventListener('click',()=>{
    card.classList.toggle('show');
    console.log("clicks");
})

