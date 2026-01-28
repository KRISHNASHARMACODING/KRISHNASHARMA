
let display = document.querySelector(".display");
let start = document.querySelector(".start");
let pause = document.querySelector(".pause");
let reset =document.querySelector(".reset");
 let input = document.querySelector("#timeinput");


let totalSecond  = 0;
let interval = null;

start.addEventListener("click",()=>{
   if(interval!==null) return;
   totalSecond = input.value*60;
   interval =setInterval(()=>{
    if(totalSecond<=0){
        clearInterval(interval);
        interval = null;
        return;
    }
    totalSecond--;
    let min =Math.floor(totalSecond/60);
    let sec = totalSecond%60;
    let m =min<10?"0"+min:min;
    let s =sec<10?"0"+sec:sec;

    display.innerText = m + ":"+ s;
   },1000)
});

function stoptimer(){
    clearInterval(interval);
    interval  = null;
}

function resettimer(){
    clearInterval(interval);
    min = 0
    sec = 0;
    display.innerText = "";
}
  
